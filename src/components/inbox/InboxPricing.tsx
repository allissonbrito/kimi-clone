import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
type Plan = {
  title: string;
  price: string;
  highlight?: boolean;
  description: string;
  bullets: string[];
  cta: string;
};
const plans: Plan[] = [{
  title: "Presença Essencial",
  price: "R$ 630/mês",
  description: "Ideal para marcas que estão começando a construir sua presença digital.",
  bullets: ["3 posts semanais (imagens)", "2 reels mensais", "Captação realizada pela INBOX Agência", "Conteúdo com fotos fornecidas pela cliente"],
  cta: "Escolher Presença Essencial"
}, {
  title: "Presença Premium",
  price: "R$ 880/mês",
  highlight: true,
  description: "Para marcas que desejam se destacar com conteúdo de alta qualidade.",
  bullets: ["3 posts semanais (imagens)", "4 reels mensais", "Renovação de fotos e vídeos a cada 2 meses", "Gerenciamento estratégico do Instagram"],
  cta: "Escolher Presença Premium"
}];
export function InboxPricing() {
  return <div className="grid gap-4 md:grid-cols-2">
      {plans.map(plan => <Card key={plan.title} className={"relative overflow-hidden border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur " + (plan.highlight ? "ring-1 ring-primary/50" : "")}>
          {plan.highlight ? <div className="absolute right-4 top-4 rounded-full border border-border/70 bg-background/20 px-3 py-1 text-xs text-primary">
              Recomendado
            </div> : null}
          <h3 className="font-display text-2xl">{plan.title}</h3>
          <p className="mt-2 text-primary">{plan.price}</p>
          <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {plan.bullets.map(b => <li key={b} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                <span>{b}</span>
              </li>)}
          </ul>

          <div className="mt-6">
            <Button asChild variant={plan.highlight ? "hero" : "heroOutline"} size="pill" className="w-full">
              
            </Button>
          </div>
        </Card>)}
    </div>;
}