document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. SMOOTH SCROLLING FOR NAVIGATION --- */
    document.querySelectorAll('.nav-links a, .btn-group a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* --- 2. SCROLL FADE-IN ANIMATION --- */
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, {
            threshold: 0.15, // Trigger when 15% visible
            rootMargin: "0px 0px -50px 0px"
        });

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback if browser doesn't support IntersectionObserver
        fadeElements.forEach(el => el.classList.add('visible'));
    }
});
