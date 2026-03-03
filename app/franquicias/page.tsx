import { PageHeader } from '@/components/page-header';

export default function FranquiciasPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Franquicias" subtitle="Modelo replicable con marca, operación y protocolo de experiencia." />
      <section className="container grid gap-4 md:grid-cols-3">
        {[
          ['Operación', 'Manual de servicio, capacitación y KPIs por sede.'],
          ['Marca', 'Identidad premium global y lineamientos institucionales.'],
          ['Comercial', 'Playbook de membresías, agenda y alianzas B2B.']
        ].map(([h, p]) => (
          <article key={h} className="card"><h2 className="mb-2 text-xl font-semibold">{h}</h2><p className="text-white/70">{p}</p></article>
        ))}
      </section>
      <section className="container card">
        <h2 className="mb-2 text-2xl font-semibold">Lead form (simulado)</h2>
        <p className="text-white/70">franquicias@contrastclub.com · Respuesta en 48h.</p>
      </section>
    </div>
  );
}
