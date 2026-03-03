import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { memberships } from '@/data/memberships';

export default function HomePage() {
  return (
    <div className="container space-y-14">
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cold">Fuego & Hielo — Contrast Club</p>
          <h1 className="mb-4 text-5xl font-semibold leading-tight">Cadena premium de contraste térmico</h1>
          <p className="max-w-2xl text-white/70">
            Rituales guiados de sauna + cold plunge. Respiración, música y operación estandarizada.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/reservar" className="button-primary">Reservar experiencia</Link>
            <Link href="/franquicias" className="button-secondary">Modelo franquicias</Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="card overflow-hidden p-0">
          <Image src="/images/home-sauna.svg" alt="Ritual guiado en sauna" width={1200} height={900} className="h-full w-full object-cover" />
        </article>
        <article className="card overflow-hidden p-0">
          <Image src="/images/home-cold.svg" alt="Ritual de cold plunge" width={1200} height={900} className="h-full w-full object-cover" />
        </article>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Servicios estandarizados</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="card">
              <p className="mb-2 text-xs uppercase tracking-widest text-cold">{service.badge}</p>
              <h3 className="mb-1 text-xl font-medium">{service.name}</h3>
              <p className="mb-3 text-sm text-white/60">{service.duration} · {service.intensity}</p>
              <p className="text-sm text-white/75">{service.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Sedes</h2>
        <div className="grid gap-4 md:grid-cols-1">
          {locations.map((location) => (
            <article key={location.id} className="card">
              <h3 className="text-xl font-medium">{location.city}</h3>
              <p className="text-white/70">{location.address}</p>
              <p className="mt-3 text-sm text-white/55">{location.hours}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="mb-4 text-2xl font-semibold">Membresías</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {memberships.map((plan) => (
            <Link key={plan.id} href={`/membresias/${plan.id}`} className="rounded-xl border border-white/10 p-5 transition hover:bg-white/5">
              <h3 className="text-xl">{plan.name}</h3>
              <p className="text-white/65">{plan.sessions}</p>
              <p className="my-3 text-2xl font-semibold">{plan.priceLabel}</p>
              <p className="text-sm text-white/60">{plan.guestPass} · Desc. privados {plan.privateDiscount}</p>
              <p className="mt-3 text-sm text-cold">Click para más info →</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
