import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PerkProgress from "@/components/cart/PerkProgress";
import CrossSell from "@/components/cart/CrossSell";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { items, subtotal, totalItems, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();
  const placeholder = import.meta.env.BASE_URL + 'placeholder.svg';

  return (
    <>
      <SEO title="Cart – Nature's Arsenal" description="Review your cart before checkout at Nature's Arsenal." />

      <header className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Your Cart</h1>
          <p className="mt-2 text-muted-foreground">{totalItems} item{totalItems !== 1 && "s"} in cart</p>
        </div>
        {items.length > 0 && (
          <Button variant="tactile" onClick={() => navigate("/checkout")}>Proceed to Checkout</Button>
        )}
      </header>

      {items.length === 0 ? (
        <div className="mt-8 rounded-lg border p-8 text-center">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Link to="/catalog">
            <Button className="mt-4" variant="tactile">Browse Catalog</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <PerkProgress subtotal={subtotal} />

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardContent className="divide-y p-0">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col items-start gap-4 p-4 sm:flex-row sm:items-center">
                    <img src={placeholder} alt={`${item.name} product image - Nature's Arsenal`} className="h-16 w-16 rounded-md border object-cover" />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        aria-label={`Quantity for ${item.name}`}
                        type="number"
                        min={1}
                        max={99}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value) || 1)}
                        className="w-20"
                      />
                      <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="font-semibold tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground">Taxes and in-store pickup are calculated at the store.</p>
                <Button className="w-full" variant="tactile" onClick={() => navigate("/checkout")}>Checkout</Button>
                <Link to="/catalog" className="block text-center text-sm text-muted-foreground hover:underline">Continue shopping</Link>
              </CardContent>
            </Card>
          </div>

          <CrossSell excludeIds={items.map((i) => i.id)} />
        </div>
      )}
    </>
  );
};

export default Cart;
