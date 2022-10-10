function executarExercicio() {
    // implemente a partir daqui
    var array = [];
    // Exemplo de comando de entrada
    var r = rodar(array); // atribua o resultado dos seus algoritmos a r
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