import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { z } from "zod";

const WHATSAPP_NUMBER = "82988750435";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Informe seu nome")
    .max(100, "Nome muito longo"),
  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido")
    .max(255, "E-mail muito longo"),
  message: z
    .string()
    .trim()
    .min(1, "Escreva uma mensagem")
    .max(1000, "Mensagem muito longa"),
});

type ContactForm = z.infer<typeof contactSchema>;

function buildWhatsAppText(form: ContactForm) {
  return [
    "Olá! Gostaria de solicitar uma proposta.",
    "",
    `Nome: ${form.name}`,
    `E-mail: ${form.email}`,
    "",
    "Mensagem:",
    form.message,
  ].join("\n");
}

function buildWaMeUrl(text: string) {
  const normalized = WHATSAPP_NUMBER.replace(/\D/g, "");
  const phone = normalized.startsWith("55") ? normalized : `55${normalized}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function InboxContact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Confira os campos",
        description: parsed.error.issues[0]?.message ?? "Dados inválidos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const text = buildWhatsAppText(parsed.data);
      const url = buildWaMeUrl(text);

      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) {
        toast({
          title: "Não foi possível abrir o WhatsApp",
          description: "Seu navegador bloqueou o pop-up. Copie e cole o link manualmente.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Abrindo WhatsApp…",
          description: "Estamos te direcionando para enviar a mensagem.",
        });
      }

      setForm({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-2 md:grid-cols-2">
          <Input
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Seu nome"
            aria-label="Seu nome"
            required
            maxLength={100}
          />
          <Input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="Seu e-mail"
            aria-label="Seu e-mail"
            type="email"
            required
            maxLength={255}
          />
        </div>
        <Textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="Conte um pouco sobre o seu projeto"
          aria-label="Mensagem"
          rows={5}
          required
          maxLength={1000}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Abrindo..." : "Enviar"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
