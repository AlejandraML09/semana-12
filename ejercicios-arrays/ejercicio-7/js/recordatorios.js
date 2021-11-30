/* Nos fijamos si hay una cookie con nombre recordatorios */
var cookie = getCookie("recordatorios")

/* En caso de que exista la cookie (por eso el if) ...*/
if (cookie) {
    /* Como la cookie está guardada como un string de elementos separados por coma (ej: "Planchar ropa, Comprar huevos por que faltan" 
    etc -> Y nosotros necesitamos un array, por eso no nos sirve), separamos el string
    en base a las comas con .split */
    var arrayDeCookie = cookie.split(",");
    /* Ahora que tenemos un array que sacamos de la cookie (arrayDeCookie) hacemos
    que recordatorios tenga el array que sacamos de la cookie. */
    var recordatorios = arrayDeCookie;
} else {
    /* En caso de que no haya cookies, la variable recordatorios queda con el array 
    default */
    var recordatorios = ["Lavar auto", "Planchar ropa", "Comprar huevos por que faltan", "Llevar los tuppers a destino", "Llenar las cubeteras de la heladera"]
}


var listElement = document.getElementsByClassName("section-activities__list")[0];

/* Creamos una función para agregar un recordatorio prioritario */
function agregarRecordatorioPrioritarioHtml(texto) {
    /* Creamos un elemento li (para las listas) */
    var elementoLi = document.createElement("li");
    /* Al elemento li le ponemos adentro el texto que nos hayan pasado por 
    parametro */
    elementoLi.innerHTML = texto;
    /* Acá le ponemos adentro la clase al elemento li */
    elementoLi.classList.add("section-activities__list__item");
    /* Acá con prepend agrgamos al principio de la lista el elemento li 
    que creamos (porque son prioritarios)*/
    listElement.prepend(elementoLi);
    /* Como hicimos una modificación en la lista, actualizamos la cookie */
    document.cookie = "recordatorios=" + recordatorios;
}

/* Esto es igual que lo anterior pero para una tarea NO prioritaria (por lo tanto 
    no tiene el prepend) */
function agregarRecordatorioHtml(texto) {
    var elementoLi = document.createElement("li");
    elementoLi.innerHTML = texto;
    elementoLi.classList.add("section-activities__list__item");
    listElement.appendChild(elementoLi);
    document.cookie = "recordatorios=" + recordatorios;
}

/* Este for sólo se corre al principio cuando se carga la página, y lo que hace es
poner los recordatorios que están en el array (recordatorios) en pantalla */
for (var recordatorio of recordatorios) {
    agregarRecordatorioHtml(recordatorio);
}

elementosClickleables = document.getElementsByClassName("section-activities__image-container--image")


/* Estás variables (Agregar Recordatorio y Recordatorio Prioritario) lo que hacen 
es modificar el array (recordatorios) con push o unshift. */
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

/* Estás variable (Quitar 1er Recordatorio) lo que hace es que
confirma si deseas borrarlo o no; en caso de borrar (se 
    borra el primer elemento del listElement que tenía como definido la clase 
    section-activities__list, es decir borra el PRIMER ELEMENTO LI) y luego se 
    actualiza la cookie */
var elementoQuitarPrimerRecordatorio = elementosClickleables[2];
elementoQuitarPrimerRecordatorio.addEventListener("click", function () {
    if (window.confirm("¿Deseas quitar el primer recordatorio de la lista?")) {
        recordatorios.shift();
        listElement.removeChild(listElement.childNodes[0]);
        document.cookie = "recordatorios=" + recordatorios;
    }
})

/* Está variable (Quitar último recordatorio) también tiene el confirm, y la diferencia
es que elimina el último elemento LI de la clase section-activities__list (con length -1) */
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
