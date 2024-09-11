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
    if (txtTelefono.value.length < 10 || isNaN(txtTelefono.value) || Number(txtTelefono.value) <= 0) {
        return false;
    }
    return true;
}

function isValidEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(txtEmail.value);
}

btnEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    // Ocultar todos los mensajes de error
    nombreError.textContent = "";
    correoError.textContent = "";
    telefonoError.textContent = "";
    comentariosError.textContent = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    confirmValidacionesTexto.innerHTML = "";
    confirmValidaciones.style.display = "none";

    let isValid = true;

    // Validar nombre
    if (txtNombre.value.length < 3) {
        nombreError.textContent = "El nombre no es válido. Debe tener al menos 3 caracteres.";
        isValid = false;
    }

    // Validar email
    if (!isValidEmail()) {
        correoError.textContent = "El correo electrónico no es válido.";
        isValid = false;
    }

    // Validar teléfono
    if (!validarTelefono()) {
        telefonoError.textContent = "El teléfono no es válido. Debe ser un número de al menos 10 dígitos.";
        isValid = false;
    }

    // Validar comentarios
    if (txtComentarios.value.length <= 0) {
        comentariosError.textContent = "Por favor, escriba su mensaje.";
        isValid = false;
    }

    // Mostrar alertas de validación
    if (!isValid) {
        alertValidacionesTexto.innerHTML = "Por favor, corrija los siguientes errores:";
        alertValidaciones.style.display = "block";
    } else {
        confirmValidacionesTexto.innerHTML = "El registro fue exitoso, favor de revisar su correo electrónico.";
        confirmValidaciones.style.display = "block";
    }
});
