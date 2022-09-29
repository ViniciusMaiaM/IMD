function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var r = ' ';
    for(i = 1; i < a; i++){
        if ( a % i == 0){
            r = r + "Divisor: " + i +" | ";
        }
    }
    document.getElementById('resultado').innerHTML = r;
}