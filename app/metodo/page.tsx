import { PageHeader } from '@/components/page-header';

export default function MetodoPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Método" subtitle="Protocolo moderno de estrés hormético: calor, frío, respiración y recuperación guiada." />
      <section className="container grid gap-4 md:grid-cols-3">
        {[
          ['Heat', 'Exposición controlada en sauna para activar foco y tolerancia al esfuerzo.'],
          ['Cold', 'Cold plunge asistido con coaching respiratorio y tiempos progresivos.'],
          ['Reset', 'Recovery para estabilizar sistema nervioso y cerrar el ciclo con claridad.']
        ].map(([title, body]) => (
          <article key={title} className="card">
            <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
            <p className="text-white/70">{body}</p>
          </article>
        ))}
      </section>
      <section className="container card">
        <h2 className="mb-3 text-2xl font-semibold">Seguridad</h2>
        <p className="mb-3 text-white/70">Trabajamos con protocolos estandarizados, facilitación capacitada y screening básico previo a cada sesión.</p>
        <ul className="space-y-2 text-white/70">
          <li>• Intensidad progresiva según experiencia.</li>
          <li>• Hidratación, descanso y monitoreo de señales de fatiga.</li>
          <li>• Si tenés condiciones médicas, consultá con tu médico antes de participar.</li>
        </ul>
      </section>
    </div>
  );
}
