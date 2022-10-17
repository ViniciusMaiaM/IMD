function executarExercicio() {
    var array = [];
    var a = Number(prompt("Informe um número:"));
    var r = rodar(a,array);
    document.getElementById('resultado').innerHTML = r;
}

function rodar(a,array){
        var retorna;
        if (array.length != a){
            var x = Number(prompt("Informe o número para array:"));
            array.push(x);
            retorna = rodar(a,array);
        }
        else{
            retorna = "[" + array + "]";
        }
        
        return retorna;
}