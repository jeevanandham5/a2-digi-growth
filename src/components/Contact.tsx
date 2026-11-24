import { links, site } from "../site";
import { Reveal } from "./Reveal";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./Icons";
import { useSpot } from "./useSpot";

const channels = [
  { name: "WhatsApp", detail: site.phoneDisplay, href: links.whatsapp, Icon: WhatsAppIcon, external: false },
  { name: "Instagram", detail: `@${site.instagramHandle.replace(/^@/, "")}`, href: links.instagram, Icon: InstagramIcon, external: true },
  { name: "Email", detail: site.email, href: links.email, Icon: MailIcon, external: false },
];

export function Contact() {
  const spot = useSpot();
  return (
    <section id="contact" className="relative overflow-hidden section-pad">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,181,47,0.18),rgba(25,195,173,0.12)_35%,transparent_65%)]" />
      </div>
      <div className="container-site">
        <Reveal>
          <h2 className="max-w-[12ch] text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[0.95]">
            Ready to <span className="gradient-text">grow?</span><br />Let's talk.
          </h2>
          <p className="mt-6 max-w-[40ch] text-[1.2rem] text-fog">Send your shop name and what you need. Replies come the same day.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {channels.map(({ name, detail, href, Icon, external }, i) => (
            <Reveal key={name} delay={i * 0.1}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener" : undefined}
                onMouseMove={spot}
                className="glass spot grid grid-cols-[auto_1fr] items-center gap-x-4 p-6 text-white no-underline transition hover:-translate-y-1 hover:border-marigold/60"
              >
                <span className="row-span-2 grid h-12 w-12 place-items-center rounded-2xl bg-marigold/15 text-marigold"><Icon className="h-6 w-6" /></span>
                <span className="font-display text-xl font-bold">{name}</span>
                <span className="text-fog [overflow-wrap:anywhere]">{detail}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
