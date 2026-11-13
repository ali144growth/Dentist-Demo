'use client';

import React, { useState, useEffect } from 'react';
import type { Locale } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('ar'); // Default to Arabic or English, switchable

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#EEF2FF] text-[#1B2340] selection:bg-[#3E63DD]/20 selection:text-[#1B2340] relative overflow-x-hidden ${
        locale === 'ar' ? 'font-[var(--font-sans-ar)]' : 'font-[var(--font-sans-en)]'
      }`}
    >
      {/* Small Top Bar (Glass Strip) */}
      <Navbar locale={locale} onToggleLocale={toggleLocale} />

      {/* 3 Core Sections Only */}
      <main>
        {/* 1. Hero Section (Split hero with organic blob shapes, collage strip, and glass CTA) */}
        <HeroSection locale={locale} />

        {/* 2. Work Section (Cases/Training asymmetric blob-masked tiles) */}
        <WorkSection locale={locale} />

        {/* 3. Contact Section (Display-only single glass panel) */}
        <ContactSection locale={locale} />
      </main>

      {/* Persistent Floating WhatsApp Button (Mirrored bottom corner) */}
      <FloatingWhatsApp locale={locale} />
    </div>
  );
}
