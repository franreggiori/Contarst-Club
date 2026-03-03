import Link from 'next/link';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { memberships } from '@/data/memberships';

export default function HomePage() {
  return (
    <div className="container space-y-14">
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cold">Fuego & Hielo — Contrast Club</p>
          <h1 className="mb-4 text-5xl font-semibold leading-tight">Cadena premium de contrast therapy.</h1>
          <p className="mb-6 text-white/70">Rituales guiados de sauna + cold plunge + breathwork + música, con operación estandarizada multi-sede.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/reservar" className="button-primary">Reservar experiencia</Link>
            <Link href="/franquicias" className="button-secondary">Modelo franquicias</Link>
          </div>
        </div>
        <div className="card">
          <h2 className="mb-4 text-xl font-semibold">Método institucional</h2>
          <ul className="space-y-3 text-white/75">
            <li>• Protocolos por servicio con intensidad definida.</li>
            <li>• Facilitadores certificados y operación segura.</li>
            <li>• Agenda con cupos, tags e instructor asignado.</li>
            <li>• Membresías multi-sede con prioridad de turnos.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Servicios estandarizados</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article key={service.id} className="card">
              <p className="mb-2 text-xs uppercase tracking-widest text-cold">{service.badge}</p>
              <h3 className="mb-1 text-xl font-medium">{service.name}</h3>
              <p className="mb-3 text-sm text-white/60">{service.duration} · {service.intensity}</p>
              <p className="text-sm text-white/75">{service.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {locations.map((location) => (
          <article key={location.id} className="card">
            <h3 className="text-xl font-medium">{location.city}</h3>
            <p className="text-white/70">{location.address}</p>
            <p className="mt-3 text-sm text-white/55">{location.hours}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2 className="mb-4 text-2xl font-semibold">Membresías</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {memberships.map((plan) => (
            <div key={plan.id} className="rounded-xl border border-white/10 p-5">
              <h3 className="text-xl">{plan.name}</h3>
              <p className="text-white/65">{plan.sessions}</p>
              <p className="my-3 text-2xl font-semibold">{plan.priceLabel}</p>
              <p className="text-sm text-white/60">{plan.guestPass} · Desc. privados {plan.privateDiscount}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
