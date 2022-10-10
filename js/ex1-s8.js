function executarExercicio() {
    // implemente a partir daqui
    var array = [];
    // Exemplo de comando de entrada
    var a = Number(prompt("Informe um número:"));
    var r = rodar(a,array); // atribua o resultado dos seus algoritmos a r
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