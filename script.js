// ============================================
// LANGUAGE SWITCHER - Initialize First
// ============================================
let currentLang = localStorage.getItem('preferredLanguage') || 'es';

// Switch language function
function switchLanguage(lang) {
    currentLang = lang;
    console.log('Switching to language:', lang);

    // Update all elements with data-es and data-en attributes
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        const esText = element.getAttribute('data-es');
        const enText = element.getAttribute('data-en');

        if (lang === 'es' && esText) {
            element.textContent = esText;
        } else if (lang === 'en' && enText) {
            element.textContent = enText;
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
    console.log('Language saved:', lang);
}

// Initialize language buttons with event listeners
function setupLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Setting up language buttons, found:', langButtons.length);

    langButtons.forEach((btn, index) => {
        console.log(`Button ${index}:`, btn.getAttribute('data-lang'));
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            console.log('Button clicked! Language:', lang);
            switchLanguage(lang);
        });
    });

    // Set initial language
    switchLanguage(currentLang);
}

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ============================================
// SMOOTH SCROLLING
// ============================================
// Add smooth scrolling to all links (backup for browsers that don't support CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================
// Highlight the active section in the navigation
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100; // Offset for better UX

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow to navbar when scrolled
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const formAction = contactForm.getAttribute('action');

        // Show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        try {
            // Submit form to Formspree
            const response = await fetch(formAction, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                // Error
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            // Error handling
            formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
            formStatus.className = 'form-status error';
        } finally {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;

            // Clear status message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        }
    });
}


// ============================================
// SCROLL ANIMATIONS
// ============================================
// Scroll reveal animation with Intersection Observer
const scrollRevealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            entry.target.classList.remove('will-animate');
            // Optionally unobserve after revealing
            scrollRevealObserver.unobserve(entry.target);
        }
    });
}, scrollRevealOptions);

// Observe all scroll-reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    scrollRevealElements.forEach(el => {
        // Check if element is in viewport on load
        const rect = el.getBoundingClientRect();
        const isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        // If not in viewport, add will-animate class and observe
        if (!isInViewport) {
            el.classList.add('will-animate');
            scrollRevealObserver.observe(el);
        } else {
            // If already in viewport, show immediately
            el.classList.add('revealed');
        }
    });

    // Also observe project cards when they're loaded
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

            if (!isInViewport) {
                card.classList.add('will-animate');
                scrollRevealObserver.observe(card);
            } else {
                card.classList.add('revealed');
            }
        });
    }, 100);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Scroll to top button (optional enhancement)
function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--accent-primary);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(scrollButton);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.pointerEvents = 'auto';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.pointerEvents = 'none';
        }
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll event handlers
const debouncedHighlightNav = debounce(highlightNavigation, 10);
window.addEventListener('scroll', debouncedHighlightNav);

// ============================================
// PHONE MODAL
// ============================================
const phoneModal = document.getElementById('phoneModal');
const phoneButton = document.getElementById('phoneButton');
const modalClose = document.querySelector('.modal-close');

//AGREGADO POR JOACO

// ============================================
// MAIL MODAL
// ============================================
const mailLink = document.getElementById('mailLink');
const mailModal = document.getElementById('mailModal');
const mailClose = document.querySelector('.mail-close');

if (mailLink && mailModal) {
    mailLink.addEventListener('click', (e) => {
        e.preventDefault();
        mailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (mailClose) {
    mailClose.addEventListener('click', () => {
        mailModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (mailModal) {
    mailModal.addEventListener('click', (e) => {
        if (e.target === mailModal) {
            mailModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mailModal.classList.contains('active')) {
        mailModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});




// Open modal
if (phoneButton) {
    phoneButton.addEventListener('click', () => {
        phoneModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
}

// Close modal when clicking X
if (modalClose) {
    modalClose.addEventListener('click', () => {
        phoneModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
}

// Close modal when clicking outside
if (phoneModal) {
    phoneModal.addEventListener('click', (e) => {
        if (e.target === phoneModal) {
            phoneModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && phoneModal.classList.contains('active')) {
        phoneModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ============================================
// INITIALIZE ALL ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing language switcher...');
    setupLanguageButtons();
});

// Also try to initialize immediately if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    console.log('DOM already loaded, initializing language switcher immediately...');
    setupLanguageButtons();
}

// ============================================
// CONSOLE MESSAGE (Optional - adds a personal touch)
// ============================================
console.log('%c👋 Hola! Gracias por visitar mi portfolio', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%c¿Te interesa trabajar juntos! ¡Contáctame!', 'color: #10b981; font-size: 14px;');
