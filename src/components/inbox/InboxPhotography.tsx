import photoImage from "@/assets/inbox-photo.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export function InboxPhotography() {
  return <div className="grid gap-6 md:grid-cols-2">
      <Card className="overflow-hidden border-border/70 bg-card/50 shadow-soft">
        <img src={photoImage} alt="Fotografia profissional para conteúdo de marca" className="h-72 w-full object-cover md:h-full" loading="lazy" />
      </Card>

      <Card className="border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
        <p className="text-xs uppercase tracking-[0.32em] text-primary/80">Fotografia Profissional</p>
        <h3 className="mt-4 font-display text-2xl">Conteúdo Visual Sofisticado</h3>
        <p className="mt-3 text-muted-foreground">
          Um conteúdo visual sofisticado valoriza sua marca e eleva sua presença digital.
        </p>

        <div className="mt-6 rounded-lg border border-border/70 bg-background/10 p-4">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-display text-lg">Ensaio Profissional</p>
            <p className="text-primary">R$ 680</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Sessão fotográfica completa com direção de arte e edição profissional para elevar a imagem da sua marca.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md border border-border/70 bg-card/40 p-3">
              <p className="font-display text-xl text-primary">30</p>
              <p className="text-muted-foreground">Fotos profissionais</p>
            </div>
            <div className="rounded-md border border-border/70 bg-card/40 p-3">
              <p className="font-display text-xl text-primary">+R$ 25</p>
              <p className="text-muted-foreground">Foto extra</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button asChild variant="hero" size="pill" className="w-full">
            
          </Button>
        </div>
      </Card>
    </div>;
}