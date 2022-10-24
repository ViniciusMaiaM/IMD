function executarExercicio() {
    var x = Number(document.getElementById('x').value)
    var y = Number(document.getElementById('y').value)
    var z = Number(document.getElementById('z').value)
    var w = Number(document.getElementById('w').value)
    var c = (((((x + y) / z) + w) / z) + w) / x + y * y - w 
    document.getElementById('resultado').innerHTML = c
}