import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Método', '/metodo'],
  ['Servicios', '/servicios'],
  ['Membresías', '/membresias'],
  ['Sedes', '/sedes'],
  ['Corporativo', '/corporativo'],
  ['Franquicias', '/franquicias'],
  ['FAQ', '/faq']
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-bold tracking-[0.25em] text-white">
          FUEGO & HIELO
        </Link>
        <nav className="hidden gap-5 text-sm lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-white/80 transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Link href="/mis-turnos" className="button-secondary text-sm">
            Mis turnos
          </Link>
          <Link href="/reservar" className="button-primary text-sm">
            Reservar
          </Link>
        </div>
      </div>
    </header>
  );
}
