// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skill-card, .project-card, .contact-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Initialize elements for animation
        window.addEventListener('load', () => {
            const elements = document.querySelectorAll('.skill-card, .project-card, .contact-card');
            
            elements.forEach(element => {
                element.style.transition = 'all 0.5s ease';
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
            });
            
            animateOnScroll();
        });

        // Run animation check on scroll
        window.addEventListener('scroll', animateOnScroll);