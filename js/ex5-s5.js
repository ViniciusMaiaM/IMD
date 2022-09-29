function executarExercicio() {
    var nome = String (document.getElementById('nome').value);
    const texto = `Ola ${nome}, seja bem-vindo(a) ao sistema aulas do \
    Instituto Metrópole Digital.`
    document.getElementById('resultado').innerHTML = texto;
}