import { tickerItems } from "../site";

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y border-line bg-night-2/60 py-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="animate-ticker flex w-max hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-7 whitespace-nowrap px-4 font-display text-[1.05rem] font-semibold text-fog">
            {t}
            <span className="block h-2 w-2 rounded-full bg-marigold" />
          </span>
        ))}
      </div>
    </div>
  );
}
