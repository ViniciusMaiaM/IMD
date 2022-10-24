function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var r = (a+b)/2;
    r = r.toFixed(2);
    document.getElementById('resultado').innerHTML = "A média entre os números " + a +" e "
    + b + " é "+ r;
}