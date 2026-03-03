import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { locations } from '@/data/locations';

export default function SedesPage() {
  return (
    <div>
      <PageHeader title="Sedes" subtitle="Operación estandarizada en ubicaciones premium urbanas." />
      <section className="container grid gap-4 md:grid-cols-3">
        {locations.map((loc) => (
          <article key={loc.id} className="card">
            <h2 className="mb-1 text-xl font-semibold">{loc.name}</h2>
            <p className="text-white/70">{loc.address}</p>
            <p className="mt-2 text-sm text-white/55">{loc.hours}</p>
            <Link href={`/sedes/${loc.slug}`} className="mt-4 inline-flex text-cold">Ver sede →</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
