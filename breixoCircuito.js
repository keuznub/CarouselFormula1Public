function buscarCircuito(event) {
    event.preventDefault()
    var textoBuscar = document.getElementById("searchid").value.toLowerCase();
    var secciones = document.getElementsByTagName("section");
    console.log("Le diste a buscar. " + " textoBuscar: " + textoBuscar + " secciones: " + secciones)
    for (var i = 0; i < secciones.length; i++) {
        console.log("Bucle n " + i);
        var idSeccion = secciones[i].getAttribute('id').toLowerCase();
        console.log(idSeccion);
        if (idSeccion.includes(textoBuscar)) {
            console.log("Entró");
            secciones[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            break; // Detenemos el bucle una vez que encontramos la primera coincidencia
        }
    }
}



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