/*let registros= [
    {"username":"luisita231", "correo":"luisita231@gmail.com", "contrasena":"123456"},
    {"username":"pepito_perez", "correo":"pperez34@hotmail.com", "contrasena":"PepitoRuizPerez1234"},
    {"username":"JuanDios", "correo":"xxxxx@gmail.com", "contrasena":"123Juan456Dios"},
    {"username":"Ana.jimenez", "correo":"ana.jimenez@yaoo.com", "contrasena":"Aj12345TT"}
];*/
let registros = [];

function login(){
    var formLogin = document.getElementById("form-login");
    let username = formLogin.elements[0].value.toLowerCase ;
    let contrasena = formLogin.elements[1].value;
    let captcha = formLogin.elements[2].value;

    print("Username: "+username);

    let respuesta;

    
    for(const user of registros){
        if(user.correo.toLowerCase == username && user.contrasena == contrasena && validarCAPTCHA(captcha)){
            print("Su correo y contraseña son correctas, al igual que el captcha");
            respuesta = true;
        }else{
            respuesta = false;
        }
    }
    
    return respuesta;    
}

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

function validarCAPTCHA(valor){
    var correcto = "Budapest";

    let respuesta = valor.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    print(respuesta);
    if(correcto.toLowerCase === respuesta.toLowerCase){
        return true;
    }else {
        return false;
    }
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;
