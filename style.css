document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. TYPING EFFECT IN HERO SECTION --- */
    const textArray = ["Hardware Hacker", "ENTC Student", "Creative Builder", "Tech Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector(".typing-text");
    let isDeleting = false;
    
    function typeEffect() {
        const currentWord = textArray[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Typing speed logic
        let typeSpeed = isDeleting ? 50 : 100;
        
        // If word is fully typed
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at the end of word
            isDeleting = true;
        } 
        // If word is fully deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; // Move to next word
            typeSpeed = 500; // Pause before typing new word
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect
    if(typingElement) {
        setTimeout(typeEffect, 1000); // Initial start delay
    }

    /* --- 2. SMOOTH SCROLLING FOR NAVIGATION --- */
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

    /* --- 3. SCROLL FADE-IN ANIMATION --- */
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
