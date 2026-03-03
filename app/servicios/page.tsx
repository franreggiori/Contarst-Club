import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { services } from '@/data/services';

export default function ServiciosPage() {
  return (
    <div>
      <PageHeader title="Servicios" subtitle="Catálogo estandarizado para operar en red multi-sede y franquicia." />
      <section className="container grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} className="card">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{service.name}</h2>
              <span className="rounded-full border border-cold/50 px-3 py-1 text-xs">{service.badge}</span>
            </div>
            <p className="mb-2 text-white/65">{service.duration} · {service.intensity}</p>
            <p className="mb-4 text-white/75">{service.notes}</p>
            <div className="flex gap-2">
              <Link className="button-secondary" href={`/servicios/${service.slug}`}>Ver detalles</Link>
              <Link className="button-primary" href="/reservar">Reservar</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
