import content from "./site.json";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SkillItem = {
  label: string;
  logoUrl?: string;
};

export type SkillGroup = {
  category: string;
  icon: string;
  items: SkillItem[];
};

export type Strength = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  website?: string;
  responsibilities: string[];
};

export type CertificateItem = {
  title: string;
  issuer: string;
  status: string;
  note: string;
  image: string;
  icon?: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: string;
};

export type Education = {
  school: string;
  degree: string;
  expectedGraduation: string;
  transcriptUrl?: string;
  coursework: string[];
};

type SiteContent = {
  site: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    intro: string;
    summary: string;
    strengths: Strength[];
    profileImage: string;
  };
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  certificates: CertificateItem[];
  contactItems: ContactItem[];
  projects: Project[];
  experience: ExperienceItem[];
  education: Education;
};

const data = content as SiteContent;

export const site = data.site;
export const navLinks = data.navLinks;
export const socialLinks = data.socialLinks;
export const skillGroups = data.skillGroups;
export const certificates = data.certificates;
export const contactItems = data.contactItems;
export const projects = data.projects;
export const experience = data.experience;
export const education = data.education;

export type Locale = "en" | "th";

type LocalizedContent = {
  site: Pick<
    SiteContent["site"],
    "role" | "location" | "intro" | "summary" | "strengths"
  >;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  hero: {
    openToOpportunities: string;
    viewProjects: string;
    contactMe: string;
    developerProfile: string;
    focus: string;
    stack: string;
    availability: string;
    productEngineering: string;
    frontendBackend: string;
  };
  sectionHeadings: {
    about: {
      eyebrow: string;
      title: string;
    };
    skills: {
      eyebrow: string;
      title: string;
      description: string;
      itemCaption: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      description: string;
      featuredLabel: string;
      highlightsLabel: string;
      githubButton: string;
      repositoryLabel: string;
    };
    experience: {
      eyebrow: string;
      title: string;
      description: string;
      viewCompany: string;
    };
    certificates: {
      eyebrow: string;
      title: string;
      description: string;
      completedStatus: string;
    };
    education: {
      eyebrow: string;
      title: string;
      description: string;
      universityLabel: string;
      graduationLabel: string;
      courseworkLabel: string;
      downloadTranscriptLabel: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      locationLabel: string;
      directEmailLabel: string;
    };
  };
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  certificates: CertificateItem[];
  contactItems: ContactItem[];
  education: Education;
  footer: {
    rightsReserved: string;
  };
  navbar: {
    portfolio: string;
    theme: string;
    primaryNavigation: string;
    mobileNavigation: string;
    toggleNavigationMenu: string;
    switchLanguageTo: string;
    english: string;
    thai: string;
  };
};

const localizedContent: Record<Locale, LocalizedContent> = {
  en: {
    site: {
      role: "Full-stack Developer",
      location: "Bangkok, Thailand",
      intro:
        "Full-stack developer specializing in scalable web applications and secure system design. I help turn complex business processes into reliable, production-ready solutions, with hands-on experience delivering real-world projects for industry clients.",
      summary:
        "I focus on turning real business problems into practical digital solutions. In a recent project, I developed an end-to-end system to automate document workflows, such as invoices, quotations, and payroll, reducing manual effort and errors. I also built an OCR-powered pipeline to extract data from purchase order PDFs, enabling automatic form population and significantly improving efficiency.",
      strengths: [
        {
          title: "Full-stack Web Development",
          description:
            "Develop scalable, production-grade web applications with a focus on maintainability, performance, and robust system architecture.",
        },
        {
          title: "Cybersecurity",
          description:
            "Secure authentication with JWT & NextAuth, including session management and access control.",
        },
        {
          title: "System Design",
          description:
            "Specialized in transforming business challenges into efficient digital solutions. Developed end-to-end systems to automate document workflows",
        },
      ],
    },
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Certificates", href: "#certificates" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks,
    hero: {
      openToOpportunities: "Open to opportunities",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      developerProfile: "Developer Profile",
      focus: "Focus",
      stack: "Stack",
      availability: "Availability",
      productEngineering: "Product engineering",
      frontendBackend: "Frontend + backend",
    },
    sectionHeadings: {
      about: {
        eyebrow: "About",
        title:
          "Crafting elegant software with product thinking and strong technical execution.",
      },
      skills: {
        eyebrow: "Skills",
        title:
          "A focused stack for building fast, accessible, and scalable products.",
        description:
          "Structured into core areas so the portfolio stays easy to scan for recruiters and hiring managers.",
        itemCaption: "Skill area",
      },
      projects: {
        eyebrow: "Projects",
        title:
          "Selected work built for real business workflows and automation.",
        description:
          "Selected projects centered on real business workflows and automation, showcasing systems designed to solve operational challenges and improve efficiency.",
        featuredLabel: "Featured Project",
        highlightsLabel: "Key Highlights",
        githubButton: "View on GitHub",
        repositoryLabel: "Repository link:",
      },
      experience: {
        eyebrow: "Experience",
        title:
          "Professional experience in a real software production environment.",
        description:
          "The section highlights your internship and the responsibilities you handled in Agile delivery teams.",
        viewCompany: "View Company",
      },
      certificates: {
        eyebrow: "Certificates",
        title: "Certification and ongoing learning.",
        description:
          "A compact section for professional credentials and active certifications.",
        completedStatus: "Completed",
      },
      education: {
        eyebrow: "Education",
        title: "Academic background and core coursework.",
        description:
          "Useful context for recruiters who want a quick view of technical foundation and graduation timeline.",
        universityLabel: "University",
        graduationLabel: "Graduation",
        courseworkLabel: "Coursework",
        downloadTranscriptLabel: "Download Transcript",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's Keep in Touch",
        description:
          "Stay updated with my latest projects and insights. Feel free to reach out if you have any questions or want to connect.",
        locationLabel: "Location",
        directEmailLabel: "Direct Email",
      },
    },
    skillGroups,
    projects,
    experience,
    certificates,
    contactItems,
    education,
    footer: {
      rightsReserved: "All rights reserved.",
    },
    navbar: {
      portfolio: "Portfolio",
      theme: "Theme",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      toggleNavigationMenu: "Toggle navigation menu",
      switchLanguageTo: "Switch language to",
      english: "English",
      thai: "Thai",
    },
  },
  th: {
    site: {
      role: "นักพัฒนา Full-stack",
      location: "กรุงเทพมหานคร, ประเทศไทย",
      intro:
        "นักพัฒนา Full-stack ผู้เชี่ยวชาญด้านการสร้างเว็บแอปพลิเคชันที่รองรับการเติบโตและเน้นความปลอดภัย ผมถนัดการเปลี่ยนโจทย์ธุรกิจที่ซับซ้อนให้กลายเป็นโซลูชันที่ใช้งานได้จริง พร้อมประสบการณ์ส่งมอบโปรเจกต์คุณภาพระดับ Production ให้กับลูกค้าหลากหลายอุตสาหกรรม",
      summary:
        "ผมมุ่งเน้นการแก้ปัญหาธุรกิจด้วยเทคโนโลยีดิจิทัล โปรเจกต์ล่าสุดผมได้พัฒนาระบบจัดการเอกสารอัตโนมัติ (เช่น ใบแจ้งหนี้และเงินเดือน) เพื่อลดขั้นตอนการทำงานแบบ Manual และลดความผิดพลาด นอกจากนี้ยังได้นำเทคโนโลยี OCR มาใช้ดึงข้อมูลจากไฟล์ PDF เพื่อช่วยกรอกฟอร์มอัตโนมัติ ซึ่งช่วยเพิ่มประสิทธิภาพการทำงานได้อย่างชัดเจน",
      strengths: [
        {
          title: "Full-stack Development",
          description:
            "พัฒนาเว็บแอปพลิเคชันที่ใช้งานได้จริงในระยะยาว เน้นโครงสร้างระบบที่แข็งแกร่ง ดูแลรักษาง่าย และรองรับการขยายตัวในอนาคต",
        },
        {
          title: "Cybersecurity",
          description:
            "วางระบบความปลอดภัยและการยืนยันตัวตนที่รัดกุม (เช่น JWT และ NextAuth) รวมถึงการจัดการสิทธิ์การเข้าถึงข้อมูลอย่างเป็นระบบ",
        },
        {
          title: "System Design",
          description:
            "เชี่ยวชาญการออกแบบระบบเพื่อตอบโจทย์ทางธุรกิจ โดยเฉพาะการเปลี่ยนกระบวนการทำงานให้เป็นระบบอัตโนมัติเพื่อลดภาระงาน",
        },
      ],
    },
    navLinks: [
      { label: "หน้าแรก", href: "#home" },
      { label: "เกี่ยวกับ", href: "#about" },
      { label: "ทักษะ", href: "#skills" },
      { label: "ผลงาน", href: "#projects" },
      { label: "ประสบการณ์", href: "#experience" },
      { label: "ใบรับรอง", href: "#certificates" },
      { label: "การศึกษา", href: "#education" },
      { label: "ติดต่อ", href: "#contact" },
    ],
    socialLinks: socialLinks.map((link) => ({
      ...link,
      label: link.label === "Email" ? "อีเมล" : link.label,
    })),
    hero: {
      openToOpportunities: "เปิดรับโอกาสงาน",
      viewProjects: "ดูโปรเจกต์",
      contactMe: "ติดต่อฉัน",
      developerProfile: "โปรไฟล์นักพัฒนา",
      focus: "โฟกัส",
      stack: "สแต็ก",
      availability: "สถานะ",
      productEngineering: "product engineering",
      frontendBackend: "frontend  backend",
    },
    sectionHeadings: {
      about: {
        eyebrow: "เกี่ยวกับผม",
        title:
          "สร้างสรรค์ซอฟต์แวร์ที่สวยงามและใช้งานได้จริง ด้วยแนวคิดเชิงผลิตภัณฑ์ที่แม่นยำ",
      },
      skills: {
        eyebrow: "ทักษะความชำนาญ",
        title: "เลือกใช้เทคโนโลยีที่เน้นความรวดเร็ว ใช้งานง่าย และขยายตัวได้ดี",
        description:
          "รวบรวมทักษะสำคัญแยกตามหมวดหมู่ เพื่อให้คุณเห็นภาพรวมความเชี่ยวชาญของผมได้ทันที",
        itemCaption: "หมวดหมู่ทักษะ",
      },
      projects: {
        eyebrow: "ผลงาน",
        title: "โปรเจกต์ที่ออกแบบมาเพื่อแก้โจทย์ธุรกิจและพัฒนาระบบอัตโนมัติ",
        description:
          "คัดสรรผลงานที่เน้นการใช้งานจริงในภาคธุรกิจ แสดงให้เห็นถึงการออกแบบระบบเพื่อเพิ่มประสิทธิภาพการทำงาน",
        featuredLabel: "ผลงานเด่น",
        highlightsLabel: "จุดเด่นของโปรเจกต์",
        githubButton: "ดูบน GitHub",
        repositoryLabel: "ลิงก์ซอร์สโค้ด:",
      },
      experience: {
        eyebrow: "ประสบการณ์",
        title: "ประสบการณ์ทำงานจริงในสายงานพัฒนาซอฟต์แวร์",
        description:
          "สรุปช่วงเวลาการฝึกงานและความรับผิดชอบในทีมที่ทำงานด้วยกระบวนการ Agile",
        viewCompany: "ดูรายละเอียดบริษัท",
      },
      certificates: {
        eyebrow: "ใบรับรอง",
        title: "การรับรองวิชาชีพและการเรียนรู้อย่างต่อเนื่อง",
        description:
          "รวมใบเซอร์ฯ และหลักสูตรอบรมด้านเทคนิคที่ช่วยเสริมความเชี่ยวชาญให้ทันสมัยอยู่เสมอ",
        completedStatus: "สำเร็จการศึกษา",
      },
      education: {
        eyebrow: "การศึกษา",
        title: "ประวัติการศึกษาและพื้นฐานทางวิชาการ",
        description:
          "สรุปพื้นฐานทางเทคนิค รายวิชาหลักที่เกี่ยวข้อง และช่วงเวลาการสำเร็จการศึกษา",
        universityLabel: "สถาบันการศึกษา",
        graduationLabel: "คาดว่าจะสำเร็จการศึกษา",
        courseworkLabel: "รายวิชาหลัก",
        downloadTranscriptLabel: "ดาวน์โหลดใบทรานสคริปต์",
      },
      contact: {
        eyebrow: "ติดต่อ",
        title: "มาร่วมงานกัน",
        description:
          "หากคุณมีข้อสงสัยหรือสนใจร่วมงานกัน สามารถติดต่อผ่านช่องทางต่างๆ หรือติดตามโปรเจกต์ล่าสุดของผมได้เลยครับ",
        locationLabel: "ที่อยู่",
        directEmailLabel: "อีเมล",
      },
    },
    skillGroups,
    projects: projects.map((project, index) => ({
      ...project,
      description: [
        "ระบบบริหารจัดการธุรกิจเหล็กแบบครบวงจร พัฒนาเพื่อเปลี่ยนการทำงานจากรูปแบบกระดาษสู่ระบบดิจิทัลเต็มรูปแบบ",
        "ระบบ AI และ OCR อัจฉริยะสำหรับดึงข้อมูลใบสั่งซื้อจากไฟล์ PDF หลากหลายรูปแบบ พร้อมแปลงเป็นข้อมูลโครงสร้าง JSON",
        "โมบายแอปพลิเคชันรวมศูนย์ข้อมูลสำหรับคณะวิทยาการคอมพิวเตอร์ KMUTNB เพื่อยกระดับการสื่อสารและบริการนักศึกษา",
      ][index],
      highlights: [
        [
          "ระบบอัตโนมัติสำหรับเอกสารการเงิน (ใบแจ้งหนี้, ใบเสร็จ, ใบวางบิล และใบเสนอราคา)",
          "ใช้ OCR ร่วมกับเทคโนโลยี LLM เพื่อแปลงข้อมูลจากใบสั่งซื้อ (PO) เป็น JSON ที่มีโครงสร้างชัดเจน",
          "ระบบจัดการสิทธิ์ผู้ใช้งาน 6 ระดับ พร้อมโมดูลเงินเดือน สินค้าคงคลัง และรายงานการเงิน",
        ],
        [
          "รองรับการดึงข้อมูลจาก PDF ทั้งแบบไฟล์ดิจิทัลและเอกสารที่ผ่านการสแกน",
          "Pipeline อัจฉริยะที่สลับโหมดการทำงานระหว่าง Text Extraction และ OCR โดยอัตโนมัติ",
          "ใช้ LLM ประมวลผลข้อความที่ไม่มีโครงสร้างให้กลายเป็นข้อมูล JSON ที่พร้อมใช้งาน",
          "ดึงข้อมูลสำคัญได้ครบถ้วน ทั้งส่วนหัว ข้อมูลลูกค้า และรายละเอียดรายการสินค้า",
          "แสดง Metadata เชิงลึก เช่น วิธีการดึงข้อมูล จำนวนหน้า และระยะเวลาที่ใช้ประมวลผล",
        ],
        [
          "ศูนย์รวมประกาศ ข่าวสาร และลิงก์บริการสำคัญสำหรับนักศึกษาและบุคลากร",
          "ระบบสนับสนุนนักศึกษาครบวงจร เช่น ตารางเรียน ตารางสอบ และข้อมูลอาจารย์ที่ปรึกษา",
          "ระบบจัดการเนื้อหา (CMS) พร้อมการควบคุมสิทธิ์เข้าถึง (RBAC) สำหรับเจ้าหน้าที่",
          "สื่อสารอย่างปลอดภัยผ่านโปรโตคอล HTTPS พร้อมระบบตรวจสอบความถูกต้องฝั่งเซิร์ฟเวอร์",
          "ออกแบบ Interface แยกตามบทบาทผู้ใช้งาน: นักศึกษา, คณาจารย์ และเจ้าหน้าที่",
        ],
      ][index],
    })),
    experience: experience.map((job, index) => ({
      ...job,
      responsibilities: [
        [
          "พัฒนาและดูแลส่วนหน้าบ้าน (Frontend) สำหรับระบบภายในและแอปพลิเคชันที่ใช้งานจริงโดยลูกค้า",
          "ปรับปรุง UI Components และแก้ไขบั๊กสำคัญที่ติดตามผ่านระบบ Jira",
          "ทำงานร่วมกับทีมด้วยกระบวนการ Agile เพื่อส่งมอบฟีเจอร์ใหม่ๆ อย่างต่อเนื่อง",
          "เชื่อมต่อระบบ Frontend กับ Backend APIs และสนับสนุนงานฝั่งเซิร์ฟเวอร์ในบางส่วน",
          "วิเคราะห์และพัฒนา UI/UX เพื่อยกระดับประสบการณ์การใช้งานและประสิทธิภาพของระบบ",
          "ประสานงานอย่างใกล้ชิดกับทีมออกแบบและทีม Backend เพื่อรักษามาตรฐานของระบบ",
        ],
        [
          "รับผิดชอบโปรเจกต์จบการศึกษา (Senior Project) ร่วมกับลูกค้าธุรกิจ โดยพัฒนาแอปพลิเคชัน Full-stack เพื่อใช้งานจริง",
          "ประชุมร่วมกับลูกค้าโดยตรงเพื่อวิเคราะห์ความต้องการและปรับแต่งฟีเจอร์ในแต่ละ Sprint",
          "เปลี่ยนระบบงาน Make-to-order จากการจดมือและ Excel ให้เป็นระบบเว็บแอปพลิเคชันอัตโนมัติ",
          "สร้าง Pipeline ระบบ OCR และ AI สำหรับดึงข้อมูลจากเอกสารเข้าสู่ฐานข้อมูลโดยตรง",
          "ออกแบบและพัฒนาโมดูลเอกสารการเงินที่สำคัญ เช่น Invoice, Receipt และ Quotation",
          "ดูแลการนำระบบขึ้นใช้งานจริง (Deployment) และปรับปรุงระบบตามฟีดแบ็กจากผู้ใช้งาน",
          "ได้รับรางวัล Best Presentation Award จากงาน Science Exhibition Day 2026",
        ],
      ][index],
    })),
    certificates: certificates.map((certificate, index) => ({
      ...certificate,
      note: [
        "เน้นทักษะพื้นฐานด้านความมั่นคงปลอดภัยไซเบอร์และแนวทางปฏิบัติเพื่อความปลอดภัย",
        "การพัฒนาทักษะดิจิทัลและการประยุกต์ใช้เครื่องมือสมัยใหม่เพื่อเพิ่มประสิทธิภาพการทำงาน",
        "เน้นกลยุทธ์การปรับเปลี่ยนองค์กรสู่ยุคดิจิทัล และการนำเทคโนโลยีมาสร้างนวัตกรรมทางธุรกิจ",
        "รางวัลเหรียญทอง The Best Presentation Award จากโครงการ Science Exhibition Day 2026 มจพ. กับผลงานวิจัยระบบจัดการงานเหล็กครบวงจร (Steel Work Management System)",
      ][index],
      status: "เสร็จสมบูรณ์",
    })),
    contactItems: contactItems.map((item) => ({
      ...item,
      label:
        {
          phone: "โทรศัพท์",
          github: "GitHub",
          mail: "อีเมล",
        }[item.icon] ?? item.label,
    })),
    education,
    footer: {
      rightsReserved: "© สงวนลิขสิทธิ์",
    },
    navbar: {
      portfolio: "ผลงาน",
      theme: "ธีม",
      primaryNavigation: "เมนูหลัก",
      mobileNavigation: "เมนูบนมือถือ",
      toggleNavigationMenu: "เปิด/ปิดเมนูนำทาง",
      switchLanguageTo: "เปลี่ยนภาษาเป็น",
      english: "English",
      thai: "ไทย",
    },
  },
};

export function getLocalizedContent(locale: Locale) {
  const copy = localizedContent[locale];

  return {
    site: {
      ...site,
      ...copy.site,
    },
    navLinks: copy.navLinks,
    socialLinks: copy.socialLinks,
    hero: copy.hero,
    sectionHeadings: copy.sectionHeadings,
    skillGroups: skillGroups.map((group) => ({
      ...group,
      category:
        locale === "th"
          ? ({
              frontend: "Frontend",
              backend: "Backend",
              database: "Database",
              tools: "Tools",
            }[group.icon] ?? group.category)
          : group.category,
    })),
    projects: projects.map((project, index) => ({
      ...project,
      description: copy.projects[index].description,
      highlights: copy.projects[index].highlights,
    })),
    experience: experience.map((job, index) => ({
      ...job,
      responsibilities: copy.experience[index].responsibilities,
    })),
    certificates: certificates.map((certificate, index) => ({
      ...certificate,
      note: copy.certificates[index].note,
      status:
        locale === "th"
          ? copy.sectionHeadings.certificates.completedStatus
          : certificate.status,
    })),
    contactItems: contactItems.map((item) => ({
      ...item,
      label:
        locale === "th"
          ? ({
              phone: "โทรศัพท์",
              github: "GitHub",
              mail: "อีเมล",
            }[item.icon] ?? item.label)
          : item.label,
    })),
    education: {
      ...education,
    },
    footer: copy.footer,
    navbar: copy.navbar,
  };
}
