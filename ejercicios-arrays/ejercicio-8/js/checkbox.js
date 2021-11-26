var checkboxElement = document.getElementById("styles");


var cookie = getCookie("style")
if (cookie == "true") {
    var elPrimerLink = document.getElementsByTagName("link")[0];
    elPrimerLink.href = elPrimerLink.href.replace("estilos-1", "estilos-3");
}

checkboxElement.addEventListener("click", function () {
    var elPrimerLink = document.getElementsByTagName("link")[0];
    if (checkboxElement.checked) {
        elPrimerLink.href = elPrimerLink.href.replace("estilos-1", "estilos-3");
        document.cookie = "style=true";
    } else {
        elPrimerLink.href = elPrimerLink.href.replace("estilos-3", "estilos-1");
        document.cookie = "style=false";
    }
})

/* Esta función obtiene una cookie por nombre. Una cookie es como una variable que se guarda en la memoria del navegador. */
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
