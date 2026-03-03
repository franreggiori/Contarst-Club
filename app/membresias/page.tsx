import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { memberships } from '@/data/memberships';

export default function MembresiasPage() {
  return (
    <div>
      <PageHeader title="Membresías" subtitle="Planes para sostener frecuencia, consistencia y ritual." />
      <section className="container grid gap-4 md:grid-cols-3">
        {memberships.map((m) => (
          <Link key={m.id} href={`/membresias/${m.id}`} className="card transition hover:bg-white/10">
            <h2 className="text-2xl font-semibold">{m.name}</h2>
            <p className="text-white/70">{m.sessions}</p>
            <p className="my-3 text-3xl font-semibold">{m.priceLabel}</p>
            <ul className="space-y-2 text-sm text-white/70">
              {m.features.map((f) => <li key={f}>• {f}</li>)}
              <li>• {m.guestPass}</li>
              <li>• Descuento eventos privados: {m.privateDiscount}</li>
            </ul>
            <p className="mt-4 text-cold">Click para más info →</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
