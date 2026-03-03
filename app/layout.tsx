import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'FUEGO & HIELO — Contrast Club',
  description: 'Heat. Cold. Reset.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="min-h-screen py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
