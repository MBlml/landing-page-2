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

$(document).ready(function() {
  $("#miFormulario").submit(function(e) {
      e.preventDefault(); // Evita la recarga de la página
      var nombre = $("#nombre").val();
      var email = $("#email").val();

      $.ajax({
          url: "procesar.php", // Archivo PHP para procesar el formulario
          type: "POST",
          data: { nombre: nombre, email: email },
          success: function(response) {
              // Muestra la respuesta en un alert
              alert("Información enviada:\n" + response);
          },
          error: function() {
              alert("Hubo un error al enviar el formulario.");
          }
      });
  });
});


