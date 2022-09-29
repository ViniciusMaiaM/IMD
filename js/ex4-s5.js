function executarExercicio() {
    var data = new Date(document.getElementById("data").value);
    data = data.toString();
    hora = data.slice(0,4)
    document.getElementById('resultado').innerHTML = hora;
}