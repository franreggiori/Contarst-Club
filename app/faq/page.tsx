import { PageHeader } from '@/components/page-header';

const faq = [
  ['¿Necesito experiencia previa?', 'No. Recomendamos Fundamentals o Ritual Guiado para empezar.'],
  ['¿Es una práctica médica?', 'No. Es una experiencia wellness guiada sin fines de diagnóstico o tratamiento.'],
  ['¿Qué pasa si tengo condiciones médicas?', 'Si tenés condiciones médicas, consultá con tu médico antes de participar.'],
  ['¿Qué no se recomienda?', 'No recomendado para condiciones cardiovasculares no controladas, embarazo de riesgo o cuadros agudos sin evaluación profesional.'],
  ['¿Puedo reservar en cualquier sede?', 'Sí, todas las membresías tienen acceso multi-sede.']
];

export default function FAQPage() {
  return (
    <div>
      <PageHeader title="FAQ" subtitle="Preguntas frecuentes y lineamientos de seguridad." />
      <section className="container space-y-3">
        {faq.map(([q, a]) => (
          <article key={q} className="card">
            <h2 className="mb-2 text-lg font-semibold">{q}</h2>
            <p className="text-white/70">{a}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
