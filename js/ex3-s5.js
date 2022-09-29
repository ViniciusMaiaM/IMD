function executarExercicio() {
    var data = new Date(document.getElementById("data").value);
    var nova_data = new Date();
    var conv = nova_data.getTime() - data.getTime();
    var idade = new Date(conv);
    var ano = Math.abs(idade.getUTCFullYear()- 1970);
    document.getElementById('resultado').innerHTML = ano;
}