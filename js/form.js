function checkUsername(valor){
    if(valor !=""){
        if ((/^\w+([\.-]?)\w+/).test(valor)){
            if(valor.lenght<30){
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function checkCorreo(valor){
    if (valor!=""){
        if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(valor)){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function checkContrasena(valor){

}

function checkConfirmContrasena(valor1, valor2){
    if(valor1!="" && valor2!=""){
        if ((/^(?=.\d)(?=.[a-zñ]).[A-ZÑ]/.test(valor1)) && (/^(?=.\d)(?=.[a-zñ]).[A-ZÑ]/.test(valor2))){
            if ((valor1.length >=8) && (valor2.length>=8)) {
                if(valor1==valor2){
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
               return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

module.exports.checkUsername = checkUsername;
module.exports.checkCorreo = checkCorreo;
module.exports.checkConfirmContrasena = checkConfirmContrasena;