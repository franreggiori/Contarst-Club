'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { slots } from '@/data/schedule';
import { BookingRecord, createBookingId, generateICS, getBookings, saveBooking } from '@/lib/booking';

type FormState = {
  locationId?: string;
  serviceId?: string;
  date?: string;
  slotId?: string;
  name: string;
  email: string;
  phone: string;
  disclaimer: boolean;
  firstTime: boolean;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  disclaimer: false,
  firstTime: true
};

function ReservarPageContent() {
  const search = useSearchParams();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [confirmed, setConfirmed] = useState<BookingRecord | null>(null);

  const availableServices = useMemo(
    () => services.filter((s) => !form.locationId || s.availableAtLocations.includes(form.locationId)),
    [form.locationId]
  );
  const dates = useMemo(() => {
    const filtered = slots.filter((s) => s.locationId === form.locationId && s.serviceId === form.serviceId && s.spotsLeft > 0);
    return [...new Set(filtered.map((s) => s.date))];
  }, [form.locationId, form.serviceId]);
  const times = useMemo(
    () =>
      slots.filter(
        (s) => s.locationId === form.locationId && s.serviceId === form.serviceId && s.date === form.date && s.spotsLeft > 0
      ),
    [form.locationId, form.serviceId, form.date]
  );

  const selectedSlot = slots.find((s) => s.id === form.slotId);

  useEffect(() => {
    const bookingId = search.get('bookingId');
    if (!bookingId) return;
    const found = getBookings().find((b) => b.bookingId === bookingId);
    if (!found) return;
    const matchingSlot = slots.find(
      (s) => s.locationId === found.locationId && s.serviceId === found.serviceId && s.date === found.date && s.time === found.time
    );
    setForm((prev) => ({
      ...prev,
      locationId: found.locationId,
      serviceId: found.serviceId,
      date: found.date,
      slotId: matchingSlot?.id,
      name: found.name,
      email: found.email,
      phone: found.phone,
      firstTime: found.firstTime,
      disclaimer: true
    }));
    setStep(matchingSlot ? 6 : 4);
  }, [search]);

  const confirm = () => {
    if (!selectedSlot) return;
    const booking: BookingRecord = {
      bookingId: createBookingId(),
      locationId: selectedSlot.locationId,
      serviceId: selectedSlot.serviceId,
      date: selectedSlot.date,
      time: selectedSlot.time,
      name: form.name,
      email: form.email,
      phone: form.phone,
      firstTime: form.firstTime,
      createdAt: new Date().toISOString()
    };
    saveBooking(booking);
    setConfirmed(booking);
  };

  if (confirmed) {
    const location = locations.find((l) => l.id === confirmed.locationId);
    const service = services.find((s) => s.id === confirmed.serviceId);
    return (
      <div className="container card space-y-4">
        <h1 className="text-3xl font-semibold">Reserva confirmada (simulada)</h1>
        <p>ID: {confirmed.bookingId}</p>
        <p>{location?.name} · {service?.name} · {confirmed.date} · {confirmed.time}</p>
        <button
          className="button-primary"
          onClick={() => generateICS(confirmed, `Reserva ${service?.name}`, `Sede: ${location?.name}`)}
        >
          Agregar al calendario (.ics)
        </button>
      </div>
    );
  }

  return (
    <div className="container space-y-5">
      <h1 className="text-4xl font-semibold">Reservar</h1>
      <p className="text-white/65">Paso {step} de 6</p>

      {step === 1 && (
        <section className="grid gap-3 md:grid-cols-3">
          {locations.map((l) => (
            <button
              key={l.id}
              className="card text-left"
              onClick={() => {
                setForm({ ...form, locationId: l.id });
                setStep(2);
              }}
            >
              <h2 className="text-xl font-semibold">{l.city}</h2>
              <p className="text-white/70">{l.address}</p>
            </button>
          ))}
        </section>
      )}

      {step === 2 && (
        <section className="grid gap-3 md:grid-cols-2">
          {availableServices.map((s) => (
            <button
              key={s.id}
              className="card text-left"
              onClick={() => {
                setForm({ ...form, serviceId: s.id });
                setStep(3);
              }}
            >
              <h2 className="text-xl font-semibold">{s.name}</h2>
              <p className="text-white/65">{s.duration} · {s.intensity}</p>
              <p className="mt-2 text-white/75">{s.includes[0]}</p>
            </button>
          ))}
        </section>
      )}

      {step === 3 && (
        <section className="grid gap-2 md:grid-cols-4">
          {dates.map((d) => (
            <button
              key={d}
              onClick={() => {
                setForm({ ...form, date: d });
                setStep(4);
              }}
              className="card"
            >
              {d}
            </button>
          ))}
        </section>
      )}

      {step === 4 && (
        <section className="space-y-2">
          {times.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setForm({ ...form, slotId: t.id });
                setStep(5);
              }}
              className="card flex w-full items-center justify-between"
            >
              <span>{t.time} · {t.spotsLeft}/{t.capacity} cupos</span>
              <span className="text-sm text-white/70">{t.instructorName ? `Instructor: ${t.instructorName}` : 'Staff safety'} · {t.tags.join(', ')}</span>
            </button>
          ))}
        </section>
      )}

      {step === 5 && (
        <section className="card space-y-3">
          <input placeholder="Nombre y apellido" className="w-full rounded-xl border border-white/20 bg-transparent p-3" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Email" type="email" className="w-full rounded-xl border border-white/20 bg-transparent p-3" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input placeholder="Teléfono" className="w-full rounded-xl border border-white/20 bg-transparent p-3" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" onChange={(e) => setForm({ ...form, disclaimer: e.target.checked })} /> Acepto disclaimer de salud</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.firstTime} onChange={(e) => setForm({ ...form, firstTime: e.target.checked })} /> Primera vez</label>
          <button className="button-primary" disabled={!form.name || !form.email || !form.phone || !form.disclaimer} onClick={() => setStep(6)}>Continuar</button>
        </section>
      )}

      {step === 6 && selectedSlot && (
        <section className="card space-y-4">
          <h2 className="text-2xl font-semibold">Confirmación</h2>
          <p>Sede: {locations.find((l) => l.id === selectedSlot.locationId)?.name}</p>
          <p>Servicio: {services.find((s) => s.id === selectedSlot.serviceId)?.name}</p>
          <p>Fecha y hora: {selectedSlot.date} · {selectedSlot.time}</p>
          <p className="text-sm text-white/65">Si tenés condiciones médicas, consultá con tu médico. No recomendado para condiciones cardiovasculares no controladas o cuadros agudos.</p>
          <button className="button-primary" onClick={confirm}>Confirmar reserva</button>
        </section>
      )}

      {step > 1 && !confirmed && <button className="button-secondary" onClick={() => setStep(step - 1)}>Volver</button>}
    </div>
  );
}

export default function ReservarPage() {
  return (
    <Suspense fallback={<div className="container"><p className="text-white/70">Cargando agenda...</p></div>}>
      <ReservarPageContent />
    </Suspense>
  );
}
