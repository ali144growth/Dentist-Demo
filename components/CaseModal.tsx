'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import type { ProjectItem, Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';
import { X, CheckCircle2 } from 'lucide-react';

interface CaseModalProps {
  project: ProjectItem | null;
  locale: Locale;
  onClose: () => void;
}

export default function CaseModal({ project, locale, onClose }: CaseModalProps) {
  const t = translations[locale].work;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1B2340]/60 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden text-[#1B2340] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3E63DD]/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3E63DD]" aria-hidden="true" />
            <span className="text-xs font-semibold text-[#3E63DD] uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1B2340]/5 hover:bg-[#3E63DD]/10 text-[#1B2340] hover:text-[#3E63DD] flex items-center justify-center transition-colors cursor-pointer"
            aria-label={t.modalClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Featured Image with Organic Blob Cutout Accent */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Heading */}
          <div>
            <h3 id="case-modal-title" className="text-2xl font-bold tracking-tight text-[#1B2340]">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[#3E63DD] mt-1">
              {project.insight}
            </p>
          </div>

          {/* Procedural Summary */}
          <div className="p-4 rounded-2xl bg-[#EEF2FF] border border-[#3E63DD]/15 text-sm text-[#1B2340]/85 leading-relaxed">
            {project.details}
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#3E63DD]/10">
              <span className="text-[#1B2340]/50 block mb-1">{t.modalDepartment}</span>
              <span className="font-semibold text-[#1B2340]">{project.department}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#3E63DD]/10">
              <span className="text-[#1B2340]/50 block mb-1">{t.modalYear}</span>
              <span className="font-semibold text-[#1B2340]">{project.year}</span>
            </div>
          </div>

          {/* Academic Integrity Notice */}
          <div className="flex items-center gap-2 text-xs text-[#1B2340]/60 pt-2 border-t border-[#3E63DD]/10">
            <CheckCircle2 className="w-4 h-4 text-[#3E63DD] shrink-0" />
            <span>{t.modalAcademicNotice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
