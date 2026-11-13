'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = translations[locale].hero;
  const isRtl = locale === 'ar';
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden"
    >
      {/* Background Ambient Organic Blobs */}
      <div
        className="absolute top-12 -left-20 w-96 h-96 bg-[#3E63DD]/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-48 -right-20 w-[420px] h-[420px] bg-[#3E63DD]/12 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Split Hero: Typography & Meta (Left/Start) + Portrait in Organic Blob (Right/End) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Academic Tag Chip (Glass) */}
            <div className="inline-flex items-center gap-2 glass-chip px-3.5 py-1.5 rounded-full text-xs font-medium text-[#1B2340]/80 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3E63DD]" aria-hidden="true" />
              <span>{t.university}</span>
            </div>

            {/* Headline with Accent Highlight */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#1B2340] leading-[1.15] text-balance mb-5">
              {t.name}
              <span className="block text-2xl sm:text-4xl lg:text-[42px] font-semibold text-[#1B2340]/85 mt-2">
                {t.statusBefore}
                <span className="text-[#3E63DD] underline decoration-[#3E63DD]/30 decoration-4 underline-offset-8">
                  {t.statusHighlight}
                </span>{' '}
                {t.statusAfter}
              </span>
            </h1>

            {/* Exactly One Short Supporting Line */}
            <p className="text-base sm:text-lg text-[#1B2340]/75 max-w-xl font-normal leading-relaxed mb-8">
              {t.tagline}
            </p>

            {/* Single Call to Action (Glass Effect Button) */}
            <div className="flex items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#3E63DD] hover:bg-[#3454c5] shadow-sm clinical-hover-lift transition-all"
              >
                <span>{t.ctaButton}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-[#1B2340] glass-button hover:bg-white/90 clinical-hover-lift transition-all"
              >
                <span>{translations[locale].nav.contact}</span>
                <ArrowUpRight className={`w-4 h-4 text-[#3E63DD] ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>

          {/* Portrait Column: Organic Blob Mask + Colored Blob Backing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-80 sm:w-84 sm:h-96 md:w-92 md:h-[420px] flex items-center justify-center">
              {/* Vibrant Colored Organic Blob Layer Behind */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#3E63DD] to-[#6888F5] opacity-90 blob-shape-hero shadow-xl transform rotate-3 scale-105 transition-transform duration-700"
                aria-hidden="true"
              />

              {/* Secondary Soft Rim Blob Layer */}
              <div
                className="absolute -inset-2 bg-[#3E63DD]/25 blob-shape-2 blur-sm transform -rotate-2 scale-102"
                aria-hidden="true"
              />

              {/* Cropped Portrait Frame with Organic Blob Mask */}
              <div className="relative w-full h-full blob-shape-hero overflow-hidden bg-white shadow-2xl border-4 border-white/80">
                {!portraitFailed ? (
                  <Image
                    src="https://ik.imagekit.io/imgy4/Images%20used%20in%20websites/p5.png"
                    alt={t.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 420px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#3E63DD]/10 border border-[#3E63DD]/20 flex items-center justify-center mb-3">
                      <span className="text-xl font-bold text-[#3E63DD]">NA</span>
                    </div>
                    <span className="text-sm font-semibold text-[#1B2340]">{t.name}</span>
                    <span className="text-xs text-[#1B2340]/60 mt-1">{t.focusArea}</span>
                  </div>
                )}

                {/* Subtle Gradient Scrim at bottom of portrait for polish */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1B2340]/40 to-transparent pointer-events-none" />
              </div>

              {/* Glass Identification Badge */}
              <div className="absolute -bottom-4 z-20 glass-chip px-4 py-2 rounded-2xl shadow-lg border border-white/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-[#1B2340]">
                  {locale === 'en' ? 'Kuwait University Dental Clinic' : 'عيادات كلية طب الأسنان في جامعة الكويت'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Supporting Collage Strip Beneath Hero: 3 images cropped in different organic blob shapes */}
        <div className="mt-20 pt-8 border-t border-[#3E63DD]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-bold text-[#3E63DD] tracking-wider uppercase">
                {locale === 'en' ? 'Pre-Clinical Environments' : 'بيئة التدريب السريري'}
              </span>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1B2340]">
                {t.supportingGalleryTitle}
              </h2>
            </div>
            <div className="text-xs text-[#1B2340]/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E63DD]" aria-hidden="true" />
              <span>{locale === 'en' ? 'Laboratory & Rotations' : 'المختبرات والتدويرات السريرية'}</span>
            </div>
          </div>

          {/* Collage Strip of 3 Organic Blob-Masked Supporting Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center">
            {t.collageItems.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-3 rounded-3xl glass-panel clinical-hover-lift"
              >
                {/* Asymmetric Organic Blob Mask Container */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 my-2 flex items-center justify-center">
                  {/* Subtle Colored Shadow Blob */}
                  <div
                    className={`absolute inset-0 bg-[#3E63DD]/15 ${item.blobClass} blur-xs scale-105 group-hover:scale-110 transition-transform`}
                    aria-hidden="true"
                  />

                  {/* Masked Image */}
                  <div
                    className={`relative w-full h-full ${item.blobClass} overflow-hidden shadow-md border-2 border-white/90 bg-white`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 180px, 200px"
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Quiet Editorial Labels (Unboxed, Anti-Pill) */}
                <div className="mt-3 flex flex-col items-center">
                  <span className="text-sm font-semibold text-[#1B2340] group-hover:text-[#3E63DD] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xs text-[#1B2340]/65 mt-0.5">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
