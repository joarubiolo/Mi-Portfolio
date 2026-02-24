// ============================================
// PROJECTS DATA
// ============================================
// This file contains all your portfolio projects.
// To add/edit projects, simply modify the array below.
// Each project should follow the same structure.

const projects = [
    {
        title: "Pro-Data Consultora - Sistema de Recomendaciones",
        titleEn: "Pro-Data Consulting - Recommendation System",
        description: "App de recomendaciones para gastronomía que genera sugerencias de mejora a partir de datos estructurados y reseñas históricas. Incluye desarrollo de modelos de ML (XGBoost) y redes neuronales (TensorFlow, Keras), con información sobre mejoras en ubicación, prestaciones y rubros óptimos.",
        descriptionEn: "Restaurant recommendation app that generates improvement suggestions from structured data and historical reviews. Includes ML models (XGBoost) and neural networks (TensorFlow, Keras) development, with insights on location improvements, services, and optimal business categories.",
        tags: ["XGBoost", "TensorFlow", "Keras", "FastAPI", "Streamlit", "MySQL", "BigQuery", "GCStorage"],
        image: "/assets/images/restaurant-recommendation.jpg",
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "Agente IA de Descripción de Imágenes",
        titleEn: "AI Image Description Agent",
        description: "Agente IA automatizado para describir imágenes a muy bajo costo, usando encoding base64 y OpenAI API. Incluye interfaz intuitiva y escalable con FastAPI, OpenCV y deployment en Render. Aplicable a cámaras de vigilancia y asistencia para personas con visibilidad reducida.",
        descriptionEn: "Automated AI agent for low-cost image description using base64 encoding and OpenAI API. Features intuitive and scalable interface with FastAPI, OpenCV and Render deployment. Applicable to surveillance cameras and assistance for visually impaired individuals.",
        tags: ["OpenAI", "OpenCV", "FastAPI", "Render", "Python", "Computer Vision"],
        image: "/assets/images/ai-vision.jpg",
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "Ecommerce Web con integraciones de pago",
        titleEn: "Ecommerce Web with Payment Integrations",
        description: "Ecommerce web con integraciones de pagos a través de VexorPay y MercadoPago. Incluye desarrollo frontend con React, Vite y TypeScript, catálogo de productos, carrito de compras persistente, autenticación con Firebase y base de datos con Supabase.",
        descriptionEn: "Ecommerce web with payment integrations through VexorPay and MercadoPago. Includes frontend development with React, Vite and TypeScript, product catalog, persistent shopping cart, Firebase authentication and Supabase database.",
        tags: ["React", "Vite", "TypeScript", "VexorPay", "MercadoPago", "Firebase", "Supabase", "Tailwind CSS"],
        image: "/assets/images/ecommerce-payment.png",
        links: {
            demo: "https://ecommerce-website-g5il.vercel.app/",
            github: "https://github.com/joarubiolo/ecommerce-website"
        }
    }
];

// ============================================
// RENDER PROJECTS
// ============================================
// This function automatically generates project cards from the data above.
// You don't need to modify this unless you want to change the card structure.

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (!projectsGrid) {
        console.error('Projects grid element not found');
        return;
    }

    const currentLang = localStorage.getItem('preferredLanguage') || 'es';

    projectsGrid.innerHTML = projects.map(project => `
        <article class="project-card">
            <div class="project-image">
                ${project.image.match(/^https?:|^\/|^assets\//)  //startsWith('http')
                    ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">`
                    : `<span style="font-size: 4rem;">${project.image}</span>`
                }
            </div>
            <div class="project-content">
                <h3 class="project-title" data-es="${project.title}" data-en="${project.titleEn || project.title}">${currentLang === 'en' ? (project.titleEn || project.title) : project.title}</h3>
                <p class="project-description" data-es="${project.description}" data-en="${project.descriptionEn || project.description}">${currentLang === 'en' ? (project.descriptionEn || project.description) : project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.links.demo && project.links.demo !== '#'
                        ? `<a href="${project.links.demo}" target="_blank" rel="noopener" class="project-link link-primary" data-es="Ver Demo" data-en="View Demo">Ver Demo</a>`
                        : ''}
                    ${project.links.github && project.links.github !== '#'
                        ? `<a href="${project.links.github}" target="_blank" rel="noopener" class="project-link link-secondary">GitHub</a>`
                        : ''}
                </div>
            </div>
        </article>
    `).join('');
}

// Render projects when the DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}

// ============================================
// HOW TO ADD NEW PROJECTS
// ============================================
/*
To add a new project, copy the structure below and add it to the projects array above:

{
    title: "Project Title",
    description: "Brief description of what the project does and the impact it had.",
    tags: ["Technology1", "Technology2", "Technology3"],
    image: "🔬", // Use an emoji or an image URL (https://example.com/image.jpg)
    links: {
        demo: "https://your-demo-link.com", // Or "#" if no demo available
        github: "https://github.com/yourusername/repo" // Or "#" if no GitHub repo
    }
}

TIPS:
1. Keep descriptions between 2-3 sentences
2. Use 3-6 relevant tags per project
3. For images, you can use:
   - Emojis: "📊", "🎯", "🔬", "💡", "🚀"
   - Image URLs: "https://example.com/project-screenshot.jpg"
4. Remove or use "#" for links that don't exist yet
5. Order projects with most impressive/recent first

EXAMPLE OF A REAL PROJECT:
{
    title: "COVID-19 Data Dashboard",
    description: "Interactive dashboard tracking COVID-19 cases worldwide. Automated data pipeline pulling from Johns Hopkins API, with real-time visualizations and predictive models.",
    tags: ["Python", "Dash", "Plotly", "APIs", "Time Series"],
    image: "🦠",
    links: {
        demo: "https://my-covid-dashboard.vercel.app",
        github: "https://github.com/myusername/covid-dashboard"
    }
}
*/
