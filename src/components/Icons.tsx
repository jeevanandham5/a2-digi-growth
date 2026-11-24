type P = { className?: string };

export const WhatsAppIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.5-.3Z" />
  </svg>
);

export const InstagramIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2.2c-2.7 0-3 0-4 .1a7 7 0 0 0-2.4.4 4.8 4.8 0 0 0-1.7 1.1A4.8 4.8 0 0 0 2.8 5.6 7 7 0 0 0 2.3 8c0 1-.1 1.3-.1 4s0 3 .1 4a7 7 0 0 0 .5 2.4 4.8 4.8 0 0 0 1.1 1.7 4.8 4.8 0 0 0 1.7 1.1 7 7 0 0 0 2.4.5c1 0 1.3.1 4 .1s3 0 4-.1a7 7 0 0 0 2.4-.5 5 5 0 0 0 2.8-2.8 7 7 0 0 0 .5-2.4c0-1 .1-1.3.1-4s0-3-.1-4a7 7 0 0 0-.5-2.4 4.8 4.8 0 0 0-1.1-1.7 4.8 4.8 0 0 0-1.7-1.1 7 7 0 0 0-2.4-.4c-1-.1-1.3-.1-4-.1Zm0 1.8c2.7 0 3 0 4 .1a5 5 0 0 1 1.8.3 3 3 0 0 1 1.1.7 3 3 0 0 1 .7 1.1 5 5 0 0 1 .3 1.8c.1 1 .1 1.3.1 4s0 3-.1 4a5 5 0 0 1-.3 1.8 3.2 3.2 0 0 1-1.8 1.8 5 5 0 0 1-1.8.3c-1 .1-1.3.1-4 .1s-3 0-4-.1a5 5 0 0 1-1.8-.3 3 3 0 0 1-1.1-.7 3 3 0 0 1-.7-1.1 5 5 0 0 1-.3-1.8c-.1-1-.1-1.3-.1-4s0-3 .1-4a5 5 0 0 1 .3-1.8 3 3 0 0 1 .7-1.1 3 3 0 0 1 1.1-.7A5 5 0 0 1 8 4.1c1-.1 1.3-.1 4-.1Z" />
  </svg>
);

export const MailIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.4V17h16V7.4l-8 5.3-8-5.3ZM5.6 7l6.4 4.3L18.4 7H5.6Z" />
  </svg>
);

export const ArrowIcon = ({ className = "h-4 w-4" }: P) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Service icons, drawn as simple line glyphs. */
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const serviceIcons: Record<string, (p: P) => JSX.Element> = {
  "Static websites": ({ className = "h-7 w-7" }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><g {...base}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8M12 18v3" /></g></svg>
  ),
  "Shopify e-commerce stores": ({ className = "h-7 w-7" }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><g {...base}><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></g></svg>
  ),
  "Poster and creative design": ({ className = "h-7 w-7" }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><g {...base}><path d="M4 20l4-1 11-11-3-3L5 16l-1 4Z" /><path d="M13 7l3 3" /></g></svg>
  ),
  "Digital marketing": ({ className = "h-7 w-7" }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><g {...base}><path d="M4 14v-4l10-4v12L4 14Z" /><path d="M14 9a3 3 0 0 1 0 6M6 14l1 5h3l-1-5" /></g></svg>
  ),
  SEO: ({ className = "h-7 w-7" }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><g {...base}><circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.5-4.5M8 12l2-2 2 2 3-3" /></g></svg>
  ),
  "Solar scheme applications": ({ className = "h-7 w-7" }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><g {...base}><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></g></svg>
  ),
};
