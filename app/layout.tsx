import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans-en',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-sans-ar',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Nasser Al-Otaibi · Dental Student in Kuwait University',
  description: 'Clinical dental student portfolio showcasing coursework, pre-clinical laboratory work, and clinical rotations at Kuwait University.',
  openGraph: {
    title: 'Nasser Al-Otaibi · Dental Student in Kuwait University',
    description: 'Clinical dental student portfolio showcasing coursework, pre-clinical laboratory work, and clinical rotations at Kuwait University.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nasser Al-Otaibi · Dental Student in Kuwait University',
    description: 'Clinical dental student portfolio showcasing coursework, pre-clinical laboratory work, and clinical rotations at Kuwait University.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${plexArabic.variable}`}>
      <body className="antialiased selection:bg-[#3E63DD]/20 selection:text-[#1B2340]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
