const fullName = document.getElementById("fullName");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("regEmail");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const btnEnviar = document.getElementById("btnRegister")
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    //Validar el formato del telefono
 function validatePhoneNumber(phone) {
        const regexPhone = /^\d{10}$/;
        return regexPhone.test(phone);
    }

    // Función para validar el correo electrónico
    function validateEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    // Función para validar la contraseña
    //Debe de contener 8 caracteres, al menos una letra y un numero
    function validatePassword(password) {
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regexPass.test(password);
    }

    registrationForm.addEventListener('submit', (event) => {
        if (!validateRegistrationForm()) {
            event.preventDefault();
        }
    });

    loginForm.addEventListener('submit', (event) => {
        if (!validateLoginForm()) {
            event.preventDefault();
        }
    });
    function validateRegistrationForm() {
        const fields = ['fullName', 'phone', 'regEmail', 'password', 'confirmPassword'];
        fields.forEach((field) => {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                showError(input, 'Este campo es obligatorio.');
                isValid = false;
            } else {
                hideError(input);
            }
        });
        //Validar la longitud del nombre completo
    if (fullName.ariaValueMax.trim().length<3) {
        showError(fullName, "El nombre completo debe tener al menos 3 caracteres");
        isValid=false;
    }

        //Validar el numero de telefono 10 digitos
        if (!validarTelefono(phoneNumber.value)) {
            showError(phoneNumber, "El numero de telefono debe tener 10 digitos");
            isValid=false;
        }

        //Validar el correo electronico
        if (!validatePassword(password.value)) {
            showError(password, "La contrasena debe ser de 8 caracteres, al menos debe contener una letra y un numero");
            isValid=false;
        }

        //Validar que las contrasenas coincidan
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword,"La contrasena no coincide");
            isValid=false;
        }
        if (!isValid) {
            swal({
                title: "¡Falta información!",
                text: "¡Oh!, parece que no has llenado bien los campos",
                icon: "warning",
                button: "Ver info faltante",
            });
        } 
        swal({
            title: "¡Registro exitoso!",
            text: "¡Su cuenta ha sido registrada",
            icon: "succes",
            button: "OK",
        });
        
    } 
    function showError(inputElement, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "text-danger";
        errorElement.textContent = message;
        inputElement.parentElement.appendChild(errorElement);
    }

    
    function clearErrorMessages() {
        const errors = document.querySelectorAll(".text-danger");
        errors.forEach(function(error) {
            error.remove();
        })

    /*function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.classList.add('text-danger');
    }

    function hideError(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = '';
        errorSpan.classList.remove('text-danger');
    }*/
});



/*btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

    clearErrorMesages();

    let isValid =true;

    

    if (!isValid) {
        swal({
            title: "¡Falta información!",
            text: "¡Oh!, parece que no has llenado bien los campos",
            icon: "warning",
            button: "Ver info faltante",
        });
    } 
    swal({
        title: "¡Registro exitoso!",
        text: "¡Su cuenta ha sido registrada",
        icon: "succes",
        button: "OK",
    });
});

*/
