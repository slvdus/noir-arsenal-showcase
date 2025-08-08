-- Orders and order_items tables for in-store pickup checkout
-- Create orders table
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique default ('NA-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  customer_name text not null,
  email text not null,
  phone text,
  pickup_location text not null,
  pickup_time timestamptz,
  notes text,
  total numeric(10,2) not null default 0,
  created_at timestamptz not null default now()
);

-- Create order_items table
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id text not null,
  name text not null,
  price numeric(10,2) not null,
  quantity integer not null default 1
);

-- Enable Row Level Security
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Policies: This is a public-facing feature. Allow read and write for inserts and reads only. No updates/deletes.
create policy "Public can insert orders" on public.orders for insert to anon with check (true);
create policy "Public can view orders" on public.orders for select to anon using (true);

create policy "Public can insert order items" on public.order_items for insert to anon with check (true);
create policy "Public can view order items" on public.order_items for select to anon using (true);

-- Helpful indexes
create index if not exists idx_orders_created_at on public.orders(created_at desc);
create index if not exists idx_order_items_order_id on public.order_items(order_id);
