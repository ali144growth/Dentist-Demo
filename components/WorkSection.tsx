'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { ProjectItem, Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';
import CaseModal from './CaseModal';
import { ArrowUpRight } from 'lucide-react';

interface WorkSectionProps {
  locale: Locale;
}

export default function WorkSection({ locale }: WorkSectionProps) {
  const t = translations[locale].work;
  const isRtl = locale === 'ar';
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Soft Blobs */}
      <div
        className="absolute top-1/3 -right-24 w-96 h-96 bg-[#3E63DD]/8 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-80 h-80 bg-[#3E63DD]/8 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#3E63DD] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E63DD]" aria-hidden="true" />
            <span>{locale === 'en' ? 'Section 01 · Clinical Portfolio' : 'القسم 01 · المعرض السريري'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1B2340]">
            {t.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#1B2340]/70 mt-2 font-normal">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Asymmetric Organic Blob Tiles Layout (Not a uniform rectangular grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {t.projects.map((project, index) => {
            // Asymmetric rhythm alternates between wide and taller organic tiles
            const isWide = index === 0 || index === 3;

            return (
              <div
                key={project.id}
                className={`${project.spanClass} group cursor-pointer`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`${project.title} - ${project.insight}`}
              >
                <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 rounded-3xl glass-panel clinical-hover-lift">
                  {/* Organic Blob-Masked Image Showcase */}
                  <div className="relative w-full flex items-center justify-center my-2">
                    {/* Shadow Ambient Blob */}
                    <div
                      className={`absolute inset-0 bg-[#3E63DD]/20 ${project.blobClass} blur-md scale-95 group-hover:scale-105 transition-transform duration-500`}
                      aria-hidden="true"
                    />

                    {/* Masked Organic Image Container */}
                    <div
                      className={`relative w-full ${isWide ? 'h-64 sm:h-72' : 'h-64 sm:h-80'} ${project.blobClass} overflow-hidden bg-white shadow-lg border-2 border-white/90`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Clean Content Area (Strictly Minimal, Anti-Pill) */}
                  <div className="mt-4 pt-3 border-t border-[#3E63DD]/10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1B2340] group-hover:text-[#3E63DD] transition-colors">
                        {project.title}
                      </h3>
                      {/* One short insight line max */}
                      <p className="text-xs sm:text-sm text-[#1B2340]/70 mt-1 font-normal line-clamp-2">
                        {project.insight}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-[#1B2340]/55 pt-2 border-t border-dashed border-[#3E63DD]/15">
                      <span>
                        {project.category} · {project.year}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#3E63DD] font-medium group-hover:underline shrink-0">
                        <span>{locale === 'en' ? 'View details' : 'تفاصيل المشروع'}</span>
                        <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Details Modal */}
      <CaseModal
        project={selectedProject}
        locale={locale}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
