import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function InboxContact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
        <h3 className="font-display text-2xl">Informações de Contato</h3>
        <div className="mt-5 space-y-4 text-sm">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-border/70 bg-background/10 p-4 transition-colors hover:bg-background/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-foreground/60">Instagram</p>
            <p className="mt-2 font-medium">@inboxagencia</p>
          </a>
          <a
            href="mailto:contato@inboxagencia.com"
            className="block rounded-lg border border-border/70 bg-background/10 p-4 transition-colors hover:bg-background/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-foreground/60">Email</p>
            <p className="mt-2 font-medium">contato@inboxagencia.com</p>
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-border/70 bg-background/10 p-4 transition-colors hover:bg-background/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-foreground/60">WhatsApp</p>
            <p className="mt-2 font-medium">(11) 99999-9999</p>
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Entre em contato e dê o próximo passo para elevar sua marca a outro nível.
        </p>
      </Card>

      <Card className="border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
        <h3 className="font-display text-2xl">Envie uma mensagem</h3>
        <form
          className="mt-5 space-y-3"
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            await new Promise((r) => setTimeout(r, 500));
            toast({
              title: "Mensagem enviada",
              description: "Recebemos seu contato. Em breve retornaremos.",
            });
            setIsSubmitting(false);
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <Input name="name" placeholder="Nome completo" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="phone" placeholder="Telefone" />
          <Textarea name="message" placeholder="Mensagem" rows={5} required />

          <Button type="submit" variant="hero" size="pill" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
