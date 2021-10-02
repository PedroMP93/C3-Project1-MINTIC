const arregloRegistros = [];

function agregarRegistro(){

    var x = document.getElementById("form-registro");
    let username = x.elements[0].value ;
    let correo = x.elements[1].value;
    let contrasena = x.elements[2].value;

    //Se crea el registro de un nuevo usuario como objeto
    var registro = {username: username, correo:correo, contrasena:contrasena};

    //Registro se agrega al arreglo
    arregloRegistros.push(registro);

    console.log("El registro es: "+registro.username+" y correo: "+registro.correo);
    //console.log(arregloRegistros);
    listarRegistro(arregloRegistros);
}

function obtenerUsername(arreglo){
    if (/^\w+([\.-]?)\w+/.test(arreglo)){
        console.log("Positivo");
        return true;
    }
    else{
        console.log("Falló");
    }

}
 
function filtrarCorreo(arreglo){

}

function listarRegistro(arreglo){
    if(arreglo.length != null){
        for(let i=0; i<arreglo.length; i++){
            let registro = arreglo[i];
            console.log(arreglo[i] + "<br>");
        }
    }
}

module.exports.agregarRegistro = agregarRegistro;
module.exports.obtenerUsername = obtenerUsername;