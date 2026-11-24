import { services, site } from "../site";
import { Reveal } from "./Reveal";
import { serviceIcons } from "./Icons";
import { useSpot } from "./useSpot";

export function Services() {
  const spot = useSpot();
  return (
    <section id="services" className="container-site section-pad">
      <Reveal className="mb-12 max-w-[60ch] md:mb-16">
        <p className="eyebrow-line">Services</p>
        <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold">What {site.brand} does</h2>
        <p className="mt-4 text-[1.1rem] text-fog">Pick one thing or the whole set. Every project starts with a conversation about what your business actually needs.</p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.title];
          const wide = i === 0 || i === 3;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className={wide ? "sm:col-span-2 lg:col-span-1" : ""}>
              <article className="glass spot flex h-full flex-col gap-5 p-6 transition-colors hover:border-line-strong md:p-7" onMouseMove={spot}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal/25 to-marigold/15 text-teal">
                  {Icon ? <Icon /> : null}
                </span>
                <h3 className="service-title text-[1.4rem] font-semibold">{s.title}</h3>
                <p className="text-fog">{s.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
