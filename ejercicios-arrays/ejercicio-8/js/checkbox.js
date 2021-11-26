/* Variable donde buscamos en el documento el id "styles" que es lo que tiene el checkbox. */
var checkboxElement = document.getElementById("styles");

/* Se le agrega un EventListener al checkbox de modo que cuando se clickea se cambie el css según el checkbox */
checkboxElement.addEventListener("click", function () {
    /* Se hace una variable donde se obtiene el link dónde se encuentra el css */
    var elPrimerLink = document.getElementsByTagName("link")[0];
    /* Según el checkbox... */
    if (checkboxElement.checked) {
        /* Acá reemplazo el href de estilos-1 a estilos-3 según si el checkbox */
        elPrimerLink.href = elPrimerLink.href.replace("estilos-1", "estilos-3");
        /* Acá se guarda una cookie para usar más adelante en caso de que el usuario recargue o cierre la página. Lo conectamos con la variable de abajo */
        document.cookie = "style=true";
    }
    /* Acá se repite lo de reemplazar pero al revés */
    else {
        elPrimerLink.href = elPrimerLink.href.replace("estilos-3", "estilos-1");
        document.cookie = "style=false";
    }
})

/* Obtengo la cookie style */
var cookie = getCookie("style")
if (cookie == "true") {
    var elPrimerLink = document.getElementsByTagName("link")[0];
    elPrimerLink.href = elPrimerLink.href.replace("estilos-1", "estilos-3");
}


/* Esta función obtiene una cookie por nombre. Una cookie es como una variable que se guarda en la memoria del navegador. */
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
