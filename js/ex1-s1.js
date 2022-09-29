function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    var r = -a - ((b + c * a * b) / (c * a));
    document.getElementById('resultado').innerHTML = r;
}