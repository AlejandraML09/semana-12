var listElement = document.getElementsByClassName("section-activities__list")[0];

var elementosRecordatorios = listElement.children
console.log(elementosRecordatorios);


/* Creamos una función para agregar un recordatorio prioritario */
function agregarRecordatorioPrioritarioHtml(texto) {
    /* Creamos un elemento li (para las listas) */
    var elementoLi = document.createElement("li");
    /* Al elemento li le ponemos adentro el texto que nos hayan pasado por parametro */
    elementoLi.innerHTML = texto;
    /* Acá le ponemos adentro la clase al elemento li */
    elementoLi.classList.add("section-activities__list__item");
    /* Acá con prepend agrgamos al principio de la lista el elemento li que creamos (porque son prioritarios)*/
    listElement.prepend(elementoLi);

}

/* Esto es igual que lo anterior pero para una tarea NO prioritaria (por lo tanto no tiene el prepend) */
function agregarRecordatorioHtml(texto) {
    var elementoLi = document.createElement("li");
    elementoLi.innerHTML = texto;
    elementoLi.classList.add("section-activities__list__item");
    listElement.appendChild(elementoLi);

}

var elementosClickleables = document.getElementsByClassName("section-activities__image-container__image")


/* Estás variables (Agregar Recordatorio y Recordatorio Prioritario) lo que hacen es modificar el array (recordatorios) con push o unshift. */
var elementoAgregarRecordatorio = elementosClickleables[0]
elementoAgregarRecordatorio.addEventListener("click", function () {
    recordatorioAgregar = prompt("Agregar Recordatorio");
    agregarRecordatorioHtml(recordatorioAgregar);
})

var elementoAgregarRecordatorioPrioritario = elementosClickleables[1];
elementoAgregarRecordatorioPrioritario.addEventListener("click", function () {
    recordatorioAgregarPrioritario = prompt("Agregar Recordatorio Prioritario");
    agregarRecordatorioPrioritarioHtml(recordatorioAgregarPrioritario);
})

/* Estás variable (Quitar 1er Recordatorio) lo que hace es que
confirma si deseas borrarlo o no; en caso de borrar (se 
    borra el primer elemento del listElement que tenía como definido la clase 
    section-activities__list, es decir borra el PRIMER ELEMENTO LI) y luego se 
    actualiza la cookie */
var elementoQuitarPrimerRecordatorio = elementosClickleables[2];
elementoQuitarPrimerRecordatorio.addEventListener("click", function () {
    if (window.confirm("¿Deseas quitar el primer recordatorio de la lista?")) {
        listElement.removeChild(listElement.children[0]);
    }
})

/* Está variable (Quitar último recordatorio) también tiene el confirm, y la diferencia
es que elimina el último elemento LI de la clase section-activities__list (con length -1) */
var elementoQuitarUltimoRecordatorio = elementosClickleables[3];
elementoQuitarUltimoRecordatorio.addEventListener("click", function () {
    if (window.confirm("¿Deseas quitar el último recordatorio de la lista?")) {
        listElement.removeChild(listElement.children[listElement.children.length - 1]);
    }

})





