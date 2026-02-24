// Language translations for portfolio
const translations = {
    es: {
        // Navigation
        'Inicio': 'Inicio',
        'Sobre Mí': 'Sobre Mí',
        'Proyectos': 'Proyectos',
        'Contacto': 'Contacto',

        // Hero
        'Hola, soy': 'Hola, soy',
        'Transformando datos en insights accionables. Especializado en machine learning, análisis estadístico y visualización de datos para resolver problemas complejos.': 'Transformando datos en insights accionables. Especializado en machine learning, análisis estadístico y visualización de datos para resolver problemas complejos.',
        'Ver Proyectos': 'Ver Proyectos',
        'Contactar': 'Contactar',

        // About
        'Sobre Mí': 'Sobre Mí',
        'Soy un Data Scientist apasionado por descubrir patrones ocultos en los datos y convertirlos en soluciones prácticas que impulsan el crecimiento empresarial.': 'Soy un Data Scientist apasionado por descubrir patrones ocultos en los datos y convertirlos en soluciones prácticas que impulsan el crecimiento empresarial.',
        'Con experiencia en Python, R, SQL y herramientas de visualización como Tableau y Power BI, me especializo en crear modelos predictivos, realizar análisis exploratorios profundos y comunicar resultados complejos de manera clara y efectiva.': 'Con experiencia en Python, R, SQL y herramientas de visualización como Tableau y Power BI, me especializo en crear modelos predictivos, realizar análisis exploratorios profundos y comunicar resultados complejos de manera clara y efectiva.',
        'Habilidades Técnicas': 'Habilidades Técnicas',
        'Lenguajes': 'Lenguajes',
        'Visualización': 'Visualización',
        'Herramientas': 'Herramientas',

        // Projects
        'Proyectos Destacados': 'Proyectos Destacados',
        'Una selección de proyectos que demuestran mi experiencia en análisis de datos y machine learning.': 'Una selección de proyectos que demuestran mi experiencia en análisis de datos y machine learning.',

        // Contact
        'Contacto': 'Contacto',
        '¿Tienes un proyecto en mente? Me encantaría saber de ti.': '¿Tienes un proyecto en mente? Me encantaría saber de ti.',
        'Nombre': 'Nombre',
        'Asunto': 'Asunto',
        'Mensaje': 'Mensaje',
        'Enviar Mensaje': 'Enviar Mensaje',
        'Conectemos': 'Conectemos',
        'Estoy disponible para oportunidades freelance, colaboraciones y posiciones full-time.': 'Estoy disponible para oportunidades freelance, colaboraciones y posiciones full-time.'
    },
    en: {
        // Navigation
        'Inicio': 'Home',
        'Sobre Mí': 'About',
        'Proyectos': 'Projects',
        'Contacto': 'Contact',

        // Hero
        'Hola, soy': "Hi, I'm",
        'Transformando datos en insights accionables. Especializado en machine learning, análisis estadístico y visualización de datos para resolver problemas complejos.': 'Transforming data into actionable insights. Specialized in machine learning, statistical analysis, and data visualization to solve complex problems.',
        'Ver Proyectos': 'View Projects',
        'Contactar': 'Contact',

        // About
        'Sobre Mí': 'About Me',
        'Soy un Data Scientist apasionado por descubrir patrones ocultos en los datos y convertirlos en soluciones prácticas que impulsan el crecimiento empresarial.': "I'm a Data Scientist passionate about uncovering hidden patterns in data and turning them into practical solutions that drive business growth.",
        'Con experiencia en Python, R, SQL y herramientas de visualización como Tableau y Power BI, me especializo en crear modelos predictivos, realizar análisis exploratorios profundos y comunicar resultados complejos de manera clara y efectiva.': 'With experience in Python, R, SQL, and visualization tools like Tableau and Power BI, I specialize in creating predictive models, performing in-depth exploratory analysis, and communicating complex results clearly and effectively.',
        'Habilidades Técnicas': 'Technical Skills',
        'Lenguajes': 'Languages',
        'Visualización': 'Visualization',
        'Herramientas': 'Tools',

        // Projects
        'Proyectos Destacados': 'Featured Projects',
        'Una selección de proyectos que demuestran mi experiencia en análisis de datos y machine learning.': 'A selection of projects showcasing my experience in data analysis and machine learning.',

        // Contact
        'Contacto': 'Contact',
        '¿Tienes un proyecto en mente? Me encantaría saber de ti.': "Have a project in mind? I'd love to hear from you.",
        'Nombre': 'Name',
        'Asunto': 'Subject',
        'Mensaje': 'Message',
        'Enviar Mensaje': 'Send Message',
        'Conectemos': "Let's Connect",
        'Estoy disponible para oportunidades freelance, colaboraciones y posiciones full-time.': "I'm available for freelance opportunities, collaborations, and full-time positions."
    }
};

// Initialize current language (default: Spanish)
let currentLang = 'es';

// Switch language function
function switchLanguage(lang) {
    currentLang = lang;

    // Update all elements with data-es and data-en attributes
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        if (lang === 'es') {
            element.textContent = element.getAttribute('data-es');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        switchLanguage(savedLang);
    }
});
