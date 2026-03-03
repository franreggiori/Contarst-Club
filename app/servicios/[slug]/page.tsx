import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';

export default function ServicioDetalle({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="container space-y-6">
      <section className="card">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cold">{service.badge}</p>
        <h1 className="mb-3 text-4xl font-semibold">{service.name}</h1>
        <p className="text-white/70">Duración: {service.duration} · Intensidad: {service.intensity}</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <article className="card">
          <h2 className="mb-3 text-xl font-semibold">Qué incluye</h2>
          <ul className="space-y-2 text-white/75">{service.includes.map((x) => <li key={x}>• {x}</li>)}</ul>
        </article>
        <article className="card">
          <h2 className="mb-3 text-xl font-semibold">Ideal para</h2>
          <ul className="space-y-2 text-white/75">{service.idealFor.map((x) => <li key={x}>• {x}</li>)}</ul>
        </article>
      </section>
      <section className="card">
        <h2 className="mb-3 text-xl font-semibold">Seguridad</h2>
        <p className="text-white/70">No brindamos diagnóstico ni tratamiento médico. Adaptamos la exposición por nivel y antecedentes reportados.</p>
      </section>
      <Link href="/reservar" className="button-primary">Reservar {service.name}</Link>
    </div>
  );
}
