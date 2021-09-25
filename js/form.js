function checkUsername(valor){
    if(valor !=""){

        if ((/^\w+([\.-]?)\w+/).test(valor)){
            if(valor.lenght<30){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    
        }
    else{
        return false;
    }

}

function checkCorreo(valor){

}

function checkContrasena(valor){

}

function checkConfirmContrasena(valor1, valor2){
    
}

module.exports.checkUsername=checkUsername