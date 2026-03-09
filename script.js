/* ============================================================
   PORTAFOLIO — Jack | script.js
   Módulos:
     1. i18n — sistema de traducción ES / EN
     2. Navbar (fondo al scroll + active link)
     3. Menú mobile (hamburguesa)
     4. Efecto Typing en Hero
     5. Scroll Reveal con IntersectionObserver
     6. Botón "Volver arriba"
     7. Formulario de contacto
     8. Año dinámico en el footer
   ============================================================ */

/* ══════════════════════════════════════════
   1. i18n — Traducciones ES / EN
      Cada clave coincide con [data-i18n="..."]
      en el HTML.
══════════════════════════════════════════ */
const translations = {
  es: {
    /* Navbar */
    'nav.home':         'Inicio',
    'nav.about':        'Sobre mí',
    'nav.projects':     'Proyectos',
    'nav.tech':         'Tecnologías',
    'nav.testimonials': 'Testimonios',
    'nav.contact':      'Contacto',
    'nav.hire':         'Contrátame',
    /* Hero */
    'hero.available': 'Disponible para proyectos',
    'hero.greeting':  'Hola, soy',
    'hero.desc':      'Construyo sistemas <strong class="text-white">POS</strong>, plataformas web y soluciones digitales a medida para negocios que quieren crecer y automatizar sus procesos.',
    'hero.btn1':      'Ver proyectos',
    'hero.btn2':      'Contáctame',
    'hero.open':      'Open to work',
    /* Sobre mí */
    'about.tag':      '// sobre mí',
    'about.title':    '¿Quién soy?',
    'about.years':    'Años exp.',
    'about.projects': 'Proyectos',
    'about.commit':   'Compromiso',
    'about.p1':       'Soy un desarrollador apasionado por crear herramientas que <strong class="text-white">resuelven problemas reales</strong> en restaurantes, tiendas y negocios.',
    'about.p2':       'Mi enfoque está en construir sistemas rápidos, intuitivos y fáciles de mantener. Desde un punto de venta hasta un panel de administración completo.',
    'about.li1':      'Sistemas POS para restaurantes y retail',
    'about.li2':      'Aplicaciones web a medida para tu negocio',
    'about.li3':      'Integración de bases de datos y APIs REST',
    'about.li4':      'Código limpio, escalable y bien documentado',
    'about.cta':      'Hablemos de tu proyecto',
    /* Proyectos */
    'projects.tag':      '// proyectos',
    'projects.title':    'Trabajo reciente',
    'projects.subtitle': 'Soluciones reales construidas para negocios reales.',
    'projects.view':     'Ver proyecto',
    'projects.p1.title': 'Sistema POS para Restaurante',
    'projects.p1.desc':  'Punto de venta: gestión de mesas, pedidos en tiempo real, facturación y reportes de ventas diarios.',
    'projects.p2.title': 'Visor de Cocina (KDS)',
    'projects.p2.desc':  'Pantalla de cocina en tiempo real con pedidos activos, prioridades, tiempos y estados de preparación.',
    'projects.p3.title': 'Sistema de Gestión de Inventario',
    'projects.p3.desc':  'Panel para almacenes: stock en tiempo real, alertas de reabastecimiento e historial exportable.',
    'projects.p4.title': 'Tienda Online — Nexura',
    'projects.p4.desc':  'E-commerce para marca de ropa: catálogo, carrito de compras y pasarela de pago.',
    'projects.p5.title': 'Misil Game',
    'projects.p5.desc':  'Videojuego 2D en Python con Pygame. Disparos, animaciones y sistema de puntuación.',
    'projects.p6.title': 'Web Servicio de Pintura',
    'projects.p6.desc':  'Landing page para empresa de pintura con portafolio y formulario de cotización.',
    /* Stack */
    'tech.tag':      '// tecnologías',
    'tech.title':    'Mi stack',
    'tech.subtitle': 'Herramientas con las que construyo cada día.',
    /* Testimonios */
    'test.tag':      '// testimonios',
    'test.title':    'Lo que dicen',
    'test.subtitle': 'Clientes que confiaron en mi trabajo.',
    'test.role1':    'Dueño de Restaurante',
    'test.role2':    'Gerente de Tienda',
    'test.role3':    'Emprendedora Digital',
    'test.role4':    'CEO Startup',
    'test.role5':    'Empresario',
    'test.q1':       '"El sistema POS transformó por completo nuestro servicio. La velocidad y facilidad de uso son increíbles."',
    'test.q2':       '"El sistema de inventario nos ahorró horas de trabajo manual. Jack entregó exactamente lo que necesitábamos."',
    'test.q3':       '"Mi tienda online quedó perfecta. Profesional, puntual y muy buen ojo para el diseño."',
    'test.q4':       '"Excelente comunicación durante todo el proyecto. El resultado superó nuestras expectativas."',
    'test.q5':       '"Muy recomendado. Solucionó problemas técnicos complejos de forma rápida y eficiente."',
    'test.cta':      '¿Trabajaste conmigo? Deja tu testimonio',
    'test.ctabtn':   'Escribir reseña',
    /* Contacto */
    'contact.tag':       '// contacto',
    'contact.title':     '¿Tienes un proyecto?',
    'contact.subtitle':  'Cuéntame tu idea. Respondo en menos de 24 horas.',
    'contact.direct':    'Contacto directo',
    'contact.social':    'Redes sociales',
    'contact.avail':     'Disponible ahora',
    'contact.availSub':  'Proyectos freelance · Full-time',
    'contact.f.name':    'Nombre',
    'contact.f.email':   'Email',
    'contact.f.subject': 'Asunto',
    'contact.f.type':    'Tipo de proyecto',
    'contact.f.type1':   'Sistema POS',
    'contact.f.type2':   'Web / Landing',
    'contact.f.type3':   'Inventario',
    'contact.f.type4':   'Otro',
    'contact.f.msg':     'Mensaje',
    'contact.f.send':    'Enviar mensaje',
    'contact.f.success': '¡Mensaje enviado! Te responderé pronto.',
    /* Footer */
    'footer.role': 'Desarrollador de Software',
    'footer.made': 'Hecho con',
  },

  en: {
    /* Navbar */
    'nav.home':         'Home',
    'nav.about':        'About me',
    'nav.projects':     'Projects',
    'nav.tech':         'Technologies',
    'nav.testimonials': 'Testimonials',
    'nav.contact':      'Contact',
    'nav.hire':         'Hire me',
    /* Hero */
    'hero.available': 'Available for projects',
    'hero.greeting':  'Hi, I\'m',
    'hero.desc':      'I build <strong class="text-white">POS</strong> systems, web platforms and custom digital solutions for businesses that want to grow and automate their processes.',
    'hero.btn1':      'View projects',
    'hero.btn2':      'Contact me',
    'hero.open':      'Open to work',
    /* About */
    'about.tag':      '// about me',
    'about.title':    'Who am I?',
    'about.years':    'Yrs exp.',
    'about.projects': 'Projects',
    'about.commit':   'Commitment',
    'about.p1':       'I\'m a software developer passionate about building tools that <strong class="text-white">solve real problems</strong> for restaurants, stores, and businesses.',
    'about.p2':       'My focus is on building fast, intuitive and easy-to-maintain systems. From a point-of-sale to a full admin panel, I deliver clean code and products users love.',
    'about.li1':      'POS systems for restaurants and retail',
    'about.li2':      'Custom web apps for your business',
    'about.li3':      'Database and REST API integration',
    'about.li4':      'Clean, scalable and well-documented code',
    'about.cta':      'Let\'s talk about your project',
    /* Projects */
    'projects.tag':      '// projects',
    'projects.title':    'Recent work',
    'projects.subtitle': 'Real solutions built for real businesses.',
    'projects.view':     'View project',
    'projects.p1.title': 'Restaurant POS System',
    'projects.p1.desc':  'Full point-of-sale: table management, real-time orders, billing and daily sales reports.',
    'projects.p2.title': 'Kitchen Display System (KDS)',
    'projects.p2.desc':  'Real-time kitchen screen showing active orders, priorities, timers and preparation statuses.',
    'projects.p3.title': 'Inventory Management System',
    'projects.p3.desc':  'Warehouse dashboard: real-time stock, restocking alerts and exportable movement history.',
    'projects.p4.title': 'Online Store — Nexura',
    'projects.p4.desc':  'E-commerce for a clothing brand: catalog, shopping cart and payment gateway.',
    'projects.p5.title': 'Missile Game',
    'projects.p5.desc':  '2D spaceship game in Python with Pygame. Shooting, animations and score system.',
    'projects.p6.title': 'Painting Service Website',
    'projects.p6.desc':  'Landing page for painting company with portfolio and online quote form.',
    /* Stack */
    'tech.tag':      '// technologies',
    'tech.title':    'My stack',
    'tech.subtitle': 'Tools I build with every day.',
    /* Testimonials */
    'test.tag':      '// testimonials',
    'test.title':    'What they say',
    'test.subtitle': 'Clients who trusted my work.',
    'test.role1':    'Restaurant Owner',
    'test.role2':    'Store Manager',
    'test.role3':    'Digital Entrepreneur',
    'test.role4':    'Startup CEO',
    'test.role5':    'Business Owner',
    'test.q1':       '"The POS system Jack built completely transformed our service. The speed and ease of use are incredible."',
    'test.q2':       '"The inventory system saved us hours of manual work. Jack delivered exactly what we needed."',
    'test.q3':       '"My online store turned out perfect. Professional, punctual and great design eye."',
    'test.q4':       '"Excellent communication throughout the project. The result exceeded our expectations."',
    'test.q5':       '"Highly recommended. He solved complex technical problems quickly and efficiently."',
    'test.cta':      'Worked with me? Leave a review',
    'test.ctabtn':   'Write a review',
    /* Contact */
    'contact.tag':       '// contact',
    'contact.title':     'Have a project?',
    'contact.subtitle':  'Tell me your idea. I reply within 24 hours.',
    'contact.direct':    'Direct contact',
    'contact.social':    'Social media',
    'contact.avail':     'Available now',
    'contact.availSub':  'Freelance projects · Full-time',
    'contact.f.name':    'Name',
    'contact.f.email':   'Email',
    'contact.f.subject': 'Subject',
    'contact.f.type':    'Project type',
    'contact.f.type1':   'POS System',
    'contact.f.type2':   'Web / Landing',
    'contact.f.type3':   'Inventory',
    'contact.f.type4':   'Other',
    'contact.f.msg':     'Message',
    'contact.f.send':    'Send message',
    'contact.f.success': 'Message sent! I\'ll get back to you soon.',
    /* Footer */
    'footer.role': 'Software Developer',
    'footer.made': 'Made with',
  },
};

/** Estado actual del idioma */
let currentLang = 'es';

/**
 * Aplica las traducciones al DOM según el idioma activo.
 * Recorre todos los elementos con [data-i18n] y aplica innerHTML.
 */
function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  /* Actualizar el atributo lang del <html> */
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
}

/**
 * Sincroniza el indicador visual del botón toggle (bandera + label).
 */
function syncLangUI(lang) {
  const flag  = lang === 'es' ? '🇪🇸' : '🇺🇸';
  const label = lang === 'es' ? 'ES' : 'EN';

  ['', '-mobile'].forEach(suffix => {
    const flagEl  = document.getElementById(`lang-flag${suffix}`);
    const labelEl = document.getElementById(`lang-label${suffix}`);
    if (flagEl)  flagEl.textContent  = flag;
    if (labelEl) labelEl.textContent = label;
  });
}

/** Alterna entre ES y EN */
function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  applyTranslations(currentLang);
  syncLangUI(currentLang);
  /* Actualizar frases del typing effect */
  updateTypingPhrases(currentLang);
}

/* ─── Esperar a que el DOM esté listo ─── */
document.addEventListener('DOMContentLoaded', () => {

  /* ══════════════════════════════════════════
     INIT — Aplicar idioma inicial y conectar
            botones de toggle de idioma
  ══════════════════════════════════════════ */
  applyTranslations(currentLang);
  syncLangUI(currentLang);

  document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
  document.getElementById('lang-toggle-mobile')?.addEventListener('click', toggleLanguage);

  /* ══════════════════════════════════════════
     2. NAVBAR — fondo transparente → sólido
        y resaltado de link activo
  ══════════════════════════════════════════ */
  const navbar  = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  /**
   * Agrega/quita la clase .scrolled del navbar
   * y actualiza el link activo según la sección visible.
   */
  function handleScroll() {
    /* Fondo del navbar */
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    /* Link activo: buscamos la sección más cercana al tope */
    const scrollPos = window.scrollY + 120; // offset del navbar fijo

    document.querySelectorAll('section[id]').forEach(section => {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // ejecutar al cargar


  /* ══════════════════════════════════════════
     2. MENÚ MOBILE — toggle abre/cierra
  ══════════════════════════════════════════ */
  const menuBtn    = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      mobileMenu.classList.add('hidden');
      menuBtn.classList.remove('open');
    } else {
      mobileMenu.classList.remove('hidden');
      menuBtn.classList.add('open');
    }
  });

  /* Cerrar menú mobile al hacer clic en un link */
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.classList.remove('open');
    });
  });


  /* ══════════════════════════════════════════
     4. EFECTO TYPING — cicla entre frases
        Soporta cambio de idioma en caliente.
  ══════════════════════════════════════════ */
  const typingEl = document.getElementById('typing-text');

  /** Frases por idioma */
  const typingPhrases = {
    es: ['Desarrollador de Software', 'Sistemas POS & Web', 'Soluciones para negocios', 'Full Stack Developer'],
    en: ['Software Developer', 'POS & Web Systems', 'Business Solutions', 'Full Stack Developer'],
  };

  let phrases     = typingPhrases['es'];
  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let typingTimer = null;

  /**
   * Permite actualizar las frases al cambiar de idioma.
   * Borra el texto actual y reinicia desde la primera frase del nuevo idioma.
   */
  function updateTypingPhrases(lang) {
    phrases     = typingPhrases[lang] || typingPhrases['es'];
    phraseIndex = 0;
    charIndex   = 0;
    isDeleting  = false;
    clearTimeout(typingTimer);
    typingEl.textContent = '';
    typingTimer = setTimeout(typeEffect, 400);
  }

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (!isDeleting) {
      charIndex++;
      typingEl.textContent = currentPhrase.slice(0, charIndex);
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        typingTimer = setTimeout(typeEffect, 1800);
        return;
      }
    } else {
      charIndex--;
      typingEl.textContent = currentPhrase.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting  = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    typingTimer = setTimeout(typeEffect, isDeleting ? 45 : 80);
  }

  setTimeout(typeEffect, 600);


  /* ══════════════════════════════════════════
     5. SCROLL REVEAL — IntersectionObserver
        Agrega .visible a cada .reveal cuando
        entra en el viewport
  ══════════════════════════════════════════ */

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // una vez revelado, no lo seguimos
        }
      });
    },
    {
      threshold: 0.12,       // visible cuando el 12% del elemento entra
      rootMargin: '0px 0px -40px 0px', // trigger un poco antes del borde inferior
    }
  );

  /* Observar todos los elementos con clase .reveal */
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ══════════════════════════════════════════
     6. BOTÓN VOLVER ARRIBA
        Aparece después de 400px de scroll
  ══════════════════════════════════════════ */
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ══════════════════════════════════════════
     7. AÑO DINÁMICO en el footer
  ══════════════════════════════════════════ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ══════════════════════════════════════════
     8. SMOOTH SCROLL para los anchor links
  ══════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navbarHeight = navbar.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });


  /* ══════════════════════════════════════════
     9. PROJECT TYPE BADGES — toggle activo
  ══════════════════════════════════════════ */
  document.querySelectorAll('#project-type-btns .type-badge').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#project-type-btns .type-badge').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });


  /* ══════════════════════════════════════════
     10. FORMULARIO DE CONTACTO
         Simula el envío (sin backend) y muestra
         mensaje de éxito.
  ══════════════════════════════════════════ */
  const contactForm   = document.getElementById('contact-form');
  const formSuccess   = document.getElementById('form-success');
  const submitBtn     = contactForm?.querySelector('button[type="submit"]');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    /* Validación básica — resaltar campos vacíos */
    let valid = true;
    contactForm.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('invalid');
        valid = false;
      } else {
        field.classList.remove('invalid');
      }
    });
    if (!valid) return;

    /* Estado de carga en el botón */
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        <span>${currentLang === 'es' ? 'Enviando...' : 'Sending...'}</span>
      `;
    }

    /* Simular delay de red (reemplazar con fetch real cuando tengas backend) */
    setTimeout(() => {
      contactForm.reset();
      formSuccess?.classList.remove('hidden');
      if (submitBtn) {
        submitBtn.disabled = false;
        const t = translations[currentLang];
        submitBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
          <span>${t['contact.f.send']}</span>
        `;
      }
      /* Ocultar el mensaje de éxito después de 5 segundos */
      setTimeout(() => formSuccess?.classList.add('hidden'), 5000);
    }, 1200);
  });

  /* Quitar clase 'invalid' al empezar a escribir */
  contactForm?.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('invalid'));
  });

});
