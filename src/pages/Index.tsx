import { FormEvent, useEffect, useRef, useState } from 'react';

const FORM_URL = 'https://forms.gle/7YL2FN3hUETVqKN47';
const WHATSAPP_URL = 'https://wa.me/543751502744';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuReady, setMenuReady] = useState(false);
  const [adultName, setAdultName] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const inquiryMessageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.documentElement.classList.add('js');
    setMenuReady(true);

    const setPointerInput = () => {
      document.documentElement.dataset.input = 'pointer';
    };
    const setKeyboardInput = () => {
      document.documentElement.dataset.input = 'keyboard';
    };

    document.addEventListener('pointerdown', setPointerInput, { passive: true });
    document.addEventListener('keydown', setKeyboardInput);

    return () => {
      document.removeEventListener('pointerdown', setPointerInput);
      document.removeEventListener('keydown', setKeyboardInput);
      document.documentElement.classList.remove('js');
      delete document.documentElement.dataset.input;
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const resetMenu = (event: MediaQueryListEvent) => {
      if (!event.matches) setMenuOpen(false);
    };
    mobileQuery.addEventListener?.('change', resetMenu);
    return () => mobileQuery.removeEventListener?.('change', resetMenu);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const levels = Array.from(document.querySelectorAll<HTMLDetailsElement>('.level')).map((details) => {
      details.removeAttribute('name');
      const summary = details.querySelector('summary');
      const content = details.querySelector<HTMLElement>('.level-content');
      if (!summary || !content) return null;

      const setContentState = (expanded: boolean) => {
        (content as HTMLElement & { inert: boolean }).inert = !expanded;
        content.setAttribute('aria-hidden', String(!expanded));
      };

      summary.setAttribute('aria-expanded', String(details.open));
      setContentState(details.open);
      return {
        details,
        summary,
        content,
        expanded: details.open,
        animations: [] as Animation[],
        setContentState,
      };
    }).filter((level): level is NonNullable<typeof level> => Boolean(level));

    const settleLevel = (level: (typeof levels)[number]) => {
      level.animations.forEach((animation) => animation.cancel());
      level.animations = [];
      level.details.open = level.expanded;
      level.details.style.overflow = '';
      level.setContentState(level.expanded);
    };

    const finishLevelAnimations = () => levels.forEach(settleLevel);

    const setLevel = (level: (typeof levels)[number], expanded: boolean, animate: boolean) => {
      if (level.expanded === expanded) return;
      const { details, summary, content } = level;
      const startHeight = details.getBoundingClientRect().height;
      const wasOpen = details.open;
      const contentStyle = getComputedStyle(content);
      const startOpacity = wasOpen ? contentStyle.opacity : '0';
      const startTransform = wasOpen ? contentStyle.transform : 'translateY(6px)';

      level.animations.forEach((animation) => animation.cancel());
      level.animations = [];
      level.expanded = expanded;
      summary.setAttribute('aria-expanded', String(expanded));
      if (!expanded && content.contains(document.activeElement)) {
        summary.focus({ preventScroll: true });
      }
      level.setContentState(expanded);

      if (!animate || !details.animate) {
        settleLevel(level);
        return;
      }

      details.open = expanded;
      const endHeight = details.getBoundingClientRect().height;
      details.open = true;
      details.style.overflow = 'hidden';
      const timing: KeyframeAnimationOptions = {
        duration: expanded ? 240 : 180,
        easing: 'cubic-bezier(.23, 1, .32, 1)',
        fill: 'both',
      };
      const heightAnimation = details.animate(
        [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
        timing,
      );
      const contentAnimation = content.animate(
        [
          { opacity: startOpacity, transform: startTransform },
          { opacity: expanded ? 1 : 0, transform: expanded ? 'translateY(0)' : 'translateY(-4px)' },
        ],
        timing,
      );
      level.animations = [heightAnimation, contentAnimation];
      heightAnimation.onfinish = () => {
        if (level.animations[0] === heightAnimation) settleLevel(level);
      };
    };

    const handleKeyboardInput = () => {
      document.documentElement.dataset.input = 'keyboard';
      finishLevelAnimations();
    };
    document.addEventListener('keydown', handleKeyboardInput);

    const handlers = levels.map((level) => {
      const onClick = (event: MouseEvent) => {
        event.preventDefault();
        const animate = event.detail > 0 && !reducedMotion.matches;
        if (!animate) finishLevelAnimations();
        const expanded = !level.expanded;
        if (expanded) {
          levels.forEach((other) => {
            if (other !== level) setLevel(other, false, animate);
          });
        }
        setLevel(level, expanded, animate);
      };
      level.summary.addEventListener('click', onClick);
      return { level, onClick };
    });

    const handleResize = () => finishLevelAnimations();
    window.addEventListener('resize', handleResize);
    const handleReducedMotion = () => finishLevelAnimations();
    reducedMotion.addEventListener?.('change', handleReducedMotion);

    return () => {
      handlers.forEach(({ level, onClick }) => level.summary.removeEventListener('click', onClick));
      window.removeEventListener('resize', handleResize);
      reducedMotion.removeEventListener?.('change', handleReducedMotion);
      document.removeEventListener('keydown', handleKeyboardInput);
      finishLevelAnimations();
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    const name = adultName.trim().replace(/\s+/g, ' ');
    const greeting = name ? `Hola, soy ${name}.` : 'Hola.';
    const subject = selectedLevel === 'Orientación general'
      ? 'Me gustaría recibir orientación sobre la propuesta educativa'
      : `Quisiera consultar por vacantes para ${selectedLevel}`;
    const message = `${greeting} ${subject} del Instituto Bautista del Centro para el ciclo 2027. ¿Podrían brindarme más información?`;
    if (inquiryMessageRef.current) inquiryMessageRef.current.value = message;
    setFormStatus('Tu consulta está preparada. Podés revisarla y enviarla en WhatsApp.');
    void event;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ibc-page">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Instituto Bautista del Centro, inicio">
            <span className="brand-mark"><img src="/images/logo-instituto-blanco.svg" width="48" height="48" alt="" /></span>
            <span className="brand-name">Instituto Bautista <span>del Centro</span></span>
          </a>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navegacion"
            hidden={!menuReady}
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menú <span aria-hidden="true">☰</span>
          </button>
          <nav id="navegacion" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegación principal" onClick={closeMenu}>
            <a href="#nosotros">Quiénes somos</a>
            <a href="#niveles">Niveles</a>
            <a href="#vida-escolar">Vida escolar</a>
            <a href="#contacto">Contacto</a>
            <a className="button button-small" href={FORM_URL} target="_blank" rel="noopener noreferrer">Preinscripciones 2027 <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section id="inicio" className="hero container" aria-labelledby="titulo-principal">
          <div className="hero-copy">
            <p className="eyebrow">Educación cristiana en Eldorado</p>
            <h1 id="titulo-principal"><span>Aprender con sentido.</span><span>Crecer con <em>valores.</em></span></h1>
            <p className="hero-description">Jardín, Primaria y Secundaria en Eldorado. Una comunidad que acompaña cada etapa con educación, fe y amor.</p>
            <div className="hero-actions">
              <a className="button" href="#niveles">Conocé nuestra propuesta <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contacto">Consultar vacantes <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-sun" aria-hidden="true" />
            <img className="hero-image" src="/images/portada.webp" width="1920" height="1506" alt="Alumnos del Instituto Bautista del Centro comparten un encuentro escolar" fetchPriority="high" />
          </div>
        </section>

        <section className="levels-section section-pad" id="niveles" aria-labelledby="niveles-titulo">
          <div className="container">
            <div className="section-heading">
              <h2 id="niveles-titulo">Un lugar para cada etapa.</h2>
              <p>Desde los primeros descubrimientos hasta los proyectos que miran al futuro. Conocé nuestra propuesta educativa.</p>
            </div>
            <div className="level-list">
              <details className="level" name="niveles" open>
                <summary><span className="level-title">Jardín</span><span className="level-meta">Salas de 4 y 5 años <span>Turno mañana</span></span><span className="level-plus" aria-hidden="true">+</span></summary>
                <div className="level-content">
                  <div className="level-intro"><h3>El mundo se descubre jugando.</h3><p>Un comienzo que integra el juego, el aprendizaje y los valores cristianos. Acompañamos los primeros pasos en la vida escolar.</p><a className="text-link" href="#contacto" data-level="Jardín" onClick={() => setSelectedLevel('Jardín')}>Consultar vacantes <span aria-hidden="true">→</span></a></div>
                  <ul className="level-features"><li><strong>Salas de 4 y 5</strong><span>Educación inicial en turno mañana.</span></li><li><strong>Aprender a través del juego</strong><span>Experiencias para explorar, compartir y expresarse.</span></li><li><strong>Primeros encuentros con el inglés</strong><span>Una propuesta que acerca otro idioma desde la infancia.</span></li></ul>
                </div>
              </details>
              <details className="level" name="niveles">
                <summary><span className="level-title">Primaria</span><span className="level-meta">De 1.º a 7.º grado <span>Turno mañana</span></span><span className="level-plus" aria-hidden="true">+</span></summary>
                <div className="level-content">
                  <div className="level-intro"><h3>La curiosidad encuentra su camino.</h3><p>Construimos conocimientos y hábitos para seguir aprendiendo, con una formación integral que une lo académico y los valores cristianos.</p><a className="text-link" href="#contacto" data-level="Primaria" onClick={() => setSelectedLevel('Primaria')}>Consultar vacantes <span aria-hidden="true">→</span></a></div>
                  <ul className="level-features"><li><strong>Inglés</strong><span>El aprendizaje de una segunda lengua como parte de la propuesta.</span></li><li><strong>Robótica e informática</strong><span>Espacios para acercarse a la tecnología y desarrollar nuevas habilidades.</span></li><li><strong>Talleres</strong><span>Experiencias que amplían lo que se aprende en el aula.</span></li></ul>
                </div>
              </details>
              <details className="level" name="niveles">
                <summary><span className="level-title">Secundaria</span><span className="level-meta">Orientación en Educación Física <span>Turno tarde</span></span><span className="level-plus" aria-hidden="true">+</span></summary>
                <div className="level-content">
                  <div className="level-intro"><h3>Más herramientas para lo que viene.</h3><p>Una etapa para construir autonomía, profundizar conocimientos y crecer junto a otros, con una mirada cristiana de la vida.</p><a className="text-link" href="#contacto" data-level="Secundaria" onClick={() => setSelectedLevel('Secundaria')}>Consultar vacantes <span aria-hidden="true">→</span></a></div>
                  <ul className="level-features"><li><strong>Orientación en Educación Física</strong><span>El movimiento, el deporte y el trabajo compartido en la formación.</span></li><li><strong>Inglés y portugués</strong><span>Dos idiomas que amplían las posibilidades de comunicación.</span></li><li><strong>Formación integral</strong><span>Aprendizajes académicos, desarrollo personal y valores cristianos.</span></li></ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="nosotros" className="identity-section section-pad" aria-labelledby="nosotros-titulo">
          <div className="container identity-layout">
            <div className="identity-title"><h2 id="nosotros-titulo">Educar también<br />es enseñar<br />a <em>amar.</em></h2><span className="identity-stroke" aria-hidden="true" /></div>
            <div className="identity-content"><p className="lead">Somos el Instituto Bautista del Centro, una comunidad educativa cristiana en Eldorado, Misiones.</p><p>Creemos en una educación que acompaña a la persona en lo académico, lo emocional y lo espiritual. Nuestra identidad bautista nos invita a vivir la fe, amar a Dios y al prójimo, y desarrollar un corazón de servicio.</p><div className="values-list" id="valores"><div><h3>Fe que orienta</h3><p>Los valores cristianos como parte de la vida y el aprendizaje.</p></div><div><h3>Amor y respeto</h3><p>Reconocer el valor de cada persona y aprender a convivir.</p></div><div><h3>Compromiso y servicio</h3><p>Crecer en responsabilidad y en el cuidado de los demás.</p></div><div><h3>Excelencia y sabiduría</h3><p>Aprender con dedicación y dar sentido a lo que sabemos.</p></div></div></div>
          </div>
        </section>

        <section id="vida-escolar" className="life-section section-pad" aria-labelledby="vida-titulo">
          <div className="container"><div className="section-heading"><p className="eyebrow">Nuestra comunidad</p><h2 id="vida-titulo">Lo que aprendemos.<br />Lo que vivimos juntos.</h2><p>Preguntar, participar, compartir. La vida escolar se construye en el aula y en cada encuentro con los demás.</p></div><div className="life-gallery"><figure className="life-main reveal"><img src="/images/estudiantes-1.webp" width="1280" height="1024" loading="lazy" alt="Estudiantes levantan la mano y participan de un encuentro en el Instituto" /><figcaption>Un espacio para escuchar, preguntar y participar.</figcaption></figure><div className="life-side"><figure className="reveal"><img src="/images/portada.webp" width="1920" height="1506" loading="lazy" alt="Chicos del Instituto comparten una actividad con sus compañeros" /><figcaption>La alegría de crecer acompañados.</figcaption></figure><p className="life-note">Una escuela se vive.<br />Una comunidad se comparte.</p></div></div></div>
        </section>

        <section id="preinscripciones" className="admissions-section section-pad" aria-labelledby="preinscripciones-titulo">
          <div className="container"><div className="section-heading"><h2 id="preinscripciones-titulo">El próximo paso empieza<br />con una conversación.</h2><p>Conocé la propuesta, acercanos tus dudas y empezá el proceso de preinscripción para el ciclo 2027.</p></div><ol className="admission-steps"><li><h3>Conocé la propuesta</h3><p>Explorá los niveles y consultanos por el curso que te interesa.</p></li><li><h3>Completá la preinscripción</h3><p>Registrá los datos solicitados en el formulario oficial del Instituto.</p></li><li><h3>Conversá con el equipo</h3><p>Realizá la entrevista inicial obligatoria y consultá la documentación requerida.</p></li></ol><div className="admission-action"><a className="button" href={FORM_URL} target="_blank" rel="noopener noreferrer">Preinscripciones 2027 <span aria-hidden="true">↗</span></a><p>La preinscripción no confirma una vacante. El ingreso está sujeto a disponibilidad, documentación y entrevista inicial.</p></div></div>
        </section>

        <section id="preguntas-frecuentes" className="faq-section section-pad" aria-labelledby="preguntas-titulo">
          <div className="container faq-layout"><div className="faq-heading"><h2 id="preguntas-titulo">Antes de elegir,<br />hablemos.</h2><p>Algunas respuestas para acompañar la decisión de tu familia.</p><a className="text-link" href="#contacto">Consultar vacantes <span aria-hidden="true">→</span></a></div><div className="faq-list"><details><summary>¿Qué niveles ofrece el Instituto?<span aria-hidden="true">+</span></summary><p>Ofrecemos Jardín (salas de 4 y 5 años), Primaria y Secundaria con orientación en Educación Física, en Eldorado, Misiones.</p></details><details><summary>¿En qué turnos se cursa?<span aria-hidden="true">+</span></summary><p>Jardín y Primaria funcionan en turno mañana. Secundaria funciona en turno tarde. Consultá al equipo los horarios específicos de cada curso.</p></details><details><summary>¿Cuál es la propuesta cristiana del colegio?<span aria-hidden="true">+</span></summary><p>Somos una institución cristiana bautista. Nuestra propuesta integra la formación académica, emocional y espiritual, el amor a Dios y al prójimo, el respeto y el servicio.</p></details><details><summary>¿La preinscripción asegura una vacante?<span aria-hidden="true">+</span></summary><p>No. La preinscripción está sujeta a disponibilidad de vacantes y a la documentación solicitada. El proceso incluye una entrevista inicial obligatoria.</p></details><details><summary>¿Cómo consulto aranceles y documentación?<span aria-hidden="true">+</span></summary><p>Contactá a Administración por WhatsApp al +54 3751 50-2744 o por teléfono al +54 3751 42-4930 para conocer la información correspondiente al nivel y ciclo lectivo de interés.</p></details><details><summary>¿Dónde están y cuándo atienden?<span aria-hidden="true">+</span></summary><p>La Administración se encuentra en La Rioja 1402, Eldorado, Misiones. Atiende de lunes a viernes de 7:00 a 12:00 y de 13:30 a 18:30. La atención de Nivel Inicial es de 8:00 a 11:00.</p></details></div></div>
        </section>

        <section id="contacto" className="contact-section section-pad" aria-labelledby="contacto-titulo">
          <div className="container contact-layout"><div className="contact-copy"><p className="eyebrow">Estamos para acompañarte</p><h2 id="contacto-titulo">Conozcamos<br />a tu familia.</h2><p>Contanos qué etapa están por empezar.<br />Te ayudamos a conocer la propuesta del Instituto.</p><address><strong>Encontranos en Eldorado</strong>La Rioja 1402, Misiones, Argentina<br /><a href="https://www.google.com/maps/search/?api=1&query=Instituto+Bautista+del+Centro+La+Rioja+1402+Eldorado+Misiones" target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a></address></div><div className="contact-panel"><h3>Consultar vacantes</h3><p>Elegí el nivel y continuá la conversación por WhatsApp.</p><form id="inquiry-form" action={WHATSAPP_URL} method="get" target="_blank" rel="noopener noreferrer" onSubmit={handleInquirySubmit}><div className="field"><label htmlFor="adult-name">Tu nombre <span>(opcional)</span></label><input id="adult-name" type="text" autoComplete="given-name" maxLength={80} placeholder="¿Cómo te llamás?" value={adultName} onChange={(event) => setAdultName(event.target.value)} /></div><div className="field"><label htmlFor="level-select">Nivel que te interesa</label><select id="level-select" required value={selectedLevel} onChange={(event) => setSelectedLevel(event.target.value)}><option value="" disabled>Seleccioná un nivel</option><option value="Jardín">Jardín</option><option value="Primaria">Primaria</option><option value="Secundaria">Secundaria</option><option value="Orientación general">Necesito orientación</option></select></div><input ref={inquiryMessageRef} id="inquiry-message" type="hidden" name="text" /><button className="button button-yellow" type="submit">Continuar en WhatsApp <span aria-hidden="true">↗</span></button><p className="form-help">Se abre WhatsApp con tu consulta preparada. Podés revisarla antes de enviarla. Este sitio no guarda tus datos.</p></form><p id="form-status" className="form-status" role="status">{formStatus}</p><div className="contact-alternatives"><span>También podés llamar</span><a href="tel:+543751424930">Administración: (03751) 42-4930</a><a href="tel:+543751426784">Nivel Inicial: (03751) 42-6784</a></div></div></div>
        </section>

        <section id="recursos-familias" className="resources-section" aria-labelledby="recursos-titulo">
          <div className="container resources-layout"><div><h2 id="recursos-titulo">¿Ya sos parte del IBC?</h2><p>Documentos útiles para acompañar la vida escolar.</p></div><div className="resources-links"><a href="/pdfs/family-resources/formularios/ficha-medica-obligatoria.pdf" target="_blank" rel="noopener noreferrer">Ficha médica obligatoria <span>PDF ↗</span></a><a href="/pdfs/family-resources/formularios/autorizacion-salida-individual.pdf" target="_blank" rel="noopener noreferrer">Autorización de salida individual <span>PDF ↗</span></a><a href="/pdfs/family-resources/formularios/autorizacion-salida-acompanada.pdf" target="_blank" rel="noopener noreferrer">Autorización de salida acompañada <span>PDF ↗</span></a><details className="resource-details"><summary>Listas de materiales <span aria-hidden="true">+</span></summary><p>Consultá con el Instituto la vigencia de estas listas para el ciclo lectivo que corresponda.</p><div className="materials-grid"><div><h3>Primaria</h3><a href="/pdfs/family-resources/nivel-primario/materiales-primer-grado.pdf" target="_blank" rel="noopener noreferrer">1.º grado <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-primario/materiales-segundo-grado.pdf" target="_blank" rel="noopener noreferrer">2.º grado <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-primario/materiales-tercer-grado.pdf" target="_blank" rel="noopener noreferrer">3.º grado <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-primario/materiales-cuarto-grado.pdf" target="_blank" rel="noopener noreferrer">4.º grado <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-primario/materiales-quinto-grado.pdf" target="_blank" rel="noopener noreferrer">5.º grado <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-primario/materiales-sexto-grado.pdf" target="_blank" rel="noopener noreferrer">6.º grado <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-primario/materiales-septimo-grado.pdf" target="_blank" rel="noopener noreferrer">7.º grado <span>PDF ↗</span></a></div><div><h3>Secundaria</h3><a href="/pdfs/family-resources/nivel-secundario/materiales-primer-anio.pdf" target="_blank" rel="noopener noreferrer">1.º año <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-secundario/materiales-segundo-anio.pdf" target="_blank" rel="noopener noreferrer">2.º año <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-secundario/materiales-tercer-anio.pdf" target="_blank" rel="noopener noreferrer">3.º año <span>PDF ↗</span></a><a href="/pdfs/family-resources/nivel-secundario/materiales-cuarto-anio.pdf" target="_blank" rel="noopener noreferrer">4.º año <span>PDF ↗</span></a></div></div></details><details className="resource-details"><summary>Uniformes por nivel <span aria-hidden="true">+</span></summary><div className="uniform-content"><h3>Jardín</h3><p>Guardapolvo anaranjado para salas de 4 y 5. Debajo, remera del Instituto, blanca o azul. Para Educación Física, remera anaranjada.</p><h3>Primaria</h3><p>Chomba anaranjada; short pollera para alumnas y pantalón de vestir azul para alumnos. Para Educación Física, remera anaranjada y pantalón deportivo.</p><h3>Secundaria</h3><p>Chomba blanca y pantalón de vestir azul marino. Para Educación Física, remera azul y pantalón deportivo.</p><p>Todos los niveles usan medias y abrigos azul marino, y zapatos o zapatillas negras. Los uniformes llevan el logo del IBC. Consultá a Administración los detalles antes de comprar.</p></div></details></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><div><a className="brand" href="#inicio" aria-label="Instituto Bautista del Centro, inicio"><span className="brand-mark"><img src="/images/logo-instituto-blanco.svg" width="48" height="48" alt="" /></span><span className="brand-name">Instituto Bautista <span>del Centro</span></span></a><p className="footer-motto">Educación con sentido.<br />Valores para la vida.</p></div><div className="footer-contact"><h2>Contacto</h2><a href="mailto:instbautistadelcentro@gmail.com">instbautistadelcentro@gmail.com</a><a href="mailto:secretaria.ibc0612@gmail.com">secretaria.ibc0612@gmail.com</a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp: +54 3751 50-2744</a><a href="https://www.facebook.com/profile.php?id=100063516562917" target="_blank" rel="noopener noreferrer">Facebook del Instituto ↗</a></div><div className="footer-hours"><h2>Atención al público</h2><p>Administración, lunes a viernes<br />7:00 a 12:00 y 13:30 a 18:30</p><p>Nivel Inicial: 8:00 a 11:00</p></div></div><div className="container footer-bottom"><p>Instituto Bautista del Centro · Eldorado, Misiones</p><a href="#inicio">Volver al inicio <span aria-hidden="true">↑</span></a></div></footer>
    </div>
  );
};

export default Index;
