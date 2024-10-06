const btnEnviar = document.getElementById("btnEnviar");
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


btnEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    // Oculta mensajes de error
    nombreError.textContent = "";
    correoError.textContent = "";
    telefonoError.textContent = "";
    comentariosError.textContent = "";

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
        swal({
            title: "¡Falta información!",
            text: "¡Oh!, parece que no has llenado bien los campos",
            icon: "warning",
            button: "Ver info faltante",
        });
    } else {
        emailjs.send(serviceId, templateId, {
            to_name: txtNombre.value,
            to_email: txtEmail.value,
            to_phone: txtTelefono.value,
            to_comments: txtComentarios.value,
            message_html: `Recibimos tu mensaje desde ${txtEmail.value}, con tus comentarios: ${txtComentarios.value}. En breve nos comunicaremos.`, 
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            swal({
                title: "¡Excelente!",
                text: "¡Has completado el formulario!",
                icon: "success",
                button: "Gracias por tu mensaje",
            }).then(() => {
                txtNombre.value = "";
                txtEmail.value = "";
                txtTelefono.value = "";
                txtComentarios.value = "";
                nombreError.textContent = "";
                correoError.textContent = "";
                telefonoError.textContent = "";
                comentariosError.textContent = "";
            });
        }, function(error) {
            console.log('FAILED...', error);
            swal({
                title: "¡Error!",
                text: "Hubo un problema al enviar tu mensaje. Inténtalo nuevamente.",
                icon: "error",
                button: "Aceptar",
            });
        });
    }
});    // Alertas de validación





    
