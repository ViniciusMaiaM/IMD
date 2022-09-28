function executarExercicio() {
    var data = new Date();
    var texto = data.getUTCHours();
    var min = data.getUTCMinutes();
    var sec = data.getUTCSeconds();
    document.getElementById('resultado').innerHTML = texto+':'+min+':'+sec;
}