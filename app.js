// Typewriter effect
        const text = "Tu Mejor Versión";
        const typewriterElement = document.getElementById('typewriterText');
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typewriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            } else {
                setTimeout(() => {
                    typewriterElement.innerHTML = '';
                    i = 0;
                    typeWriter();
                }, 3000);
            }
        }

        // Start typewriter effect when page loads
        window.addEventListener('load', () => {
            setTimeout(typeWriter, 1000);
        });

        // Create floating dots
        function createFloatingDots() {
            const dotsContainer = document.getElementById('floatingDots');
            const numberOfDots = 30;

            for (let i = 0; i < numberOfDots; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                
                // Random position
                dot.style.left = Math.random() * 100 + '%';
                dot.style.top = Math.random() * 100 + '%';
                
                // Random animation delay
                dot.style.animationDelay = Math.random() * 6 + 's';
                
                // Random animation duration
                dot.style.animationDuration = (Math.random() * 4 + 4) + 's';
                
                dotsContainer.appendChild(dot);
            }
        }

        // Initialize floating dots
        createFloatingDots();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(44, 95, 93, 0.98)';
            } else {
                navbar.style.background = 'rgba(44, 95, 93, 0.95)';
            }
        });
        // Add click effect to inscribirse buttons
        document.querySelectorAll('.btn-inscribirse').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();

                // Add animation effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);

                // Here you can add your inscription logic
                alert('¡Gracias por tu interés! En breve nos pondremos en contacto contigo.');
            });
        });
