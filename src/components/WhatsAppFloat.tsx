import { links } from "../site";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFloat() {
  return (
    <a
      href={links.whatsapp}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.9)] transition hover:scale-110"
    >
      <span className="animate-pulse-dot absolute inset-0 rounded-full" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
