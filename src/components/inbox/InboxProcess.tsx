import { Card } from "@/components/ui/card";
type Step = {
  number: string;
  title: string;
  description: string;
  timing: string;
};
const steps: Step[] = [
  {
    number: "01",
    title: "Briefing Inicial",
    description:
      "Todo o alinhamento é feito online. Após o pagamento, você receberá um formulário para entendermos profundamente sua marca.",
    timing: "Prazo: Imediato",
  },
  {
    number: "02",
    title: "Entrega das Propostas",
    description: "As primeiras entregas acontecem com todo cuidado e atenção aos detalhes.",
    timing: "Prazo: Até 20 dias úteis",
  },
  {
    number: "03",
    title: "Alterações",
    description:
      "Cada solicitação de ajuste tem prazo de retorno. A partir da terceira rodada, poderá ser cobrado valor adicional de R$ 50,00 por solicitação.",
    timing: "Prazo: Até 5 dias úteis",
  },
];
export function InboxProcess() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step) => (
        <Card key={step.number} className="border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-2xl text-primary">{step.number}</span>
            <span className="text-xs uppercase tracking-[0.28em] text-foreground/50">Processo</span>
          </div>
          <h3 className="mt-5 font-display text-xl">{step.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          <p className="mt-4 text-xs text-foreground/60">{step.timing}</p>
        </Card>
      ))}

      <Card className="md:col-span-3 border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur"></Card>
    </div>
  );
}
