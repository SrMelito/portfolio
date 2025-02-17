document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio cargado correctamente");

    // Añadir un botón para subir al principio de la página
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.textContent = "↑";
    scrollToTopButton.style.position = "fixed";
    scrollToTopButton.style.bottom = "20px";
    scrollToTopButton.style.right = "20px";
    scrollToTopButton.style.padding = "10px";
    scrollToTopButton.style.backgroundColor = "#222";
    scrollToTopButton.style.color = "white";
    scrollToTopButton.style.border = "none";
    scrollToTopButton.style.borderRadius = "50%";
    scrollToTopButton.style.cursor = "pointer";
    scrollToTopButton.style.display = "none";

    document.body.appendChild(scrollToTopButton);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Animación al cargar las secciones
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});