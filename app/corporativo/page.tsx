import { PageHeader } from '@/components/page-header';

export default function CorporativoPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Corporate Reset" subtitle="Programas B2B para equipos, liderazgo y performance sostenible." />
      <section className="container card">
        <h2 className="mb-3 text-2xl font-semibold">Formato</h2>
        <p className="text-white/75">On-site o en sede. Diseñamos la experiencia para cultura, cohesión y recuperación del equipo.</p>
      </section>
      <section className="container card">
        <h2 className="mb-3 text-2xl font-semibold">Incluye</h2>
        <ul className="space-y-2 text-white/75">
          <li>• Facilitación + logística completa.</li>
          <li>• Protocolo por nivel de participantes.</li>
          <li>• Opción de charlas breves sobre estrés y resiliencia.</li>
        </ul>
      </section>
    </div>
  );
}
