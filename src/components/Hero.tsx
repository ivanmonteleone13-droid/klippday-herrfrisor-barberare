import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section id="hem" className="relative overflow-hidden bg-[var(--accent)] py-20">
      <div className="absolute right-0 top-0 h-64 w-64 bg-[var(--secondary)]" style={{clipPath: "polygon(100% 0, 0 0, 100% 100%)"}} aria-hidden />
      <div className="absolute bottom-0 left-0 h-48 w-48 bg-[var(--primary)]" style={{clipPath: "polygon(0 100%, 0 0, 100% 100%)"}} aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--secondary)]">⚡ Drop-in & bokning</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--primary)] sm:text-6xl">
            Klipp dig
            <span className="block text-[var(--secondary)]">på Klippday</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--foreground)]/70">{business.description}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:flex">
            <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
              className="bg-[var(--primary)] px-8 py-4 text-center font-bold text-white">Boka</a>
            <a href={business.phoneLink}
              className="border-2 border-[var(--primary)] px-8 py-4 text-center font-bold text-[var(--primary)]">Ring</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 flex items-center justify-center bg-[var(--primary)] p-10 text-white">
            <span className="text-7xl" aria-hidden>⚡</span>
          </div>
          <div className="bg-[var(--secondary)] p-6 text-center font-mono text-sm font-bold text-[var(--dark)]">{business.rating}★</div>
          <div className="bg-white p-6 text-center font-mono text-sm font-bold text-[var(--primary)]">{business.reviewCount}+ rec.</div>
        </div>
      </div>
    </section>
  );
}
