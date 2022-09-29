function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    var r = ((a*4)+(b*5)+(c*6))/15;
    r = Math.ceil(r);
    document.getElementById('resultado').innerHTML = "A média ponderada (4,5,6) entre os números "+a+", "+b+" e "+c+" é "+r;
}