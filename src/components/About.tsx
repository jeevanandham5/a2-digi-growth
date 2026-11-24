import { site } from "../site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="container-site section-pad">
      <div className="glass grid items-center gap-10 overflow-hidden p-6 md:p-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto grid aspect-[4/5] w-full max-w-[280px] place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-teal to-teal-deep shadow-window lg:max-w-none" aria-hidden="true">
            <div className="animate-spin-slow absolute -inset-8 rounded-full bg-[conic-gradient(from_0deg,transparent_0_70%,rgba(243,181,47,0.6)_85%,transparent_100%)] opacity-70 blur-xl" />
            <span className="relative font-display text-[clamp(5rem,12vw,9rem)] font-extrabold tracking-[-0.05em] text-marigold">A2</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow-line">About</p>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold">About {site.brand}</h2>
          <div className="mt-6 grid max-w-[60ch] gap-4 text-[1.08rem] text-fog">
            <p>{site.brand} is run by {site.ownerName} working with small and family-run businesses across Tamil Nadu. Most clients had never sold online before we started. I like turning a shop's existing identity, the colours on the signboard and the way they talk to customers, into something that works just as well on a phone screen.</p>
            <p>You work directly with me, with no agency in between, and I explain things in plain language. Tamil and English both fine.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
