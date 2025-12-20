import { Menu, X, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import me from './assets/me.jpg';
import maphoto from './assets/maphoto.jpg';
import cv from './assets/cv.pdf'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { category: "Frontend", items: ["Angular", "TypeScript", "Tailwind CSS", "Daisy UI", "React.js"] },
    { category: "Backend", items: ["Express js", "Laravel", "Django", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "Figma"] }
  ];

  const projects = [
    { title: "E-commerce Platform", desc: "Solution  e-commerce complete avec integration de paiement", tech: "React, Node.js, MongoDB" },
    { title: "Gestion de Taches", desc: "Gestionnaire de taches collaratif en temps reel avec notifications.", tech: "React, Firebase" },
    { title: "Tableau de Bord Analytique", desc: "Tableau de bord de visualisation de donnees avec graphiques interactifs ", tech: "React, D3.js" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">
              <span className="text-blue-600">Dev</span><span className="text-gray-900">web & Mobile </span>
            </div>

            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">A propos</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition font-medium">Projets</a>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block text-gray-700 py-2">Home</a>
              <a href="#about" className="block text-gray-700 py-2">A propos</a>
              <a href="#services" className="block text-gray-700 py-2">Services</a>
              <a href="#projects" className="block text-gray-700 py-2">Projets</a>
              <a href="#blog" className="block text-gray-700 py-2">Blog</a>
              <a href="#contact" className="block text-gray-700 py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-xl text-gray-600 mb-4">HI</h2>

              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                I'm Pricemou
              </h1>

              <p className="text-2xl md:text-3xl font-semibold mb-6">
                A <span className="text-blue-600">Web Developer</span>
              </p>

              <p className="text-gray-600 text-lg mb-8 max-w-md">
                Hello, Je suis Pricemou Cece Djibril developpeur web et application mobile designer depuis conakry.
              </p>

              <div className="flex gap-4 flex-wrap mb-12">
                <a href='tel:+224627082601' className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                  <span>📞</span> Appelez
                </a>
                <a href='./assets/cv.pdf' download={cv} className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition flex items-center gap-2">
                  <Download size={18} /> Telecharger mon CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                <a href="https://github.com/Cecedjibrilpricemou" target="_blank" className="text-gray-700 hover:text-blue-600 transition">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/Cecedjibrilpricemou" target="_blank" className="text-gray-700 hover:text-blue-600 transition">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.linkedin.com/Cecedjibrilpricemou" target="_blank" className="text-gray-700 hover:text-blue-600 transition">
                  <Twitter size={24} />
                </a>
                <a href="mailto:cecedjibrilpricemou1er@gmail.com" className="text-gray-700 hover:text-blue-600 transition">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-96">
                <img
                  src={me}
                  alt="Profile"
                  className="w-full h-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">A propos de moi</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={maphoto}
                alt="About"
                className="w-full rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Actuellemen en fin de cycle d'etude en genie informatique , je suis passionne du developpement d'ecosystement numeriques. Mon parcours universitaire m'a permis d'acquerir une base solide en ingenierie logicielle , que j'applique avec enthousiasme dans la creation d'applications web et mobiles innovantes
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Specialise dans les technologies modernes , je m'efforce de concevoir des solutions performantes , intuitives et centrees sur l'utilisateur. Mon objectif est de transformer des idees complexes en experiences digitales fluides , tout en continuant d'apprendre et de relever de nouveaux defis techniques.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mon expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Design Responsif </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700"> Applications Web</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700"> Optimisations des Performances</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700"> Optimisation SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Mes Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Design", desc: "Creation d'interfaces esthetiques et ergonomique qui captivent votre audiance" },
              { title: "Web Development", desc: "Construction d'application web robustes et evolutives utilisant les technologies modernes" },
              { title: "Consulting", desc: "Accompagnement technique sur le choix des technologies et l'architecture de vos projets." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
                <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Competences et Expertises</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Projets en Vedette</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.desc}</p>
                  <p className="text-sm text-blue-600 font-semibold mb-4">{project.tech}</p>
                  <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Travaillons ensemble</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Un projet en tete? J'aimerais beaucoup en discuter avec vous . contactez-moi pour que nous creions quelque chose d'incroyable ensemble
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="mailto:cecedjibrilpricemou1er@gmail.com" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 justify-center">
              <Mail size={20} /> Envoyer un mail
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <a href="https://github.com/Cecedjibrilpricemou" target="_blank" className="text-gray-400 hover:text-blue-600 transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/Cecedjibrilpricemou" target="_blank" className="text-gray-400 hover:text-blue-600 transition">
              <Linkedin size={28} />
            </a>
            <a href="https://twitter.com/Cecedjibrilpricemou" target="_blank" className="text-gray-400 hover:text-blue-600 transition">
              <Twitter size={28} />
            </a>
            <a href="mailto:cecedjibrilpricemou1er@gmail.com" className="text-gray-400 hover:text-blue-600 transition">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2025 Pricemou. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;