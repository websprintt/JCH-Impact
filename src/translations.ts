
export type Language = 'es' | 'en';

export const contactInfo = {
  // Base64 encoded versions of +17862345403
  phone: 'KzE3ODYyMzQ1NDAz',
  whatsappNumber: 'KzE3ODYyMzQ1NDAz',
  email: 'SmFhemllbGdibGFuY29AZ21haWwuY29t', // Jaazielgblanco@gmail.com
};

export const translations = {
  es: {
    whatsapp: {
      message: 'Hola JCH.Impact, me gustaría obtener un presupuesto gratis.',
      financeMessage: 'Hola JCH.Impact, me gustaría obtener información sobre las opciones de financiamiento para mis ventanas y puertas de impacto.',
    },
    nav: {
      services: 'Servicios',
      benefits: 'Por qué nosotros',
      portfolio: 'Portafolio',
      callNow: 'Llamar ahora',
    },
    hero: {
      badge: 'Especialistas en Instalación para Contratistas y Particulares',
      title: 'Instalación Profesional de Puertas y Ventanas de Impacto en ',
      titlePremium: 'el Sur de Florida',
      titleSuffix: '',
      subtitle: 'Ofrecemos servicios especializados de instalación, reparación y sellado profesional (caulking) para contratistas generales y dueños de propiedades residenciales o comerciales. Calidad y precisión garantizada.',
      estimateBtn: 'Presupuesto Gratis',
      installationBtn: 'Reparaciones Rápidas',
      features: {
        licensed: 'Estimados GRATIS',
        estimates: 'Servicio Rápido',
        fast: 'Licencia y Seguro',
        quality: 'Limpieza Garantizada',
      }
    },
    beforeAfter: {
      title: 'Transformaciones Reales que Añaden Protección y Valor',
      subtitle: 'Desde ventanas antiguas y marcos dañados hasta sistemas de impacto instalados profesionalmente que mejoran la seguridad, la apariencia y el valor de la propiedad.',
      featuresTitle: '¿Qué cambió?',
      features: [
        'Mejor protección',
        'Sellado mejorado',
        'Apariencia moderna',
        'Aumento del valor del hogar'
      ],
      after: 'Trabajo Terminado',
      before: 'Estado Anterior',
    },
    services: {
      title: 'Nuestros Servicios ',
      titleItalic: 'Principales',
      subtitle: 'Soluciones de alta calidad con enfoque en ventanas y puertas de impacto para su total tranquilidad.',
      viewAll: 'Ver todos los servicios',
      list: [
        {
          title: "Instalación de Ventanas y Puertas de Impacto",
          description: "Instalación profesional de ventanas y puertas resistentes a huracanes, siguiendo estrictamente el código de Florida para su máxima seguridad.",
          features: ["Resistente a Huracanes", "Código de FL", "Venta e Instalación"],
        },
        {
          title: "Reparación de Puertas y Ventanas",
          description: "Reparaciones, ajustes y mantenimiento para restaurar el funcionamiento adecuado de sus sistemas antiguos o dañados.",
          features: ["Ajustes", "Mantenimiento", "Funcionamiento Total"],
        },
        {
          title: "Sellado Profesional (Caulking)",
          description: "Sellado interior y exterior premium para evitar filtraciones de agua, humedad e infiltraciones de aire no deseadas.",
          features: ["Sin Filtraciones", "Cero Humedad", "Sellado Térmico"],
        },
        {
          title: "Servicios de Aluminio y Vidrio",
          description: "Soluciones residenciales y comerciales con acabados de alta calidad en estructuras de aluminio y vidrio.",
          features: ["Residencial", "Comercial", "Acabados Premium"],
        },
        {
          title: "Colaboración con Contratistas",
          description: "Somos el socio estratégico para contratistas generales que buscan sub-contratar la instalación experta de sistemas de impacto con precisión técnica.",
          features: ["Sub-contratación", "Aliado Profesional", "Cumplimiento de Plazos"],
        }
      ]
    },
    benefits: {
      title: '¿Por qué elegir ',
      titleItalic: 'JCH.Impact?',
      subtitle: 'Nos enfocamos en la rapidez, la calidad superior y el máximo respeto por la limpieza de su hogar.',
      items: [
        {
          title: "Licencia y Seguro",
          description: "Trabajamos de manera profesional y segura en cada proyecto.",
        },
        {
          title: "Cumplimiento de Códigos",
          description: "Cada proyecto sigue los requisitos de permisos y códigos de la ciudad.",
        },
        {
          title: "Proceso de Trabajo más Limpio",
          description: "Protegemos su hogar y limpiamos profundamente después de cada proyecto.",
        },
        {
          title: "Servicio Rápido",
          description: "Programación rápida e instalación eficiente sin demoras.",
        },
        {
          title: "Prevención de Filtraciones",
          description: "Detenga la infiltración de aire y agua en su hogar definitivamente.",
        },
        {
          title: "Valor de Propiedad",
          description: "Mejore la protección y el atractivo visual de su propiedad.",
        }
      ],
      fastBadge: 'Servicio Impecable',
      fastBadgeSub: 'Instalación limpia y profesional garantizada.'
    },
    gallery: {
      title: 'Proyectos ',
      titleItalic: 'Recientes',
      subtitle: 'Una muestra de nuestra excelencia en instalación y reparación en todo el sur de Florida.',
      categories: ['Ventanas', 'Puertas', 'Comercial'],
      projects: [
        { title: 'Residencia en Coral Gables', category: 'Ventanas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-1.webp' },
        { title: 'Modernización en Doral', category: 'Ventanas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-2.webp' },
        { title: 'Villa en Hollywood', category: 'Ventanas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-3.webp' },
        { title: 'Apartamento de Lujo', category: 'Ventanas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/8f4931ef0a00ead7d5a7a8fd0ab7afa0e01baf54/img/ventana-4.webp' },
        { title: 'Vista al Mar Miami', category: 'Ventanas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/aedba366ed50b36d71584a7d9c9f9ed5187dd8a0/img/ventana-5.webp' },
        { title: 'Residencia Moderna', category: 'Ventanas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-6.webp' },
        
        { title: 'Condominio en Miami Beach', category: 'Puertas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-1.webp' },
        { title: 'Sistemas Deslizantes Kendall', category: 'Puertas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-2.webp' },
        { title: 'Entrada Principal Elegante', category: 'Puertas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-3.webp' },
        { title: 'Puertas de Seguridad Premium', category: 'Puertas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-4.webp' },
        { title: 'Acceso a Terraza', category: 'Puertas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-5.webp' },
        { title: 'Puerta Deslizante de Impacto', category: 'Puertas', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-6.webp' },
        
        { title: 'Edificio Comercial Miami', category: 'Comercial', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-3.webp', videoUrl: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-3.webp' },
        { title: 'Distribuidora Local', category: 'Comercial', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-4.webp', videoUrl: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-4.webp' },
        { title: 'Centro de Negocios', category: 'Comercial', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-2.webp', videoUrl: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-2.webp' }
      ]
    },
    areasServed: {
      title: 'Áreas que Servimos',
      subtitle: 'Sirviendo con orgullo a clientes residenciales y comerciales en todo el sur de Florida.',
      cities: ['Homestead', 'Miami', 'Kendall', 'Hialeah', 'Doral', 'Hollywood', 'Pembroke Pines', 'Miramar', 'Davie', 'Weston', 'Plantation', 'Fort Lauderdale']
    },
    cta: {
      title: '¿Listo para mejorar tu hogar?',
      subtitle: 'No esperes a la temporada de huracanes. Obtén tu presupuesto gratis hoy y protege lo que más importa.',
      call: 'Llamar Ahora',
      estimate: 'Presupuesto Gratis',
      finance: 'Ver Opciones de Financiamiento',
      projects: 'Proyectos Recientes'
    },
    footer: {
      address: 'Hollywood, Florida',
      serviceArea: 'Homestead hasta Fort Lauderdale',
      contact: 'Contacto',
      serviceTitle: 'Área de Servicio',
      rights: '© 2026 JCH.Impact. Todos los derechos reservados.'
    },
    seo: {
      title: 'JCH.Impact | Instalación y Reparación de Ventanas de Impacto en Miami',
      description: 'Expertos bajo licencia en ventanas y puertas de impacto en el Sur de Florida. Servicios de instalación para contratistas y particulares, reparación y sellado (caulking) profesional. De Homestead a Fort Lauderdale.',
      keywords: 'ventanas de impacto miami, reparacion de ventanas florida, subcontratista ventanas miami, caulking profesional florida, puertas de impacto hollywood fl, proteccion huracanes miami, JCH Impact',
    }
  },
  en: {
    whatsapp: {
      message: 'Hi JCH.Impact, I would like to get a free estimate.',
      financeMessage: 'Hi JCH.Impact, I would like to get information about financing options for my impact windows and doors.',
    },
    nav: {
      services: 'Services',
      benefits: 'Why Us',
      portfolio: 'Portfolio',
      callNow: 'Call Now',
    },
    hero: {
      badge: 'Installation Specialists for Contractors & Homeowners',
      title: 'Professional Impact Windows & Doors Installation in ',
      titlePremium: 'South Florida',
      titleSuffix: '',
      subtitle: 'Providing specialized installation, repair, and professional sealing (caulking) for general contractors and residential or commercial property owners. Precision and quality guaranteed.',
      estimateBtn: 'Free Estimate',
      installationBtn: 'Fast Service/Repairs',
      features: {
        licensed: 'Free Estimates',
        estimates: 'Fast Service',
        fast: 'Licensed & Insured',
        quality: 'Clean Work Guaranteed',
      }
    },
    beforeAfter: {
      title: 'Real Transformations That Add Protection & Value',
      subtitle: 'From outdated windows and damaged frames to professionally installed impact systems that improve safety, appearance and property value.',
      featuresTitle: 'What changed?',
      features: [
        'Better protection',
        'Improved sealing',
        'Modern appearance',
        'Increased home value'
      ],
      after: 'Finished Work',
      before: 'Before Status',
    },
    services: {
      title: 'Our Main ',
      titleItalic: 'Services',
      subtitle: 'High-quality solutions focused on impact windows and doors for your total peace of mind.',
      viewAll: 'View All Services',
      list: [
        {
          title: "Impact Windows & Doors Installation",
          description: "Professional installation of hurricane-resistant windows and doors, strictly following Florida code for your maximum safety.",
          features: ["Hurricane Resistant", "FL Code Compliant", "Sales & Install"],
        },
        {
          title: "Door & Window Repairs",
          description: "Repairs, adjustments, and maintenance to restore the proper function of your old or damaged systems.",
          features: ["Adjustments", "Maintenance", "Full Restoration"],
        },
        {
          title: "Professional Caulking & Sealing",
          description: "Premium interior and exterior sealing to prevent water leaks, humidity, and unwanted air infiltration.",
          features: ["No Leaks", "Zero Humidity", "Thermal Seal"],
        },
        {
          title: "Aluminum & Glass Services",
          description: "Residential and commercial solutions with high-quality finishes in aluminum and glass structures.",
          features: ["Residential", "Commercial", "Premium Finishes"],
        },
        {
          title: "Contractor Partnerships",
          description: "The strategic partner for general contractors looking to sub-contract expert installation of impact systems with high technical precision.",
          features: ["Sub-contracting", "Professional Ally", "Deadline Oriented"],
        }
      ]
    },
    benefits: {
      title: 'Why Homeowners ',
      titleItalic: 'Choose JCH.Impact',
      subtitle: 'We focus on speed, superior quality, and maximum respect for your home\'s cleanliness.',
      items: [
        {
          title: "Licensed & Insured",
          description: "We work professionally and safely on every project.",
        },
        {
          title: "City Code Compliance",
          description: "Every project follows permit and code requirements.",
        },
        {
          title: "Cleaner Work Process",
          description: "We protect your home and clean after every project.",
        },
        {
          title: "Fast Service",
          description: "Quick scheduling and efficient installation.",
        },
        {
          title: "Leak Prevention",
          description: "Stop air and water infiltration into your home.",
        },
        {
          title: "Increase Property Value",
          description: "Improve protection and curb appeal of your property.",
        }
      ],
      fastBadge: 'Spotless Service',
      fastBadgeSub: 'Clean and professional installation guaranteed.'
    },
    gallery: {
      title: 'Recent ',
      titleItalic: 'Projects',
      subtitle: 'A showcase of our excellence in installation and repair across South Florida.',
      categories: ['Windows', 'Doors', 'Commercial'],
      projects: [
        { title: 'Coral Gables Residence', category: 'Windows', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-1.webp' },
        { title: 'Doral Modernization', category: 'Windows', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-2.webp' },
        { title: 'Hollywood Villa', category: 'Windows', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-3.webp' },
        { title: 'Luxury Apartment', category: 'Windows', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/8f4931ef0a00ead7d5a7a8fd0ab7afa0e01baf54/img/ventana-4.webp' },
        { title: 'Ocean View Miami', category: 'Windows', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/aedba366ed50b36d71584a7d9c9f9ed5187dd8a0/img/ventana-5.webp' },
        { title: 'Modern Residence', category: 'Windows', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-6.webp' },
        
        { title: 'Miami Beach Condo', category: 'Doors', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-1.webp' },
        { title: 'Kendall Sliding Systems', category: 'Doors', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-2.webp' },
        { title: 'Elegant Main Entrance', category: 'Doors', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-3.webp' },
        { title: 'Premium Security Doors', category: 'Doors', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-4.webp' },
        { title: 'Terrace Access', category: 'Doors', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-5.webp' },
        { title: 'Impact Sliding Door', category: 'Doors', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/puerta-6.webp' },
        
        { title: 'Miami Commercial Building', category: 'Commercial', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-3.webp', videoUrl: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-3.webp' },
        { title: 'Local Distribution Center', category: 'Commercial', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-4.webp', videoUrl: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-4.webp' },
        { title: 'Business Center', category: 'Commercial', image: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-2.webp', videoUrl: 'https://raw.githubusercontent.com/websprintt/JCH-Impact/207065862c5927bff055e484002e999b473dd3f1/img/comercial-2.webp' }
      ]
    },
    areasServed: {
      title: 'Areas We Serve',
      subtitle: 'Proudly serving residential and commercial clients across South Florida.',
      cities: ['Homestead', 'Miami', 'Kendall', 'Hialeah', 'Doral', 'Hollywood', 'Pembroke Pines', 'Miramar', 'Davie', 'Weston', 'Plantation', 'Fort Lauderdale']
    },
    cta: {
      title: 'Ready To Upgrade Your Home?',
      subtitle: 'Don\'t wait for hurricane season. Get your free estimate today and protect what matters most.',
      call: 'Call Now',
      estimate: 'Free Estimate',
      finance: 'View Financing Options',
      projects: 'Recent Projects'
    },
    footer: {
      address: 'Hollywood, Florida',
      serviceArea: 'Homestead to Fort Lauderdale',
      contact: 'Contact',
      serviceTitle: 'Service Area',
      rights: '© 2026 JCH.Impact. All rights reserved.'
    },
    seo: {
      title: 'JCH.Impact | Impact Window & Door Installation & Repair in Miami',
      description: 'Licensed specialists in impact windows and doors across South Florida. Professional installation for contractors and homeowners, expert repairs, and premium caulking. From Homestead to Fort Lauderdale.',
      keywords: 'impact windows miami, impact window repair florida, contractor impact window installation, professional caulking south florida, impact doors hollywood fl, hurricane protection miami, JCH Impact',
    }
  }
};
