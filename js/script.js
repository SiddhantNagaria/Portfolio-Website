// to show if js is working 
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded!');
    
    // Basic setup
    const body = document.body;
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    
    // Add any default event listeners or initializations here
    window.addEventListener('load', function() {
        console.log('Window loaded');
    });
});



// navbar menu toggle 
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-item");
    const overlay = document.createElement("div");

    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);

    // Toggle menu open/close
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        overlay.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("show");
            overlay.classList.remove("active");
        });
    });

    // Close menu when clicking outside the menu
    overlay.addEventListener("click", function () {
        navLinks.classList.remove("show");
        overlay.classList.remove("active");
    });

    // Shrinking header on scroll
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});



//scroll effect for project section
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0.7) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.7 }
    );

    projectCards.forEach((card) => {
        observer.observe(card);
    });
});


//project type functionality
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const viewMoreBtn = document.getElementById("view-more");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");
            const category = this.getAttribute("data-category");

            projectCards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // View More functionality
    let projectsLoaded = 3; // Initial number of projects
    viewMoreBtn.addEventListener("click", function() {
        const hiddenProjects = document.querySelectorAll(".project-card[style='display: none;']");
        let count = 0;
        
        hiddenProjects.forEach(project => {
            if (count < 3) { // Load 3 projects at a time
                project.style.display = "block";
                count++;
            }
        });
        
        if (hiddenProjects.length <= 3) {
            viewMoreBtn.style.display = "none"; // Hide button if no more projects left
        }
    });
});

//scroll effect for contact form 
//contact form functionality

document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.getElementById("contact");
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    // Show form on scroll
    function handleScroll() {
        const sectionTop = contactSection.getBoundingClientRect().top;
        const sectionHeight = contactSection.offsetHeight;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - (sectionHeight * 0.4)) {
            contactForm.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Form Validation
    function validateInput(input, errorMessage) {
        const errorElement = input.nextElementSibling;
        if (input.value.trim() === "") {
            errorElement.textContent = errorMessage;
            input.style.borderColor = "red";
            return false;
        } else {
            errorElement.textContent = "";
            input.style.borderColor = "#ccc";
            return true;
        }
    }

    function validateEmail(input) {
        const errorElement = input.nextElementSibling;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            errorElement.textContent = "Enter a valid email!";
            input.style.borderColor = "red";
            return false;
        } else {
            errorElement.textContent = "";
            input.style.borderColor = "#ccc";
            return true;
        }
    }

    // Form Submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const isNameValid = validateInput(nameInput, "Name is required!");
        const isEmailValid = validateEmail(emailInput);
        const isMessageValid = validateInput(messageInput, "Message cannot be empty!");

        if (isNameValid && isEmailValid && isMessageValid) {
            formStatus.textContent = "Message sent successfully!";
            formStatus.style.color = "green";
            formStatus.style.opacity = "1";

            // Clear the form after submission
            contactForm.reset();

            // Fade out success message after 3 seconds
            setTimeout(() => {
                let fadeEffect = setInterval(() => {
                    if (formStatus.style.opacity > "0") {
                        formStatus.style.opacity -= "0.1";
                    } else {
                        clearInterval(fadeEffect);
                        formStatus.textContent = "";
                        formStatus.style.opacity = "1"; // Reset opacity for next time
                    }
                }, 100);
            }, 3000);
        } else {
            formStatus.textContent = "Please fix the errors above.";
            formStatus.style.color = "red";
        }
    });
});
