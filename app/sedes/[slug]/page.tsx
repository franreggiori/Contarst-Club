import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

export default function SedeDetalle({ params }: { params: { slug: string } }) {
  const location = locations.find((x) => x.slug === params.slug);
  if (!location) return notFound();
  const available = services.filter((s) => s.availableAtLocations.includes(location.id));

  return (
    <div className="container space-y-5">
      <section className="card">
        <h1 className="text-4xl font-semibold">{location.name}</h1>
        <p className="mt-2 text-white/70">{location.hero}</p>
        <p className="mt-2 text-white/60">{location.address} · {location.hours}</p>
      </section>
      <section className="card">
        <h2 className="mb-3 text-xl font-semibold">Amenidades</h2>
        <ul className="space-y-2 text-white/75">{location.amenities.map((x) => <li key={x}>• {x}</li>)}</ul>
      </section>
      <section className="card">
        <h2 className="mb-3 text-xl font-semibold">Servicios disponibles</h2>
        <div className="flex flex-wrap gap-2">{available.map((x) => <span key={x.id} className="rounded-full border border-white/20 px-3 py-1 text-sm">{x.name}</span>)}</div>
      </section>
    </div>
  );
}
