// Función que permite dropear, se inserta en el HTML como función en 'ondragover', se necesita hacer con preventDefault() para evitar el comportamiento por defecto.
function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// let products = document.querySelectorAll('.estanteria-fila-producto');
//   products.forEach(function(product) {
//     product.addEventListener('dragstart', allowDrop);
//     product.addEventListener('dragend', drop);
// });
