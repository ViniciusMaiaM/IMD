function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var r = ' ';
    switch(a){
        case 11:
            r = r+"São Paulo";
            break;
        case 21:
            r = r+"Rio de Janeiro";
            break;

        case 27:
            r = r+"Espírito Santo";
            break;
        
        case 31:
            r = r+"Minas Gerais";
            break;

        case 41:
            r = r+"Paraná";
            break;

        case 47:
            r = r+"Santa Catarina";
            break;
        
        case 51:
            r = r+"Rio Grande do Sul";
            break;
            
        case 61:
            r = r+"Distrito Federal";
            break;

        case 62:
            r = r+"Goiás";
            break;

        case 63:
            r = r+"Tocantins";
            break;
        
        case 65:
            r = r+"Mato Grosso do Sul";
            break;

        case 68:
            r = r+"Acré";
            break;

        case 69:
            r = r+"Rondônia";
            break;
        
        case 71:
            r = r+"Bahia";
            break;

        case 79:
            r = r+"Sergipe";
            break;

        case 81:
            r = r+"Pernambuco";
            break;

        case 82:
            r = r+"Alagoas";
            break;
        
        case 83:
            r = r+"Paraíba";
            break;

        case 84:
            r = r+"Rio Grande do Norte";
            break;

        case 85:
            r = r+"Ceará";
            break;
        
        case 86:
            r = r+"Piauí";
            break;
        
        case 91:
            r = r+"Pará";
            break;
        
        case 92:
            r = r+"Amazonas";
            break;

        case 95:
            r = r+"Roraima";
            break;

        case 96:
            r = r+"Amapá";
            break;
        
        case 98:
            r = r+"Maranhão";
            break;
        
        default:
            r = r+"DDD não encontrado";
            break;
    }

    document.getElementById('resultado').innerHTML = r;
}