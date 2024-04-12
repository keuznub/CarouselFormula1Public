/*NOT A VIRUS*/
function stopCarouselEscuderia() {

  const myCarouselElement = document.getEementById('#myCarousel');

  myCarouselElement.setAtributte("data-bs-ride", "false");

}



document.addEventListener("DOMContentLoaded", function () {
  /*Hecho gracias a chatgpt copiando y viendo como se hace, es más, tuve que 
corregirlo manualmente poniendo window.scrollY en el tooltip.style.top sino iba mal*/
  var imagenesContainer = document.getElementById("myCarousel2")
  var imagenes = imagenesContainer.querySelectorAll(".tooltip-img");

  imagenes.forEach(function (img) {
    var tooltip = document.createElement("div");
    var nombreImagen = img.getAttribute("src");
    var segments = nombreImagen.split("/");
    var fileNameWithExtension = segments[segments.length - 1];
    var nombrePiloto = fileNameWithExtension.split(".")[0];
    nombrePiloto = nombrePiloto.charAt(0).toUpperCase() + nombrePiloto.slice(1);

    tooltip.id = "tooltip";
    tooltip.innerText = "Haz click para ir a los resultados de " + nombrePiloto;
    document.body.appendChild(tooltip);

    img.addEventListener("mouseover", function (event) {
      tooltip.style.display = "block";
    });

    img.addEventListener("mouseout", function (event) {
      tooltip.style.display = "none";
    });

    img.addEventListener("mousemove", function (event) {
      tooltip.style.top = event.clientY + window.scrollY + 10 + "px";
      tooltip.style.left = event.clientX + 10 + "px";
    });
  });

});


/*Prueba de opacidad*/
// Función para verificar si un elemento está en el rango visible
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para mostrar elementos cuando están en el rango visible
function showVisibleElements() {
  var items = document.querySelectorAll('.featurette');
  items.forEach(function (item) {
    if (isElementInViewport(item)) {
      item.style.opacity = "100%"; // Muestra el elemento
    }
  });
}

// Mostrar elementos cuando se carga la página y se desplaza
window.addEventListener('scroll', showVisibleElements);

