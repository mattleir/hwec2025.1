document.addEventListener('DOMContentLoaded', function() {
    // Handle speaker card flipping
    const speakerCards = document.querySelectorAll('.speaker-card');
    speakerCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Handle smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Account for fixed header height
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
    
    // Add initial hidden class to all sections except hero
    sections.forEach(section => {
        if (section.id !== 'hero') {
            section.classList.add('fade-in-section', 'not-visible');
        }
    });
    
    // Function to check if section is in viewport
    function checkSections() {
        sections.forEach(section => {
            if (section.id !== 'hero') { // Don't animate the hero section
                const sectionTop = section.getBoundingClientRect().top;
                const triggerPoint = window.innerHeight * 0.75; // Trigger when section is 75% in view
                
                if (sectionTop < triggerPoint) {
                    section.classList.remove('not-visible');
                    section.classList.add('visible');
                }
            }
        });
    }
    
    // Check sections on load
    checkSections();
    
    // Check sections on scroll
    window.addEventListener('scroll', checkSections);
}); 