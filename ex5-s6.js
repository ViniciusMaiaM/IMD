function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var r = ' ';
    var soma = 0;
    do{
        soma += i;
        r = r + "Termo: " + i +"<br/>";
        i++;
    } while(i<=b);
    r = r + "A soma total é de: " +soma;
    document.getElementById('resultado').innerHTML = r;
}