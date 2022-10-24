function executarExercicio() {
    var a = Number(document.getElementById('valor').value);
    var r = '';
    
    if(a == 0){
        r = "O valor é zero";
    }

    else if(a > 0){
        r = "O valor é posítivo";
    }

    else{
        r = "O valor é negativo";
    }
    
    document.getElementById('resultado').innerHTML = r;
}