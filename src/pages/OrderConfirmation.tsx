import { Link, useLocation, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const OrderConfirmation = () => {
  const { orderNumber } = useParams();
  const location = useLocation() as any;
  const name = location?.state?.name as string | undefined;
  const pickupLocation = location?.state?.pickupLocation as string | undefined;

  return (
    <>
      <SEO title="Order Confirmed – Nature's Arsenal" description="Your Nature's Arsenal order has been confirmed for in-store pickup." />
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Order Confirmed</h1>
        <p className="mt-3 text-muted-foreground">Thank you{name ? `, ${name}` : ""}! Your order is confirmed for in-store pickup.</p>
        {orderNumber && (
          <p className="mt-4 text-lg font-semibold">Order Number: <span className="tabular-nums">{orderNumber}</span></p>
        )}
        {pickupLocation && (
          <p className="mt-2 text-muted-foreground">Pickup Location: {pickupLocation}</p>
        )}
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/catalog"><Button variant="tactile">Continue Shopping</Button></Link>
          <Link to="/"><Button variant="outline">Back Home</Button></Link>
        </div>
      </section>
    </>
  );
};

export default OrderConfirmation;
