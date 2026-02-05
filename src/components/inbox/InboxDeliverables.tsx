import { Card } from "@/components/ui/card";

type Deliverable = {
  title: string;
  description: string;
};

const items: Deliverable[] = [
  {
    title: "Logotipo Principal",
    description: "A assinatura oficial da sua marca, criada para transmitir personalidade e sofisticação.",
  },
  {
    title: "Logotipo Secundário",
    description: "Versões alternativas para diferentes formatos e aplicações.",
  },
  {
    title: "Submark",
    description: "Uma marca reduzida, ideal para selos, ícones e detalhes exclusivos.",
  },
  {
    title: "Pattern Exclusivo",
    description: "Textura personalizada com elementos da sua identidade, perfeita para reforçar presença visual.",
  },
];

export function InboxDeliverables() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item.title} className="border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
          <h3 className="font-display text-xl">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        </Card>
      ))}

      <Card className="md:col-span-2 border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
        <p className="text-sm text-muted-foreground">
          Todos os arquivos são entregues em: <span className="text-foreground">AI (vetor editável), PNG, JPEG e PDF</span>,
          além de guia de cores e tipografia.
        </p>
      </Card>
    </div>
  );
}
