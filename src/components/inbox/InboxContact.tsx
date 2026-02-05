import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function InboxContact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Sem backend aqui — apenas feedback visual.
      await new Promise((r) => setTimeout(r, 500));
      toast({
        title: "Mensagem enviada!",
        description: "Recebemos seu contato e retornaremos em breve.",
      });
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
          />
          <Input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder="Seu e-mail"
            aria-label="Seu e-mail"
            type="email"
            required
          />
        </div>
        <Textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="Conte um pouco sobre o seu projeto"
          aria-label="Mensagem"
          rows={5}
          required
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
