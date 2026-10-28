import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ClipboardList,
  Download,
  Github,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Smartphone,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';
import './App.css';
import me from './assets/me.jpg';
import cv from './assets/cv.pdf';

const navigation = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Expertises', href: '#services' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
];

const skills = [
  { category: 'Interfaces web', items: ['Angular', 'Angular Material', 'PrimeNG'] },
  { category: 'Applications côté serveur', items: ['Node.js', 'Laravel', 'PostgreSQL', 'MySQL'] },
  { category: 'Applications mobiles', items: ['Flutter'] },
];

const services = [
  {
    icon: LayoutDashboard,
    title: 'Interfaces web',
    description: 'Des interfaces claires, accessibles et adaptées à tous les écrans.',
  },
  {
    icon: Code2,
    title: 'Développement web',
    description: 'Des applications robustes, rapides et pensées pour évoluer.',
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    description: 'Des expériences mobiles intuitives, utiles et agréables à utiliser.',
  },
  {
    icon: Workflow,
    title: 'DevOps & automatisation',
    description: 'Des workflows CI/CD pour automatiser les vérifications et fiabiliser la livraison des applications.',
  },
];

const projects = [
  {
    number: '01',
    title: 'DevStage',
    description: 'Une plateforme dédiée à l’insertion professionnelle, qui aide les étudiants à trouver des stages et les entreprises à publier leurs offres.',
    technologies: ['Laravel', 'Angular'],
    icon: BriefcaseBusiness,
  },
  {
    number: '02',
    title: 'Gestion des tâches en entreprise',
    description: 'Un outil de suivi du travail d’équipe pour attribuer les tâches à chaque employé, planifier les dates de début et d’échéance, et suivre l’avancement des activités.',
    technologies: ['Node.js', 'Angular'],
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'BaoBaoHealth',
    description: 'Un service numérique qui rapproche patients, hôpitaux et pharmacies pour simplifier l’accès aux établissements et aux services de santé.',
    technologies: ['Node.js', 'Angular'],
    icon: Smartphone,
  },
  {
    number: '04',
    title: 'Suivi sécurisé des biens fonciers',
    description: 'Une application visant à sécuriser l’information sur les terrains et à rendre les transactions immobilières plus transparentes en Guinée.',
    technologies: ['Node.js', 'Angular'],
    icon: LayoutDashboard,
  },
  {
    number: '05',
    title: 'EduSmart GN',
    description: 'Une plateforme de gestion scolaire qui réunit le suivi des élèves, des notes et des présences, ainsi que la gestion des bulletins et des paiements.',
    technologies: ['Angular', 'Node.js'],
    icon: Code2,
  },
  {
    number: '06',
    title: 'Forum académique',
    description: 'Une application mobile conçue pour faciliter les échanges et le partage de connaissances entre étudiants et enseignants.',
    technologies: ['Flutter'],
    icon: Smartphone,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.scroll-reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navigation shell" aria-label="Navigation principale">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Pricemou, accueil">
            <span className="brand-mark">P</span>
            <span className="brand-name">Pricemou<span>.</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Me contacter <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Développeur web, mobile & DevOps</p>
              <h1>Je transforme vos idées en <span>expériences digitales.</span></h1>
              <p className="hero-description">
                Je suis Pricemou Cece Djibril, développeur web et mobile basé à Conakry.
                Je conçois des applications utiles et performantes, puis automatise leur
                vérification et leur livraison grâce à Docker et aux workflows CI/CD.
              </p>
              <div className="hero-devops">
                <Workflow size={16} />
                <span>Du code au déploiement, avec des workflows automatisés</span>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Parlons de votre projet <ArrowUpRight size={18} />
                </a>
                <a className="button button-outline" href={cv} download="Pricemou-CV.pdf">
                  <Download size={17} /> Télécharger mon CV
                </a>
              </div>

              <div className="hero-meta">
                <div className="availability"><span /> Disponible pour échanger</div>
                <div className="hero-location"><MapPin size={16} /> Kipé, Conakry, Guinée</div>
              </div>

              <div className="social-links" aria-label="Réseaux sociaux">
                <a href="https://github.com/Cecedjibrilpricemou/Cecedjibrilpricemou" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={19} />
                </a>
                <a href="mailto:cecedjibrilpricemou1er@gmail.com" aria-label="E-mail">
                  <Mail size={19} />
                </a>
                <a
                  href="https://www.linkedin.com/in/cece-djibril-pricemou-30b1bb315"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={19} />
                </a>
              </div>
              <a
                className="digital-card-link"
                href="https://ma-carte-de-visite-numerique.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Voir ma carte de visite numérique <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="hero-visual">
              <div className="portrait-frame">
                <div className="portrait-accent" />
                <img className="hero-portrait" src={me} alt="Pricemou, développeur web et mobile" />
                <div className="portrait-caption">
                  <span className="caption-icon"><Code2 size={18} /></span>
                  <span><strong>Créativité & technologie</strong><small>Au service de vos idées</small></span>
                </div>
                <div className="portrait-stamp"><Sparkles size={20} /><span>Curieux<br />de nature</span></div>
              </div>
              <span className="visual-orbit orbit-one" />
              <span className="visual-orbit orbit-two" />
            </div>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={16} /> Découvrir la suite</a>
        </section>

        <section className="about section section-soft" id="about">
          <div className="about-grid shell">
            <div className="about-visual scroll-reveal">
              <div className="about-profile-card">
                <div className="about-profile-top">
                  <span className="about-profile-dot" />
                  <span>Développement web & mobile</span>
                  <Code2 size={18} />
                </div>
                <div className="about-monogram">PCD<span>.</span></div>
                <p className="about-profile-message">Concevoir.<br />Développer.<br /><span>Faire évoluer.</span></p>
                <div className="about-profile-footer">
                  <span>Conakry, Guinée</span>
                  <span>Curieux par nature</span>
                </div>
              </div>
              <div className="about-note"><span>01</span><p>Une approche<br />humaine du numérique</p></div>
            </div>
            <div className="about-copy scroll-reveal">
              <p className="eyebrow"><span className="eyebrow-line" /> À propos</p>
              <h2>Un développeur engagé, <span>des solutions qui ont du sens.</span></h2>
              <p>
                En fin de cycle d’études en génie informatique, je me passionne pour la création
                d’écosystèmes numériques. Mon parcours m’a permis d’acquérir de solides bases
                en ingénierie logicielle et de les mettre au service de projets concrets.
              </p>
              <p>
                J’aime transformer des idées complexes en expériences simples, performantes et
                accessibles. Je m’intéresse aussi aux pratiques DevOps : automatiser les
                vérifications et les livraisons pour rendre le développement plus fiable et fluide.
              </p>
              <div className="expertise-list">
                <span><i>✓</i> Design responsive</span>
                <span><i>✓</i> Applications web & mobiles</span>
                <span><i>✓</i> Performance & qualité</span>
                <span><i>✓</i> Expérience utilisateur</span>
              </div>
              <div className="experience-card">
                <span className="experience-icon"><BriefcaseBusiness size={18} /></span>
                <div className="experience-copy">
                  <small>Expérience professionnelle</small>
                  <strong>Stagiaire développeur web · Ecash</strong>
                  <small>Août – novembre</small>
                  <p>
                    Participation à la conception de projets et aux travaux sur l’authentification
                    des services entre entreprises. Une expérience qui m’a permis d’approfondir
                    mes compétences et de mieux comprendre les enjeux de collaboration et de
                    sécurité dans les applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="shell">
            <div className="section-heading scroll-reveal">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> Ce que je fais</p>
                <h2>Des compétences au service<br /><span>de vos ambitions.</span></h2>
              </div>
              <p>De la conception à l’automatisation des livraisons, je vous accompagne dans la réalisation de vos idées.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, description }, index) => (
                <article className="service-card scroll-reveal" key={title}>
                  <div className="service-topline"><span>0{index + 1}</span><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="service-rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section section-soft" id="skills">
          <div className="shell">
            <div className="section-heading scroll-reveal">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> Ma boîte à outils</p>
                <h2>Les technologies<br /><span>que je maîtrise.</span></h2>
              </div>
              <p>Un socle technique polyvalent pour concevoir et réaliser des produits numériques fiables.</p>
            </div>
            <div className="skill-grid">
              {skills.map((group) => (
                <article className="skill-card scroll-reveal" key={group.category}>
                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="shell">
            <div className="section-heading scroll-reveal">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> Sélection de projets</p>
                <h2>Des idées devenues<br /><span>réalisations.</span></h2>
              </div>
              <p>Des solutions numériques pensées pour répondre à des besoins concrets dans les domaines de l’emploi, de la santé, de l’éducation et du foncier.</p>
            </div>
            <div className="project-grid">
              {projects.map(({ number, title, description, technologies, icon: Icon }) => (
                <article className="project-card scroll-reveal" key={number}>
                  <div className="project-art">
                    <span className="project-number">{number} / {String(projects.length).padStart(2, '0')}</span>
                    <div className="project-art-icon"><Icon size={31} strokeWidth={1.5} /></div>
                    <span className="project-art-orbit" />
                    <a
                      className="project-arrow"
                      href="https://github.com/Cecedjibrilpricemou/Cecedjibrilpricemou"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Découvrir ${title} sur mon profil GitHub`}
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </div>
                  <div className="project-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {technologies && (
                      <div className="project-tags">
                        {technologies.map((technology) => <span key={technology}>{technology}</span>)}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="delivery-note scroll-reveal">
              <span className="delivery-icon"><Github size={20} /></span>
              <div>
                <h3>DevOps : automatiser pour livrer avec confiance</h3>
                <p>
                  Avec Docker, GitHub Actions, Semgrep et SonarQube, je mets en place des
                  environnements cohérents et des workflows CI/CD qui automatisent les
                  vérifications, l’analyse de qualité du code et les étapes de livraison.
                </p>
              </div>
              <span className="delivery-tag">Docker · CI/CD · Qualité</span>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-inner shell scroll-reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> Et maintenant ?</p>
            <h2>Une idée en tête ?<br /><span>Créons quelque chose d’utile.</span></h2>
            <p className="contact-description">
              Vous avez un projet, une question ou simplement envie d’échanger ? Écrivez-moi, je serai ravi d’en discuter avec vous.
            </p>
            <a className="button button-light" href="mailto:cecedjibrilpricemou1er@gmail.com">
              <Mail size={18} /> Écrivez-moi <ArrowUpRight size={18} />
            </a>
            <div className="contact-details">
              <a href="mailto:cecedjibrilpricemou1er@gmail.com">cecedjibrilpricemou1er@gmail.com</a>
              <a href="tel:+224627082601">+224 627 08 26 01</a>
              <span>Kipé, Conakry, Guinée</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner shell">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">P</span><span className="brand-name">Pricemou<span>.</span></span></a>
          <p>Conçu avec soin à Conakry · © {new Date().getFullYear()} Pricemou</p>
          <a className="back-to-top" href="#home">Retour en haut <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
