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

//===codigo para enviar email===
const serviceId ="service_yykrpj5";
const templateId ="template_hvvj76z";
const apikey = "SrhL_hudVaO97-FRV";



var templateParams = {
    to_name: txtNombre.value,
    from_name: 'GuarniAPP',
    message_html: 'Recibimos tu mensaje, en breve nos comunicaremos.'
    };





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
        telefonoError.textContent = "El teléfono no es válido. Debe ser un número de 10 dígitos.";
        isValid = false;
    }// Validar teléfono

    
    if (txtComentarios.value.length <= 0) {
        comentariosError.textContent = "Por favor, escriba su mensaje.";
        isValid = false;
    }// Validar comentarios


    if (!isValid) {
        alertValidacionesTexto.innerHTML = "Por favor, corrija los errores en el formulario.";
        alertValidaciones.style.display = "block";
    } else {
        emailjs.send(serviceId, templateId, templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
        
        Swal.fire({
            title: "Enviado",
            text: "Su registro fue exitoso!",
            icon: "success"
          });
    }// else
});    // Alertas de validación





    
