export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="container mb-10">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cold">Heat. Cold. Reset.</p>
      <h1 className="mb-3 text-4xl font-semibold md:text-5xl">{title}</h1>
      <p className="max-w-2xl text-white/70">{subtitle}</p>
    </section>
  );
}
