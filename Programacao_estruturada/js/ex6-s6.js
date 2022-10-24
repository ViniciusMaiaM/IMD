function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var r = ' ';
    var soma_par = 0;
    var soma_imp = 0;

    for (i = a; i <= b; i++){
        if(i%2 == 0){
            soma_par += i;
        }
    }

    j = a;
    while (j <= b){
        if(j%2 != 0){
            soma_imp += j;
        }
        j++;
    }

    r = r + "Soma dos números pares: " +soma_par + "<br /> Soma dos números ímpares: " +soma_imp;
    document.getElementById('resultado').innerHTML = r;
}