'use client';

import React from 'react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  locale: Locale;
}

export default function FloatingWhatsApp({ locale }: FloatingWhatsAppProps) {
  const t = translations[locale].floatingWhatsApp;
  const isRtl = locale === 'ar';

  return (
    <aside
      className={`fixed bottom-6 z-40 ${
        isRtl ? 'left-6' : 'right-6'
      } transition-all duration-300 pointer-events-auto`}
      aria-label="Quick contact"
    >
      <a
        href="https://wa.me/96555226611"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center cursor-pointer"
        aria-label={t.ariaLabel}
      >
        {/* Outer Thin Glass Ring with Subtle Pulse */}
        <div
          className="absolute -inset-1.5 rounded-full glass-panel border border-white/80 opacity-90 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
          aria-hidden="true"
        />

        {/* Primary Blue Circular Button with Pulse Animation */}
        <div
          className="relative w-14 h-14 rounded-full bg-[#3E63DD] hover:bg-[#3454c5] text-white flex items-center justify-center shadow-lg whatsapp-pulse transition-all duration-300 group-hover:scale-105"
        >
          <MessageCircle className="w-7 h-7" />

          {/* Active Status Dot */}
          <span className="absolute top-1 end-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white shadow-xs" />
        </div>

        {/* Tooltip on Hover */}
        <div
          className={`absolute bottom-full mb-3 px-3 py-1.5 rounded-xl glass-chip shadow-md text-xs font-semibold text-[#1B2340] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
            isRtl ? 'left-0' : 'right-0'
          }`}
        >
          {t.tooltip}
        </div>
      </a>
    </aside>
  );
}
