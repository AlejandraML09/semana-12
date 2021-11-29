var cookie = getCookie("recordatorios")

if (cookie) {
    var arrayDeCookie = cookie.split(",");
    recordatorios = arrayDeCookie;
} else {
    var recordatorios = ["Lavar auto", "Planchar ropa", "Comprar huevos por que faltan", "Llevar los tuppers a destino", "Llenar las cubeteras de la heladera"]
}

var listElement = document.getElementsByClassName("section-activities__list")[0];

function agregarRecordatorioPrioritarioHtml(texto) {
    var elementoLi = document.createElement("li");
    elementoLi.innerHTML = texto;
    elementoLi.classList.add("section-activities__list__item");
    listElement.prepend(elementoLi);
    document.cookie = "recordatorios=" + recordatorios;
}

function agregarRecordatorioHtml(texto) {
    var elementoLi = document.createElement("li");
    elementoLi.innerHTML = texto;
    elementoLi.classList.add("section-activities__list__item");
    listElement.appendChild(elementoLi);
    document.cookie = "recordatorios=" + recordatorios;
}

for (var recordatorio of recordatorios) {
    agregarRecordatorioHtml(recordatorio);
}

elementosClickleables = document.getElementsByClassName("section-activities__image-container__image")

var elementoAgregarRecordatorio = elementosClickleables[0]
elementoAgregarRecordatorio.addEventListener("click", function () {
    recordatorioAgregar = prompt("Agregar Recordatorio");
    recordatorios.push(recordatorioAgregar);
    agregarRecordatorioHtml(recordatorioAgregar);
})

var elementoAgregarRecordatorioPrioritario = elementosClickleables[1];
elementoAgregarRecordatorioPrioritario.addEventListener("click", function () {
    recordatorioAgregarPrioritario = prompt("Agregar Recordatorio Prioritario");
    recordatorios.unshift(recordatorioAgregarPrioritario);
    agregarRecordatorioPrioritarioHtml(recordatorioAgregarPrioritario);
})



var elementoQuitarPrimerRecordatorio = elementosClickleables[2];
elementoQuitarPrimerRecordatorio.addEventListener("click", function () {
    if (window.confirm("¿Deseas quitar el primer recordatorio de la lista?")) {
        recordatorios.shift();
        listElement.removeChild(listElement.childNodes[0]);
        document.cookie = "recordatorios=" + recordatorios;
    }
})


var elementoQuitarUltimoRecordatorio = elementosClickleables[3];
elementoQuitarUltimoRecordatorio.addEventListener("click", function () {
    if (window.confirm("¿Deseas quitar el último recordatorio de la lista?")) {
        recordatorios.pop();
        listElement.removeChild(listElement.childNodes[listElement.childNodes.length - 1]);
        document.cookie = "recordatorios=" + recordatorios;
    }

})




/* Esta función obtiene una cookie por nombre. Una cookie es como una variable que se guarda en la memoria del navegador. */
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
