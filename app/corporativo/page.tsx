import Image from 'next/image';
import { PageHeader } from '@/components/page-header';

export default function CorporativoPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Corporate Reset" subtitle="Programa corporativo para equipos que necesitan foco, energía y recuperación de alto nivel." />

      <section className="container grid gap-4 md:grid-cols-2">
        <article className="card overflow-hidden p-0">
          <Image src="/images/corporativo-1.svg" alt="Evento wellness corporativo" width={1200} height={800} className="h-full w-full object-cover" />
        </article>
        <article className="card overflow-hidden p-0">
          <Image src="/images/corporativo-2.svg" alt="Recovery corporativo premium" width={1200} height={800} className="h-full w-full object-cover" />
        </article>
      </section>

      <section className="container grid gap-4 md:grid-cols-2">
        <article className="card">
          <h2 className="mb-3 text-2xl font-semibold">Beneficios para equipos</h2>
          <ul className="space-y-2 text-white/75">
            <li>• Mejora de foco, cohesión y energía grupal.</li>
            <li>• Espacios guiados para bajar estrés y recuperar claridad.</li>
            <li>• Experiencia premium que eleva cultura interna.</li>
          </ul>
        </article>
        <article className="card">
          <h2 className="mb-3 text-2xl font-semibold">Formatos de implementación</h2>
          <ul className="space-y-2 text-white/75">
            <li>• En sede (Palermo), grupos reducidos.</li>
            <li>• Activaciones privadas para leadership teams.</li>
            <li>• Programas mensuales con bloques recurrentes.</li>
          </ul>
        </article>
      </section>

      <section className="container card">
        <h2 className="mb-3 text-2xl font-semibold">Pasos de contratación</h2>
        <ol className="space-y-2 text-white/75">
          <li>1. Brief inicial de objetivos y tamaño de equipo.</li>
          <li>2. Propuesta de formato, capacidad y cronograma.</li>
          <li>3. Confirmación, onboarding y ejecución del programa.</li>
        </ol>
        <p className="mt-4 text-white/70">CTA: corporativo@contrastclub.com</p>
      </section>
    </div>
  );
}
