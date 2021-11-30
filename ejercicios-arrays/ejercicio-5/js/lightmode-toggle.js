var button1 = document.getElementsByClassName("toggle-button")[0];
var button2 = document.getElementsByClassName("toggle-button")[1];
button1.addEventListener("click", togglemode);
button2.addEventListener("click", togglemode);

var mode = true;


function togglemode() {
    var theme = document.getElementById("theme");
    if (mode) {
        theme.href = theme.href.replace("dark", "light");
        button1.style.justifyContent = "flex-end"
        button2.style.justifyContent = "flex-end"
    } else {
        theme.href = theme.href.replace("light", "dark");
        button1.style.justifyContent = "flex-start"
        button2.style.justifyContent = "flex-start"
    }
    mode = !mode;
}

