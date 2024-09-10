const btnEnviar = document.getElementById ("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const confirmValidaciones = document.getElementById("confirmValidaciones")
const confirmValidacionesTexto = document.getElementById("confirmValidacionesTexto")
const txtNombre = document.getElementById("Nombre");
const txtEmail = document.getElementById("Email");
const txtTelefono = document.getElementById("Telefono");
const txtComentarios = document.getElementById("Comentarios");




let isValid = true;


function validarTelefono(){
    if(txtTelefono.value.length<9){
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

function isValidEmail() {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    return regex.test(txtEmail.value);
  }

// boton enviar

 btnEnviar.addEventListener("click",function(event){
    event.preventDefault();

        txtNombre.style.border="";
        txtTelefono.style.border="";
        txtEmail.style.border="";
        alertValidacionesTexto.innerHTML=""
        alertValidaciones.style.display="none"
        confirmValidacionesTexto.innerHTML=""
        confirmValidaciones.style.display="none"
        isValid= true


    if (!validarTelefono()){
        txtTelefono.style.border= "solid red medium";
        alertValidacionesTexto.innerHTML+="El <strong>Teléfono</strong> no es correcto.<br/>";
        alertValidaciones.style.display="block";
        isValid = false;
    }//* validarTelefono

    if (!isValidEmail()){
        txtEmail.style.border= "solid red medium";
        alertValidacionesTexto.innerHTML+=" El <strong>Correo Electronico</strong> no es valido.<br/>";
        alertValidaciones.style.display="block";
        isValid = false;
    }//* validaremail
   

        if (txtNombre.value.length<3) {
            txtNombre.style.border= "solid red medium";
        alertValidacionesTexto.innerHTML+=" El <strong>Nombre</strong> no es Valido.<br/>";
        alertValidaciones.style.display="block";
        isValid = false;
             
        
        }// nombreIsValid

        if (txtComentarios.value.length<=0) {
            txtComentarios.style.border= "solid red medium";
        alertValidacionesTexto.innerHTML+=" Por favor,escriba su <strong>mensaje</strong>.<br/>";
        alertValidaciones.style.display="block";
        isValid = false;
             
        
        }//isMensajevalid


        if(isValid){
            confirmValidaciones.innerHTML+=" El <strong>Registro</strong> fue exitoso, favor de revisar su correo electronico.<br/>";
        confirmValidaciones.style.display="block";

        
        } // is valid

 })

 




