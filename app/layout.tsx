import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matlux - Matelas de Luxe',
  description: 'Le confort absolu, l’élégance du sommeil.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.className} bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}