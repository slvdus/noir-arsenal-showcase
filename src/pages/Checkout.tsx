import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupLocation, setPickupLocation] = useState("Front Desk");
  const [pickupTime, setPickupTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const placeOrder = async () => {
    if (items.length === 0) {
      toast({ title: "Cart is empty", description: "Add items before checking out." });
      return;
    }
    if (!name || !email) {
      toast({ title: "Missing info", description: "Name and email are required." });
      return;
    }

    setLoading(true);
    try {
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert([
          {
            customer_name: name,
            email,
            phone,
            pickup_location: pickupLocation,
            pickup_time: pickupTime ? new Date(pickupTime).toISOString() : null,
            notes,
            total: Number(subtotal.toFixed(2)),
          },
        ])
        .select("id, order_number")
        .maybeSingle();

      if (orderError || !order) throw orderError || new Error("Order not created");

      const itemsPayload = items.map((i) => ({
        order_id: order.id,
        product_id: i.id,
        name: i.name,
        price: Number(i.price.toFixed(2)),
        quantity: i.quantity,
      }));

      const { error: itemsError } = await supabase.from("order_items").insert(itemsPayload);
      if (itemsError) throw itemsError;

      clear();
      toast({ title: "Order placed", description: `Order ${order.order_number} confirmed for in-store pickup.` });
      navigate(`/order/${order.order_number}`, { state: { name, pickupLocation } });
    } catch (err: any) {
      console.error(err);
      toast({ title: "Checkout failed", description: err.message || "Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Checkout – Nature's Arsenal" description="Secure your in-store pickup order at Nature's Arsenal." />

      <header className="mb-2">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="mt-2 text-muted-foreground">In-store pickup only. We'll email you when it's ready.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent className="space-y-4 p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-5555" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup location</Label>
                <Input id="pickup" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} placeholder="Front Desk" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Pickup time (optional)</Label>
                <Input id="time" type="datetime-local" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Input id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any special instructions?" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Items</span>
              <span className="font-medium">{items.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-semibold tabular-nums">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Taxes are handled at pickup. You'll receive an email confirmation.</p>
            <Button className="w-full" variant="tactile" disabled={loading} onClick={placeOrder}>
              {loading ? "Placing Order..." : "Place Order"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Checkout;
