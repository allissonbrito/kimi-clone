import heroImage from "@/assets/inbox-hero.jpg";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useCallback } from "react";
export function InboxHero() {
  const reducedMotion = useReducedMotion();
  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * 100;
    const y = (e.clientY - r.top) / r.height * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  }, [reducedMotion]);
  return <section id="hero" onMouseMove={onMove} className="relative min-h-[92svh] overflow-hidden pt-16" aria-label="Hero">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Mão com caneta digital criando uma identidade visual" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay" />
      </div>

      <div className="container relative grid min-h-[92svh] items-center">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.36em] text-primary/80 animate-fade-up">
            Proposta | 2026
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[0.98] md:text-7xl animate-fade-up">
            Identidade Visual
            <span className="block text-primary">&amp; Social Media</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg animate-fade-up">
            Sua marca merece ser vista de forma estratégica, elegante e memorável. Comunicação premium alinhada ao
            propósito do seu negócio.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up">
            <Button asChild variant="heroOutline" size="pill">
              <a href="#servicos">Conhecer Serviços</a>
            </Button>
          </div>

          <div className="mt-14 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-foreground/60">
            <span>Explorar</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/10 shadow-soft animate-float">
              ↓
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>;
}