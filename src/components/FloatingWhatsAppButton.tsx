import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "82988750435";

function buildWaMeUrl(text: string) {
  const normalized = WHATSAPP_NUMBER.replace(/\D/g, "");
  const phone = normalized.startsWith("55") ? normalized : `55${normalized}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function FloatingWhatsAppButton() {
  const url = buildWaMeUrl("Olá! Gostaria de solicitar uma proposta.");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button asChild variant="hero" size="pill" className="shadow-soft">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </Button>
    </div>
  );
}
