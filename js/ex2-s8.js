function executarExercicio() {
    var array = [];
    var r = rodar(array); 
    document.getElementById('resultado').innerHTML = r;
}

    function rodar(array){
        var retorna;
        var x = Number(prompt("Informe o número para array:"));
        if (x != 0){
            array.push(x);
            retorna = rodar(array);
        }
        else{
            retorna = "[" + array + "]";
        }
        
        return retorna;
    }