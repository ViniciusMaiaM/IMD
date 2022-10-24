var x1; //const alterada para var
var x2; //const alterada para var
var a; //const alterada para var
var b; //const alterada para var
var c; //const alterada para var
function bhaskara() {
    a = ler_entrada("a");
    b = ler_entrada("b");
    c = ler_entrada("c");
    x1 = -b + raizQuadrada(delta(a,b,c));
    x2 = -b - raizQuadrada(delta(a,b,c));
    escrever_saida("saida","x1 = "+x1+" x2 = "+x2);
}
function ler_entrada(campo) {
    return Number(document.getElementById(campo).value); //utilização do parâmetro da func
}
function escrever_saida(campo, valor) {
    document.getElementById(campo).innerHTML = valor;
}
function quadrado(x) {
    return x**x; //correção da operação da func
}
function delta(a,b,c){
    return quadrado(b)-(4*a*c);
}
function raizQuadrada(x){
    return Math.sqrt(x);
}