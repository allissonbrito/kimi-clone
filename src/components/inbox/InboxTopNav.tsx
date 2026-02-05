import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

const items: NavItem[] = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Investimento", href: "#investimento" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function InboxTopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-background/40 backdrop-blur-md" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />

      <div className="container pointer-events-auto relative flex h-16 items-center justify-between">
        <a href="#hero" className="font-display text-xl tracking-wide">
          INBOX
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Seções">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="heroOutline" size="pill" className="hidden md:inline-flex">
          <a href="#contato">Iniciar Projeto</a>
        </Button>
      </div>
    </header>
  );
}
