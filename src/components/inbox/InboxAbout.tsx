import teamImage from "@/assets/inbox-team.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function InboxAbout() {
  return (
    <div className="grid items-center gap-6 md:grid-cols-2">
      <Card className="overflow-hidden border-border/70 bg-card/50 shadow-soft">
        <img
          src={teamImage}
          alt="Equipe em um ambiente de trabalho criativo"
          className="h-72 w-full object-cover md:h-full"
          loading="lazy"
        />
      </Card>

      <div className="md:pl-2">
        <h3 className="font-display text-2xl">Quem irá desenvolver seu projeto?</h3>
        <p className="mt-3 text-muted-foreground">
          A INBOX Agência é uma agência boutique criativa, focada em marcas que desejam se posicionar com sofisticação e
          autenticidade.
        </p>
        <p className="mt-3 text-muted-foreground">
          Unimos design estratégico, estética premium e comunicação moderna para criar experiências visuais marcantes.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border/70" />
          <p className="text-xs uppercase tracking-[0.36em] text-primary">Comunicação com excelência</p>
          <div className="h-px flex-1 bg-border/70" />
        </div>

        <div className="mt-8">
          <Button asChild variant="heroOutline" size="pill">
            <a href="#contato">Vamos iniciar seu projeto?</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
