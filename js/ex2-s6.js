function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var r = ' ';
    var soma = 0;
    for (i = a; i <= b; i++){
        soma += i;
        r = r + "Termo: " + i +"<br/>";
    }
    r = r + "A soma total é de: " +soma;
    document.getElementById('resultado').innerHTML = r;
}