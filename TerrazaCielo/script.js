window.addEventListener("scroll", function () {
  let header = document.getElementById("main-header");
  let scrollTop = document.documentElement.scrollTop;

  // Si se ha hecho scroll más de 50 píxeles, cambia el fondo
  if (scrollTop > 50) {
    header.style.backgroundColor = "white"; // Cambia a un color oscuro (puedes modificarlo)
    header.style.transition = "background-color 0.3s"; // Transición suave
  } else {
    header.style.backgroundColor = "transparent"; // Vuelve al color transparente o original
  }
});

// Cerrar el menú de navegación cuando se selecciona una opción
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    let navbarToggler = document.querySelector('.navbar-toggler');
    let navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Simula un clic en el botón de hamburguesa para colapsar el menú
    }
  });
});