'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';
import { Globe, Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  locale: Locale;
  onToggleLocale: () => void;
}

export default function Navbar({ locale, onToggleLocale }: NavbarProps) {
  const t = translations[locale].nav;
  const isRtl = locale === 'ar';
  const [logoFailed, setLogoFailed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close sidebar on ESC key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  // Slide offset direction based on RTL / LTR
  const slideInitialX = isRtl ? '-100%' : '100%';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div className="w-full glass-nav rounded-full px-3.5 sm:px-5 py-2 shadow-sm flex items-center justify-between gap-3 border border-white/90">
            {/* Zone 1: Logo & Student Wordmark */}
            <a
              href="#top"
              className="group flex items-center gap-2.5 sm:gap-3 shrink min-w-0"
            >
              {/* Transparent Logo Container */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                {!logoFailed ? (
                  <Image
                    src="https://ik.imagekit.io/imgy4/Images%20used%20in%20websites/p6.png"
                    alt="Nasser Al-Otaibi Logo"
                    fill
                    sizes="36px"
                    className="object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoFailed(true)}
                  />
                ) : (
                  <span className="text-xs font-bold text-[#3E63DD]">NA</span>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-[#1B2340] tracking-tight group-hover:text-[#3E63DD] transition-colors truncate">
                  {t.studentName}
                </span>
                <span className="hidden sm:block text-[10px] text-[#1B2340]/60 -mt-0.5 truncate">
                  {t.subtitle}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links & Locale Switcher (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <nav className="flex items-center gap-5 text-sm font-medium text-[#1B2340]/80">
                <a
                  href="#work"
                  className="hover:text-[#3E63DD] transition-colors whitespace-nowrap px-1 py-0.5"
                >
                  {t.work}
                </a>
                <a
                  href="#contact"
                  className="hover:text-[#3E63DD] transition-colors whitespace-nowrap px-1 py-0.5"
                >
                  {t.contact}
                </a>
              </nav>

              <div className="w-[1px] h-3.5 bg-[#1B2340]/15 shrink-0" aria-hidden="true" />

              {/* Language Toggle */}
              <button
                type="button"
                onClick={onToggleLocale}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#3E63DD] bg-[#3E63DD]/10 hover:bg-[#3E63DD]/15 transition-all cursor-pointer whitespace-nowrap shrink-0"
                title={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
                aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
              >
                <Globe className="w-3.5 h-3.5 text-[#3E63DD]" aria-hidden="true" />
                <span>{t.switchLocaleLabel}</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden shrink-0">
              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(true)}
                className="w-9 h-9 rounded-full bg-[#3E63DD]/10 hover:bg-[#3E63DD]/15 active:bg-[#3E63DD]/20 text-[#1B2340] flex items-center justify-center transition-colors cursor-pointer"
                aria-label={locale === 'en' ? 'Open navigation menu' : 'فتح القائمة الرئيسية'}
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5 text-[#1B2340]" />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Sidebar Drawer & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={locale === 'en' ? 'Mobile navigation' : 'قائمة التصفح'}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop Overlay with Smooth Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 bg-[#1B2340]/50 backdrop-blur-xs cursor-pointer"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Sidebar Panel with Smooth Spring Slide Animation */}
            <motion.div
              initial={{ x: slideInitialX }}
              animate={{ x: 0 }}
              exit={{ x: slideInitialX }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
                mass: 0.8,
              }}
              className={`fixed inset-y-0 ${
                isRtl ? 'left-0' : 'right-0'
              } w-72 sm:w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl border-${
                isRtl ? 'r' : 'l'
              } border-white/80 p-6 flex flex-col justify-between z-10`}
            >
              {/* Top Bar of Sidebar: Brand & Close Button */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#3E63DD]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
                      {!logoFailed ? (
                        <Image
                          src="https://ik.imagekit.io/imgy4/Images%20used%20in%20websites/p6.png"
                          alt="Nasser Al-Otaibi Logo"
                          fill
                          sizes="32px"
                          className="object-contain mix-blend-multiply"
                          referrerPolicy="no-referrer"
                          onError={() => setLogoFailed(true)}
                        />
                      ) : (
                        <span className="text-xs font-bold text-[#3E63DD]">NA</span>
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#1B2340] block tracking-tight">
                        {t.studentName}
                      </span>
                      <span className="text-[11px] text-[#1B2340]/60 block -mt-0.5">
                        {locale === 'en' ? 'Kuwait University' : 'جامعة الكويت'}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    onClick={closeMenu}
                    className="w-9 h-9 rounded-full bg-[#1B2340]/5 hover:bg-[#3E63DD]/10 text-[#1B2340] hover:text-[#3E63DD] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label={locale === 'en' ? 'Close menu' : 'إغلاق القائمة'}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Status Badge */}
                <div className="my-5 p-3 rounded-2xl bg-[#EEF2FF] border border-[#3E63DD]/15 text-xs text-[#1B2340]/80">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-[#3E63DD]">
                      {locale === 'en' ? 'Dental Student' : 'طالب طب أسنان'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1B2340]/70">
                    {t.subtitle}
                  </p>
                </div>

                {/* Navigation Links with Micro-Interactions */}
                <nav className="flex flex-col gap-2 mt-2">
                  <motion.a
                    whileHover={{ x: isRtl ? -4 : 4 }}
                    whileTap={{ scale: 0.98 }}
                    href="#work"
                    onClick={closeMenu}
                    className="flex items-center justify-between p-3.5 rounded-2xl text-base font-semibold text-[#1B2340] hover:bg-[#3E63DD]/10 hover:text-[#3E63DD] transition-colors"
                  >
                    <span>{t.work}</span>
                    <ArrowUpRight className={`w-4 h-4 text-[#3E63DD] ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                  </motion.a>
                  <motion.a
                    whileHover={{ x: isRtl ? -4 : 4 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    onClick={closeMenu}
                    className="flex items-center justify-between p-3.5 rounded-2xl text-base font-semibold text-[#1B2340] hover:bg-[#3E63DD]/10 hover:text-[#3E63DD] transition-colors"
                  >
                    <span>{t.contact}</span>
                    <ArrowUpRight className={`w-4 h-4 text-[#3E63DD] ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                  </motion.a>
                </nav>
              </div>

              {/* Bottom Actions: Language Switcher & Quick Contact */}
              <div className="pt-5 border-t border-[#3E63DD]/10 space-y-3">
                {/* Language Switcher in Sidebar */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => {
                    onToggleLocale();
                    closeMenu();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-[#3E63DD] bg-[#3E63DD]/10 hover:bg-[#3E63DD]/20 transition-all cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-[#3E63DD]" />
                  <span>
                    {locale === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
                  </span>
                </motion.button>

                {/* Quick Communication Shortcuts */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href="tel:+96555226611"
                    className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#1B2340] flex items-center justify-center gap-1.5 font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#3E63DD]" />
                    <span>{locale === 'en' ? 'Call' : 'اتصال'}</span>
                  </motion.a>
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href="https://wa.me/96555226611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 flex items-center justify-center gap-1.5 font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{locale === 'en' ? 'WhatsApp' : 'واتساب'}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
