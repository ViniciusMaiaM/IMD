function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    var d = Number(document.getElementById('d').value);
    var menor = Math.min(a,b,c,d); 
    var maior = Math.max(a,b,c,d);
    document.getElementById('resultado').innerHTML = "O maior valor é: " + maior + "</br>" + "O menor valor é: " + menor;
}