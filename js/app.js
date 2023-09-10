document.addEventListener("DOMContentLoaded", function () {
    const inputBuscador = document.getElementById("buscador");
    const seccionesProductos = document.querySelectorAll(".p-1"); // Selecciona todas las secciones de productos

    // Almacenar las secciones de productos originales
    const seccionesOriginales = Array.from(seccionesProductos);

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío del formulario

        const filtro = inputBuscador.value.toLowerCase();

        seccionesProductos.forEach(function (seccion) {
            const titulo = seccion.querySelector(".card-title");
            const precio = seccion.querySelector(".card-text");

            const textoTitulo = titulo.textContent.toLowerCase();
            const textoPrecio = precio.textContent.toLowerCase();

            if (textoTitulo.includes(filtro) || textoPrecio.includes(filtro)) {
                seccion.style.display = "block";
            } else {
                seccion.style.display = "none";
            }
        });
    });

    // Función para restaurar las secciones originales
    function restaurarSeccionesOriginales() {
        seccionesOriginales.forEach(function (seccion) {
            seccion.style.display = "block";
        });
    }

    // Restaurar secciones cuando el campo de búsqueda está vacío
    inputBuscador.addEventListener("input", function () {
        if (inputBuscador.value === "") {
            restaurarSeccionesOriginales();
        }
    });
});