// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            // Save preference to localStorage
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('darkTheme', isDark);
        });

        // Check for saved theme preference
        if (localStorage.getItem('darkTheme') === 'true') {
            document.body.classList.add('dark-theme');
        }
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Please fill out all fields.');
            } else {
                const responseDiv = document.createElement('div');
                responseDiv.className = 'form-response';
                responseDiv.textContent = `Thanks, ${name}. We'll get back to you soon!`;
                contactForm.parentNode.insertBefore(responseDiv, contactForm.nextSibling);
                contactForm.reset();
                
                // Remove response after 5 seconds
                setTimeout(() => {
                    responseDiv.remove();
                }, 5000);
            }
        });
    }

    // Fetch API Integration (Team Members)
    const loadUsersBtn = document.getElementById('loadUsersBtn');
    if (loadUsersBtn) {
        loadUsersBtn.addEventListener('click', () => {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';
            
            // Your custom names array
            const teamMembers = [
                "George Mazimba",
                "Blessing Kabwe",
                "Tom Zipani Sinkala",
                "Melvin Simpasa",
                "Lottie Mwitaba",
                "Mwiza Mfune"
            ];
            
            teamMembers.forEach(member => {
                const li = document.createElement('li');
                li.textContent = member;
                userList.appendChild(li);
            });
        });
    }

    // FAQ Component
    document.querySelectorAll('.question').forEach((q) => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            answer.classList.toggle('visible');
            
            // Toggle arrow icon
            const icon = q.querySelector('.toggle-icon') || document.createElement('span');
            if (!icon.classList.contains('toggle-icon')) {
                icon.className = 'toggle-icon';
                icon.textContent = '▼';
                q.prepend(icon);
            }
            
            icon.textContent = answer.classList.contains('visible') ? '▲' : '▼';
        });
    });

    // Back to Top Button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.textContent = '↑';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});