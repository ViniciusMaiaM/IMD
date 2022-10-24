function executarExercicio() {
    var data = new Date().toString();
    dia = data.slice(8,10);
    mes = data.slice(4,7);
    ano = data.slice(11,16);
    hora = data.slice(16,18);
    minuto = data.slice(19,21);
    document.getElementById('resultado').innerHTML = "Data: " + dia + " de " + mes + " de \
    " + ano + "<br>Hora: " + hora + "h"+minuto;
}