var registros = [];

function agregarRegistro(){

    // let username = document.getElementById("username").value;
    // registros.push(username);

    let username = document.getElementById("username").value ;
    // let correo = document.getElementById("email").value;
    // let contrasena = document.getElementById("contrasena").value;

    // Se crea el registro de un nuevo usuario como objeto
    // var registro = {username: username, correo: correo, contrasena: contrasena};

    // Registro se agrega al arreglo
    registros.push(username);
    // registros.push(correo);
    // registros.push(contrasena);

    // console.log("El registro es: "+registro.username+" y correo: "+registro.correo);
    // console.log(arregloRegistros);
    // listarRegistro(arregloRegistros);
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

    
let arreglo2 = [];
for (const correo of registros) {
    if (correo.correo.indexOf("hotmail.com") >= 0) {
        arreglo2.push(correo);
    }
}    
console.log(arreglo2);
return arreglo2;
    

}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.obtenerUsername = obtenerUsername;
module.exports.filtrarCorreo = filtrarCorreo;

