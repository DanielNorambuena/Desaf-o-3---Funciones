var colorSeleccionado = "";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorSeleccionado = "purple";
    } else if (event.key === 's') {
        colorSeleccionado = "red";
    } else if (event.key === 'd') {
        colorSeleccionado = "orange";
    } else if (event.key === 'f') {
        colorSeleccionado = "yellow";
    }
})

const c1 = document.getElementById("caja1")
const c2 = document.getElementById("caja2")
const c3 = document.getElementById("caja3")
const c4 = document.getElementById("caja4")

c1.addEventListener("click", () => c1.style.backgroundColor = colorSeleccionado)
c2.addEventListener("click", () => c2.style.backgroundColor = colorSeleccionado)
c3.addEventListener("click", () => c3.style.backgroundColor = colorSeleccionado)
c4.addEventListener("click", () => c4.style.backgroundColor = colorSeleccionado)
