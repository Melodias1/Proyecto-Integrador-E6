const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const confirmValidaciones = document.getElementById("confirmValidaciones");
const confirmValidacionesTexto = document.getElementById("confirmValidacionesTexto");
const txtNombre = document.getElementById("Nombre");
const txtEmail = document.getElementById("Email");
const txtTelefono = document.getElementById("Telefono");
const txtComentarios = document.getElementById("Comentarios");

const nombreError = document.getElementById("nombreError");
const correoError = document.getElementById("correoError");
const telefonoError = document.getElementById("telefonoError");
const comentariosError = document.getElementById("comentariosError");


function validarTelefono() {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(txtTelefono.value);
}

function isValidEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(txtEmail.value);
}

btnEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    // Oculta mensajes de error
    nombreError.textContent = "";
    correoError.textContent = "";
    telefonoError.textContent = "";
    comentariosError.textContent = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    confirmValidacionesTexto.innerHTML = "";
    confirmValidaciones.style.display = "none";

    let isValid = true;

    
    if (txtNombre.value.length < 3) {
        nombreError.textContent = "El nombre no es válido. Debe tener al menos 3 caracteres.";
        isValid = false;
    }// Validar nombre

   
    if (!isValidEmail()) {
        correoError.textContent = "El correo electrónico no es válido.";
        isValid = false;
    } // Validar email

    
    if (!validarTelefono()) {
        telefonoError.textContent = "El teléfono no es válido. Debe ser un número de al menos 10 dígitos.";
        isValid = false;
    }// Validar teléfono

    
    if (txtComentarios.value.length <= 0) {
        comentariosError.textContent = "Por favor, escriba su mensaje.";
        isValid = false;
    }// Validar comentarios


    if (!isValid) {
        alertValidacionesTexto.innerHTML = "Por favor, corrija lo siguiente:";
        alertValidaciones.style.display = "block";
    } else {
        enviarCorreo();
        confirmValidacionesTexto.innerHTML = "¡Gracias por contactarnos!, revise su correo electrónico.";
        confirmValidaciones.style.display = "block";
    }
});    // Alertas de validación
const serviceId ="service_yykrpj5";
const templateId ="template_hvvj76z";
const apikey = "SrhL_hudVa097-FRV";

function enviarCorreo() {
    emailjs.send(serviceId, templateId, {
        from_name: txtNombre.value,
        from_email: txtEmail.value,
        phone: txtTelefono.value,
        message: txtComentarios.value
    }, apikey)
};//enviarCorreo
