// Cambiar secciones al hacer clic en el navbar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      // Remover la clase 'active' de todos los enlaces y secciones
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
      // Agregar 'active' al enlace y sección seleccionados
      this.classList.add('active');
      document.querySelector(this.getAttribute('href')).classList.add('active');
    });
  });