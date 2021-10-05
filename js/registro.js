let registros= []

function agregarRegistro(){

    var x = document.getElementById("form-registro");
    let username = x.elements[0].value ;
    let correo = x.elements[1].value;
    let contrasena = x.elements[2].value;

    //Se crea el registro de un nuevo usuario como objeto
    var registro = {username: username, correo:correo, contrasena:contrasena};

    //Registro se agrega al arreglo
    registros.push(registro);

    //console.log("El registro es: "+registro.username+" y correo: "+registro.correo);
    //console.log(arregloRegistros);
    //listarRegistro(registros);
}

function obtenerUsername(arreglo){
    let usuarios = [];
    for (const user of registros){
        if(user.username.match(/[0-9]/g)){

            usuarios.push(user);
        }
    }
    console.log(usuarios);
    return usuarios;         
}

    
function filtrarCorreo(arreglo){
    let arreglo2 = [];
    for (const correo of registros) {
        if (correo.correo.indexOf("hotmail.com") >= 0) {
            arreglo2.push(correo);
        }
    }    
    console.log(arreglo2);
    return arreglo2;        
}
        

/*function listarRegistro(arreglo){
    if(arreglo.length != null){
        for(let i=0; i<arreglo.length; i++){
            let registro = arreglo[i];
            console.log(arreglo[i] + "<br>");
        }
    }
}*/

module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.obtenerUsername = obtenerUsername;
module.exports.agregarRegistro = agregarRegistro;