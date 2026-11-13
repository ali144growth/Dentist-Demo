export type Locale = 'en' | 'ar';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  insight: string;
  details: string;
  department: string;
  year: string;
  image: string;
  blobClass: string;
  aspectRatio: string;
  spanClass: string;
}

export interface ContentData {
  nav: {
    work: string;
    contact: string;
    studentName: string;
    subtitle: string;
    switchLocaleLabel: string;
    switchLocaleCode: string;
  };
  hero: {
    name: string;
    statusBefore: string;
    statusHighlight: string;
    statusAfter: string;
    university: string;
    focusArea: string;
    tagline: string;
    ctaButton: string;
    supportingGalleryTitle: string;
    collageItems: Array<{
      title: string;
      caption: string;
      image: string;
      blobClass: string;
    }>;
  };
  work: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    modalClose: string;
    modalDepartment: string;
    modalYear: string;
    modalInsight: string;
    modalAcademicNotice: string;
    projects: ProjectItem[];
  };
  contact: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    phoneLabel: string;
    phoneNumber: string;
    phoneDisplay: string;
    whatsappLabel: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    emailLabel: string;
    emailAddress: string;
    locationLabel: string;
    locationValue: string;
    socialLabel: string;
    socialDisplay: string;
    socialUrl: string;
    copyPhoneSuccess: string;
    copyEmailSuccess: string;
    vcardDownload: string;
  };
  floatingWhatsApp: {
    ariaLabel: string;
    tooltip: string;
  };
}

export const translations: Record<Locale, ContentData> = {
  en: {
    nav: {
      work: 'Work',
      contact: 'Contact',
      studentName: 'Nasser Al-Otaibi',
      subtitle: 'Dental Student in Kuwait University',
      switchLocaleLabel: 'العربية',
      switchLocaleCode: 'AR',
    },
    hero: {
      name: 'Nasser Al-Otaibi',
      statusBefore: '',
      statusHighlight: 'Dental Student',
      statusAfter: 'in Kuwait University',
      university: 'Kuwait University · Faculty of Dentistry · Year 3',
      focusArea: 'Pre-Clinical Restorative & Simulation Training',
      tagline: 'Committed to precise, patient-centered care.',
      ctaButton: 'View My Work',
      supportingGalleryTitle: 'Pre-Clinical Simulation & Lab Focus',
      collageItems: [
        {
          title: 'Simulation Lab',
          caption: 'Phantom head typodont training',
          image: '/images/supporting_dental_typodont_1790624077936.jpg',
          blobClass: 'blob-shape-1',
        },
        {
          title: 'Precision Instruments',
          caption: 'Sterile surgical & diagnostic tray',
          image: '/images/supporting_dental_instruments_1790624065026.jpg',
          blobClass: 'blob-shape-2',
        },
        {
          title: 'Wax Morphology',
          caption: 'Anatomical tooth carving',
          image: '/images/case_dental_waxing_1790624140302.jpg',
          blobClass: 'blob-shape-3',
        },
      ],
    },
    work: {
      sectionNumber: '01',
      sectionTitle: 'Clinical Rotations & Coursework',
      sectionSubtitle: 'Pre-clinical simulation, restorative lab modules, and supervised faculty training',
      modalClose: 'Close project preview',
      modalDepartment: 'Department / Module',
      modalYear: 'Academic Stage',
      modalInsight: 'Core Insight',
      modalAcademicNotice: 'Academic coursework completed in simulation laboratories and student rotations under faculty supervision.',
      projects: [
        {
          id: 'restorative-composite',
          title: 'Restorative Lab Project',
          category: 'Operative Dentistry',
          insight: 'Completed under faculty supervision, Year 3',
          details: 'Class II cavity preparation and biomimetic resin composite incremental layering on typodont dentition with micro-matrix isolation.',
          department: 'Restorative & Aesthetic Dental Sciences',
          year: 'Year 3 Pre-Clinical',
          image: '/images/case_restorative_composite_1790624090067.jpg',
          blobClass: 'blob-shape-1',
          aspectRatio: 'aspect-[4/3]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'endodontic-simulation',
          title: 'Endodontic Simulation Module',
          category: 'Endodontics',
          insight: 'NiTi rotary instrumentation & warm obturation',
          details: 'Root canal shaping with rotary continuous NiTi files and single-cone bioceramic sealer obturation on simulated transparent blocks.',
          department: 'Department of Endodontics',
          year: 'Year 3 Clinical Skills',
          image: '/images/case_endodontic_training_1790624099941.jpg',
          blobClass: 'blob-shape-2',
          aspectRatio: 'aspect-[4/3.5]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'dental-morphology',
          title: 'Dental Anatomy & Wax Carving',
          category: 'Dental Biomaterials',
          insight: 'Maxillary first molar anatomical wax-up',
          details: 'Reproduction of cuspal geometry, marginal ridges, and developmental grooves using PKT waxing instruments on stone dies.',
          department: 'Oral Biology & Anatomy',
          year: 'Year 2 Pre-Clinical',
          image: '/images/case_dental_waxing_1790624140302.jpg',
          blobClass: 'blob-shape-3',
          aspectRatio: 'aspect-[4/3.2]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'periodontal-simulation',
          title: 'Periodontal Instrumentation',
          category: 'Periodontology',
          insight: 'Grace curette subgingival root debridement',
          details: 'Ergonomic scaling techniques, tactile pocket depth evaluation with UNC-15 probe, and ultrasonic prophylaxis protocol.',
          department: 'Department of Periodontology',
          year: 'Year 3 Clinical Rotation',
          image: '/images/case_periodontal_model_1790624128943.jpg',
          blobClass: 'blob-shape-4',
          aspectRatio: 'aspect-[4/3]',
          spanClass: 'md:col-span-7',
        },
      ],
    },
    contact: {
      sectionNumber: '02',
      sectionTitle: 'Direct Contact',
      sectionSubtitle: 'Reach out for academic collaboration, research inquiries, or clinical training correspondence',
      phoneLabel: 'Phone',
      phoneNumber: '+96555226611',
      phoneDisplay: '+965 5522 6611',
      whatsappLabel: 'WhatsApp',
      whatsappNumber: '96555226611',
      whatsappDisplay: '+965 5522 6611',
      emailLabel: 'Email',
      emailAddress: 'nasser.alotaibi@example.com',
      locationLabel: 'Location',
      locationValue: 'Kuwait City, Kuwait',
      socialLabel: 'LinkedIn',
      socialDisplay: 'linkedin.com/in/nasser-alotaibi',
      socialUrl: 'https://linkedin.com/in/nasser-alotaibi',
      copyPhoneSuccess: 'Phone copied',
      copyEmailSuccess: 'Email copied',
      vcardDownload: 'Save Contact Card',
    },
    floatingWhatsApp: {
      ariaLabel: 'Message Nasser Al-Otaibi on WhatsApp',
      tooltip: 'WhatsApp Nasser',
    },
  },
  ar: {
    nav: {
      work: 'الأعمال والتدريب',
      contact: 'التواصل',
      studentName: 'ناصر العتيبي',
      subtitle: 'طالب طب أسنان في جامعة الكويت',
      switchLocaleLabel: 'English',
      switchLocaleCode: 'EN',
    },
    hero: {
      name: 'ناصر العتيبي',
      statusBefore: 'طالب ',
      statusHighlight: 'طب أسنان',
      statusAfter: 'في جامعة الكويت',
      university: 'جامعة الكويت · كلية طب الأسنان · السنة 3',
      focusArea: 'التدريب السريري وما قبل السريري في طب الأسنان الترميمي',
      tagline: 'ملتزم بالرعاية الدقيقة والمرتكزة على المريض.',
      ctaButton: 'عرض أعمالي',
      supportingGalleryTitle: 'المختبرات والتدريب السريري التشبيهي',
      collageItems: [
        {
          title: 'مختبر المحاكاة',
          caption: 'تدريب على مجسمات التايبودونت',
          image: '/images/supporting_dental_typodont_1790624077936.jpg',
          blobClass: 'blob-shape-1',
        },
        {
          title: 'أدوات دقيقة',
          caption: 'طقم الفحص والترميم المعقم',
          image: '/images/supporting_dental_instruments_1790624065026.jpg',
          blobClass: 'blob-shape-2',
        },
        {
          title: 'تشريح الأسنان الشمعي',
          caption: 'نحت المعالم التشريحية للضرس',
          image: '/images/case_dental_waxing_1790624140302.jpg',
          blobClass: 'blob-shape-3',
        },
      ],
    },
    work: {
      sectionNumber: '01',
      sectionTitle: 'التدريب السريري والمشاريع المخبرية',
      sectionSubtitle: 'نماذج من التدريب ما قبل السريري، طب الأسنان الترميمي، والتدويرات السريرية بإشراف هيئة التدريس',
      modalClose: 'إغلاق تفاصيل المشروع',
      modalDepartment: 'القسم الأكاديمي',
      modalYear: 'المرحلة الدراسية',
      modalInsight: 'المهارة الأساسية',
      modalAcademicNotice: 'أعمال وتدريبات أكاديمية منجزة في مختبرات المحاكاة والتدويرات الطلابية تحت إشراف أكاديمي مباشر.',
      projects: [
        {
          id: 'restorative-composite',
          title: 'مشروع مختبر الترميم',
          category: 'طب الأسنان التحفظي والترميمي',
          insight: 'أُنجز تحت إشراف هيئة التدريس، السنة 3',
          details: 'تحضير تجويف من الصنف الثاني (Class II) وبناء حشوات الكومبوزيت الراتنجية بتقنية الطبقات الدقيقة وعزل الحاجز المطاطي.',
          department: 'قسم علوم طب الأسنان الترميمية والتجميلية',
          year: 'السنة 3 (ما قبل السريري)',
          image: '/images/case_restorative_composite_1790624090067.jpg',
          blobClass: 'blob-shape-1',
          aspectRatio: 'aspect-[4/3]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'endodontic-simulation',
          title: 'وحدة علاج جذور الأسنان التشبيهية',
          category: 'علاج العصب والجذور',
          insight: 'تشكيل القنوات الدوارة وحشو العصب بالحرارة',
          details: 'تدريب على تنظيف وتوسيع القنوات الجذرية باستخدام المبارد الدوارة وحشو القناة بملاط السيراميك الحيوي على نماذج شفافة تحاكي التشريح الطبيعي.',
          department: 'قسم طب الأسنان اللبي (علاج العصب)',
          year: 'السنة 3 (مهارات سريرية)',
          image: '/images/case_endodontic_training_1790624099941.jpg',
          blobClass: 'blob-shape-2',
          aspectRatio: 'aspect-[4/3.5]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'dental-morphology',
          title: 'تشريح الأسنان والنحت الشمعي',
          category: 'المواد الحيوية وتشريح الفم',
          insight: 'نحت تشريحي كامل للضرس الأول العلوي',
          details: 'إعادة بناء شرفات الضرس والانحدارات المورفولوجية بدقة عالية باستخدام شمع الأسنان وأدوات النحت الدقيقة.',
          department: 'علم الأحياء الفموي والتشريح',
          year: 'السنة 2 (ما قبل السريري)',
          image: '/images/case_dental_waxing_1790624140302.jpg',
          blobClass: 'blob-shape-3',
          aspectRatio: 'aspect-[4/3.2]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'periodontal-simulation',
          title: 'تدريب تقليح وجرف اللثة',
          category: 'طب أمراض اللثة وما حول الأسنان',
          insight: 'استخدام مجارف جرايسي لقياس الجيوب وإزالة الترسبات',
          details: 'تطبيق مهارات قياس عمق الجيوب اللثوية بأداة UNC-15 مع إزالة الرواسب تحت اللثوية يدويًا وبالموجات فوق الصوتية وفق معايير بيئة العمل السريرية.',
          department: 'قسم طب أمراض اللثة',
          year: 'السنة 3 (التدريب السريري)',
          image: '/images/case_periodontal_model_1790624128943.jpg',
          blobClass: 'blob-shape-4',
          aspectRatio: 'aspect-[4/3]',
          spanClass: 'md:col-span-7',
        },
      ],
    },
    contact: {
      sectionNumber: '02',
      sectionTitle: 'بيانات التواصل المباشر',
      sectionSubtitle: 'للتواصل الأكاديمي والبحثي وفرص التدريب والمشاريع الطلابية المشتركة',
      phoneLabel: 'الهاتف',
      phoneNumber: '+96555226611',
      phoneDisplay: '+965 5522 6611',
      whatsappLabel: 'واتساب',
      whatsappNumber: '96555226611',
      whatsappDisplay: '+965 5522 6611',
      emailLabel: 'البريد الإلكتروني',
      emailAddress: 'nasser.alotaibi@example.com',
      locationLabel: 'الموقع',
      locationValue: 'مدينة الكويت، دولة الكويت',
      socialLabel: 'لينكد إن',
      socialDisplay: 'linkedin.com/in/nasser-alotaibi',
      socialUrl: 'https://linkedin.com/in/nasser-alotaibi',
      copyPhoneSuccess: 'تم نسخ الرقم',
      copyEmailSuccess: 'تم نسخ البريد',
      vcardDownload: 'حفظ بطاقة الاتصال',
    },
    floatingWhatsApp: {
      ariaLabel: 'مراسلة ناصر العتيبي عبر واتساب',
      tooltip: 'محادثة واتساب',
    },
  },
};
