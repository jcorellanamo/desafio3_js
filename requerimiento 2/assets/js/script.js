function pintar(event, color = 'green') {
    event.target.style.backgroundColor = color;
}

// Establecer el color inicial a verde
const ele = document.getElementById("ele1");
pintar({ target: ele });

// Agregar el evento para cambiar a amarillo al hacer clic
ele.addEventListener("click", function(event) {
    pintar(event, 'yellow');
});

