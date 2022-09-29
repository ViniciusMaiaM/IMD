function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var r = ' ';
    var i = a;
    var soma = 0;
    while (i <= b){
        soma += i;
        r = r + "Termo: " + i +"<br/>";
        i++;
    }
    r = r + "A soma total é de: " +soma;
    document.getElementById('resultado').innerHTML = r;
}