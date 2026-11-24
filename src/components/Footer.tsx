import { links, site } from "../site";

export function Footer() {
  return (
    <footer className="container-site flex flex-col gap-3 border-t border-line py-10 text-[0.95rem] text-mist md:flex-row md:items-center md:justify-between">
      <p>{site.brand}, {site.city}. Websites, Shopify stores, design and marketing for growing businesses.</p>
      <p className="flex gap-5">
        <a href={links.instagram} target="_blank" rel="noopener" className="text-fog hover:text-white">Instagram</a>
        <a href={links.whatsapp} className="text-fog hover:text-white">WhatsApp</a>
        <a href={links.email} className="text-fog hover:text-white">Email</a>
      </p>
    </footer>
  );
}
