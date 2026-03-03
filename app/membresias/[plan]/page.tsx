import Link from 'next/link';
import { notFound } from 'next/navigation';
import { memberships } from '@/data/memberships';

const idealByPlan: Record<string, string> = {
  starter: 'Ideal para quienes empiezan y quieren sostener una rutina mensual.',
  core: 'Ideal para quienes entrenan o buscan reset semanal con más frecuencia.',
  unlimited: 'Ideal para miembros avanzados que quieren máxima flexibilidad y prioridad.'
};

export default function MembershipDetailPage({ params }: { params: { plan: string } }) {
  const plan = memberships.find((m) => m.id === params.plan);
  if (!plan) return notFound();

  return (
    <div className="container space-y-5">
      <section className="card">
        <h1 className="text-4xl font-semibold">Plan {plan.name}</h1>
        <p className="mt-2 text-white/70">{plan.sessions} · {plan.priceLabel}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="card">
          <h2 className="mb-3 text-xl font-semibold">Qué incluye</h2>
          <ul className="space-y-2 text-white/75">
            {plan.features.map((f) => <li key={f}>• {f}</li>)}
            <li>• {plan.guestPass}</li>
            <li>• Descuento eventos privados: {plan.privateDiscount}</li>
          </ul>
        </article>
        <article className="card">
          <h2 className="mb-3 text-xl font-semibold">Para quién es ideal</h2>
          <p className="text-white/75">{idealByPlan[plan.id]}</p>
          <h3 className="mb-2 mt-4 text-lg font-semibold">Beneficios</h3>
          <ul className="space-y-2 text-white/75">
            <li>• Prioridad de reservas según plan.</li>
            <li>• Acceso continuo a la comunidad Contrast Club.</li>
            <li>• Mejor costo por sesión a mayor frecuencia.</li>
          </ul>
        </article>
      </section>

      <div className="flex gap-3">
        <Link href="/reservar" className="button-primary">Reservar / Elegir plan</Link>
        <Link href="/membresias" className="button-secondary">Volver a membresías</Link>
      </div>
    </div>
  );
}
