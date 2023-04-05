function mostrarAlerta() {
    alert("Hizo Clic");
}
function hacerClic() {
    var elemento=document.getElementsByTagName('p')[0];
    elemento.addEventListener('click', mostrarAlerta, false);
}
window.addEventListener('load', hacerClic, false);