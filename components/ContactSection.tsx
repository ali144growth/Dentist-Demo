'use client';

import React, { useState } from 'react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react';

interface ContactSectionProps {
  locale: Locale;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const t = translations[locale].contact;
  const isRtl = locale === 'ar';
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Organic Blob Shape Behind Glass */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-[#3E63DD]/20 to-[#6888F5]/15 blob-shape-hero blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3E63DD] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E63DD]" aria-hidden="true" />
            <span>{locale === 'en' ? 'Section 02 · Direct Contact' : 'القسم 02 · بيانات التواصل'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1B2340]">
            {t.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#1B2340]/70 mt-2 font-normal">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Exactly One Glass Panel for All Contact Info */}
        <div className="relative glass-panel rounded-3xl p-5 sm:p-10 shadow-xl border border-white/90 clinical-hover-lift">
          {/* Subtle Organic Corner Glows */}
          <div
            className="absolute top-0 end-0 w-44 h-44 bg-[#3E63DD]/10 blob-shape-1 blur-xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 start-0 w-40 h-40 bg-[#3E63DD]/10 blob-shape-2 blur-xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Contact Items Grid: Icons Over Labels, Minimal Text, Centered on Mobile (4 cards in balanced 2x2 grid) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* Phone (Tap-to-call) */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/80 border border-[#3E63DD]/15 hover:border-[#3E63DD]/40 transition-colors text-center sm:text-start items-center sm:items-start">
              <div className="w-full flex flex-col items-center sm:items-start">
                <div className="w-11 h-11 rounded-2xl bg-[#3E63DD]/10 text-[#3E63DD] flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1B2340]/60 font-medium block">
                  {t.phoneLabel}
                </span>
                <a
                  href={`tel:${t.phoneNumber}`}
                  className="text-base font-bold text-[#1B2340] hover:text-[#3E63DD] transition-colors mt-0.5 block tracking-tight font-mono tabular-nums"
                  dir="ltr"
                >
                  {t.phoneDisplay}
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3E63DD]/10 flex items-center justify-center sm:justify-between w-full gap-3">
                <a
                  href={`tel:${t.phoneNumber}`}
                  className="text-xs text-[#3E63DD] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>{locale === 'en' ? 'Call directly' : 'اتصال مباشر'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(t.phoneNumber, 'phone')}
                  className="text-xs text-[#1B2340]/60 hover:text-[#3E63DD] p-1 transition-colors cursor-pointer"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      <span>{t.copyPhoneSuccess}</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Email (Tap-to-email) */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/80 border border-[#3E63DD]/15 hover:border-[#3E63DD]/40 transition-colors text-center sm:text-start items-center sm:items-start">
              <div className="w-full flex flex-col items-center sm:items-start">
                <div className="w-11 h-11 rounded-2xl bg-[#3E63DD]/10 text-[#3E63DD] flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1B2340]/60 font-medium block">
                  {t.emailLabel}
                </span>
                <a
                  href={`mailto:${t.emailAddress}`}
                  className="text-sm sm:text-base font-bold text-[#1B2340] hover:text-[#3E63DD] transition-colors mt-0.5 block tracking-tight truncate max-w-full"
                >
                  {t.emailAddress}
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3E63DD]/10 flex items-center justify-center sm:justify-between w-full gap-3">
                <a
                  href={`mailto:${t.emailAddress}`}
                  className="text-xs text-[#3E63DD] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>{locale === 'en' ? 'Send email' : 'إرسال بريد'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(t.emailAddress, 'email')}
                  className="text-xs text-[#1B2340]/60 hover:text-[#3E63DD] p-1 transition-colors cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      <span>{t.copyEmailSuccess}</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Location / City */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/80 border border-[#3E63DD]/15 hover:border-[#3E63DD]/40 transition-colors text-center sm:text-start items-center sm:items-start">
              <div className="w-full flex flex-col items-center sm:items-start">
                <div className="w-11 h-11 rounded-2xl bg-[#3E63DD]/10 text-[#3E63DD] flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1B2340]/60 font-medium block">
                  {t.locationLabel}
                </span>
                <span className="text-base font-bold text-[#1B2340] mt-0.5 block tracking-tight">
                  {t.locationValue}
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3E63DD]/10 text-xs text-[#1B2340]/60 w-full text-center sm:text-start">
                {locale === 'en' ? 'Jabriya Campus · Faculty of Dentistry' : 'موقع الجابرية · كلية طب الأسنان'}
              </div>
            </div>

            {/* Social / LinkedIn */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/80 border border-[#3E63DD]/15 hover:border-[#3E63DD]/40 transition-colors text-center sm:text-start items-center sm:items-start">
              <div className="w-full flex flex-col items-center sm:items-start">
                <div className="w-11 h-11 rounded-2xl bg-[#3E63DD]/10 text-[#3E63DD] flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1B2340]/60 font-medium block">
                  {t.socialLabel}
                </span>
                <a
                  href={t.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#1B2340] hover:text-[#3E63DD] transition-colors mt-0.5 block tracking-tight truncate max-w-full"
                >
                  {t.socialDisplay}
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3E63DD]/10 flex items-center justify-center sm:justify-between w-full">
                <a
                  href={t.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#3E63DD] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>{locale === 'en' ? 'View profile' : 'زيارة الحساب'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Minimal Academic Footer */}
        <div className="mt-12 text-center text-xs text-[#1B2340]/60">
          <p>
            {locale === 'en'
              ? 'Nasser Al-Otaibi · Dental Student in Kuwait University'
              : 'ناصر العتيبي · طالب طب أسنان في جامعة الكويت'}
          </p>
        </div>
      </div>
    </section>
  );
}
