const ENVIAR = document.getElementById ("button");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const txtNombre = document.getElementById("Nombre");
const txtCorreoElectronico = document.getElementById("Correo-electronico");
const txtTelefono = document.getElementById("Telefono");
const txtComentarios = document.getElementById("Comentarios");


let isValid = true;


function validarTelefono(){
    if(txtTelefono.value.length==9){
        return false;
    }//?length==9

    if (isNaN(txtTelefono.value)){
        return false;
    }//*isNaN Prueba que sea un numero
    
    if(Number(txtTelefono.value)<=0){
        return false;
    }//? <=0 Prueba que el valor elimina el valor que es menor o igual a 0

    return true;
}//* validarTelefono


if (! validarTelefono()){
    txtTelefono.style.border= "solid red medium";
    alertValidacionesTexto.innerHTML+="El <strong>Teléfono</strong> no es correcto.<br/>";
    alertValidaciones.style.display="block";
    isValid = false;
}//* validarTelefono