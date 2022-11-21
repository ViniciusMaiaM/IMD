function adicionar_valor(inicial, adicional) {
    if (adicional <= 0) {
        throw new Error("Somente valores positivos devem ser adicionados ao valor inicial");
    }
    else {
        return inicial + adicional;
    }
}
try {
    console.log(adicionar_valor(1, 2));
}
catch (e) {
    console.log(e.message);
}
try {
    console.log(adicionar_valor(1, -2));
}
catch (e) {
    console.log(e.message);
}
