function executarExercicio() {
                
    var n1 = obterValor("n1");
    var n2 = obterValor("n2");
    var n3 = obterValor("n3");

    var media = calcularMedia(n1,n2,n3);
    
    var r = media;
    document.getElementById('resultado').innerHTML = r;
}

function obterValor(campo) {
    
    var teste = document.getElementById(campo).value;

    if (teste === ''){
        throw new Error("A entrada " + teste + " não pode ser vazia");

    } else if (teste == undefined || teste == null) {
        throw new Error("Não foi possivel obter o valor da entrada: " + teste);
    }

    return Number(document.getElementById(campo).value);        

}

function calcularMedia(n1, n2, n3) {
    var media = (n1 + n2 + n3) / 3;
    var resultado = ' ';

    if (isNaN(media) || media == undefined || media == null){
        throw new Error("A média calculada não resultou em um valor válido");
    }

    verificarResultado(media);

    if (media >= 7) {
        resultado = "Aprovado com média " + media;
    
    } else if (media >= 3) {
        resultado = "Aluno em recuperação, pois a média foi " + media;
    
    } else {
        resultado = "Aluno reprovado, pois ficou com média " + media;
    }

    return resultado;
}

function verificarResultado(media){

    if (media < 0 || media > 10){
        throw new Error("A média " + media + " está fora do intervalo permitido");
    }

}
