document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project-card");
    const projectContainer = document.querySelector(".projects-container");
    let currentProjectIndex = 0;

    function updateProjectDisplay(index) {
        projectContainer.style.transform = `translateX(-${index * 100}%)`;
        projects.forEach((project, i) => {
            project.classList.toggle("active", i === index);
        });
    }

    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex === 0) ? projects.length - 1 : currentProjectIndex - 1;
        updateProjectDisplay(currentProjectIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex === projects.length - 1) ? 0 : currentProjectIndex + 1;
        updateProjectDisplay(currentProjectIndex);
    });

    updateProjectDisplay(currentProjectIndex);

});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links ul");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links ul li a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("active");
        });
    });
});
