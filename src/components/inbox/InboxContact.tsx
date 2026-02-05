import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WHATSAPP_NUMBER = "82988750435";

function buildWaMeUrl(text: string) {
  const normalized = WHATSAPP_NUMBER.replace(/\D/g, "");
  const phone = normalized.startsWith("55") ? normalized : `55${normalized}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function InboxContact() {
  const url = buildWaMeUrl("Olá! Gostaria de solicitar uma proposta.");

  return (
    <Card className="border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
      <div className="grid gap-4">
        <p className="text-sm text-muted-foreground">
          Clique no botão abaixo para falar conosco diretamente no WhatsApp.
        </p>
        <div className="flex justify-end">
          <Button asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
