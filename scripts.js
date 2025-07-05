        function showTab(tabName) {
            // Hide all tab contents
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.remove('active'));

            // Remove active class from all tabs
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));

            // Show selected tab content
            document.getElementById(tabName).classList.add('active');

            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        function playVideo() {
            alert('This would open your YouTube channel or specific video. Replace this with actual YouTube embed or redirect.');
        }

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

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(5, 5, 5, 0)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0)';
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe all service cards and team members
        document.querySelectorAll('.service-card, .team-member, .contact-info').forEach(el => {
            observer.observe(el);
        });

        // Filter functionality for team members and services
        document.querySelectorAll('.sub-nav a').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // Remove active class from all links
                document.querySelectorAll('.sub-nav a').forEach(el => el.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');
                const members = document.querySelectorAll('.team-filter');

                members.forEach(member => {
                    const category = member.getAttribute('data-category');
                    if (filter === 'all' || filter === category) {
                        member.style.display = 'block';
                    } else {
                        member.style.display = 'none';
                    }
                });
            });
        });

// Filter functionality for services
document.querySelectorAll('.sub-nav2 a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Remove active class from all links
    document.querySelectorAll('.sub-nav2 a').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
    
    const filter = this.getAttribute('data-filter');
    const members = document.querySelectorAll('.service-filter');
    
    members.forEach(member => {
      let categories = member.getAttribute('data-category');
      
      try {
        categories = JSON.parse(categories);
      } catch (e) {
        categories = [categories];
      }
      
      if (filter === 'all' || categories.includes(filter)) {
        member.style.display = 'block';
      } else {
        member.style.display = 'none';
      }
    });
  });
});


const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------