import { Progress } from "@/components/ui/progress";

interface PerkProgressProps {
  subtotal: number;
}

const PerkProgress = ({ subtotal }: PerkProgressProps) => {
  const goal = 500; // example goal for VIP perk
  const clamped = Math.min(goal, Math.max(0, subtotal));
  const pct = Math.round((clamped / goal) * 100);
  const remaining = Math.max(0, goal - subtotal);

  return (
    <section aria-label="Perk progress" className="rounded-lg border p-4 card-elevated animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="font-medium">Unlock VIP Perk</p>
        <span className="text-sm text-muted-foreground">{pct}%</span>
      </div>
      <Progress value={pct} className="mt-3" />
      <p className="mt-2 text-sm text-muted-foreground">
        {remaining > 0 ? `Add $${remaining.toFixed(2)} to unlock a bonus perk at pickup.` : "You've unlocked the VIP perk!"}
      </p>
    </section>
  );
};

export default PerkProgress;
