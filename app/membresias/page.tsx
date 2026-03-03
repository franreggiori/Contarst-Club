import { PageHeader } from '@/components/page-header';
import { memberships } from '@/data/memberships';

export default function MembresiasPage() {
  return (
    <div>
      <PageHeader title="Membresías" subtitle="Planes multi-sede para frecuencia, prioridad de agenda y comunidad." />
      <section className="container grid gap-4 md:grid-cols-3">
        {memberships.map((m) => (
          <article key={m.id} className="card">
            <h2 className="text-2xl font-semibold">{m.name}</h2>
            <p className="text-white/70">{m.sessions}</p>
            <p className="my-3 text-3xl font-semibold">{m.priceLabel}</p>
            <ul className="space-y-2 text-sm text-white/70">
              {m.features.map((f) => <li key={f}>• {f}</li>)}
              <li>• {m.guestPass}</li>
              <li>• Descuento eventos privados: {m.privateDiscount}</li>
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
