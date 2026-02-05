import { InboxTopNav } from "@/components/inbox/InboxTopNav";
import { InboxHero } from "@/components/inbox/InboxHero";
import { InboxSection } from "@/components/inbox/InboxSection";
import { InboxDeliverables } from "@/components/inbox/InboxDeliverables";
import { InboxPricing } from "@/components/inbox/InboxPricing";
import { InboxPhotography } from "@/components/inbox/InboxPhotography";
import { InboxProcess } from "@/components/inbox/InboxProcess";
import { InboxAbout } from "@/components/inbox/InboxAbout";
import { InboxContact } from "@/components/inbox/InboxContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InboxTopNav />
      <main>
        <InboxHero />

        <InboxSection
          id="servicos"
          eyebrow="Apresentação"
          title="Olá!"
          subtitle="É um prazer receber você aqui."
          className="bg-background"
        >
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
              <p className="text-muted-foreground">
                A sua marca merece ser vista de forma estratégica, elegante e memorável.
              </p>
              <p className="mt-4 text-muted-foreground">
                Na INBOX Agência, acreditamos que uma identidade forte e uma presença digital bem construída são o primeiro
                passo para marcas que desejam se posicionar com excelência.
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur">
              <p className="font-display text-xl leading-snug">
                “Mais do que criar artes bonitas, desenvolvemos uma comunicação premium, alinhada ao propósito e ao estilo do
                seu negócio.”
              </p>
              <p className="mt-4 text-muted-foreground">Estamos prontos para transformar sua marca em uma experiência visual única.</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.36em] text-primary/80">Identidade Visual</p>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">O que você receberá</h3>
            </div>
            <div className="mt-8">
              <InboxDeliverables />
            </div>
          </div>
        </InboxSection>

        <InboxSection
          id="investimento"
          eyebrow="Social Media"
          title="Investimento"
          subtitle="Escolha a opção ideal para o momento da sua marca"
        >
          <InboxPricing />

          <div className="mt-16">
            <InboxPhotography />
          </div>
        </InboxSection>

        <InboxSection
          id="processo"
          eyebrow="Prazos"
          title="Nosso Processo"
          subtitle="Planejado para garantir qualidade e exclusividade em cada detalhe"
        >
          <InboxProcess />
        </InboxSection>

        <InboxSection id="sobre" eyebrow="Quem Somos" title="Quem irá desenvolver seu projeto?">
          <InboxAbout />
        </InboxSection>

        <InboxSection
          id="contato"
          eyebrow="Contato"
          title="Vamos criar algo incrível juntos?"
          subtitle="Estamos prontos para ouvir sobre seu projeto e transformar sua visão em realidade"
        >
          <InboxContact />
        </InboxSection>
      </main>

      <footer className="border-t border-border/70 py-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-display">INBOX</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} • Proposta | 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

