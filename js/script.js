// navbar menu toggle 
document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('show');
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