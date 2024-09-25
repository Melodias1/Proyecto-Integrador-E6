/*document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

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
        let isValid = true;

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


        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            showError(document.getElementById('confirmPassword'), 'Las contraseñas no coinciden.');
            isValid = false;
        }


        const email = document.getElementById('regEmail').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError(document.getElementById('regEmail'), 'Por favor, introduce un correo electrónico válido.');
            isValid = false;
        }

        // Validación de teléfono
        const phone = document.getElementById('phone').value;
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            showError(document.getElementById('phone'), 'Por favor, introduce un número de teléfono válido (10 dígitos).');
            isValid = false;
        }

        return isValid;
    }

    function validateLoginForm() {
        let isValid = true;

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email.trim()) {
            showError(document.getElementById('loginEmail'), 'Este campo es obligatorio.');
            isValid = false;
        } else {
            hideError(document.getElementById('loginEmail'));
        }

        if (!password.trim()) {
            showError(document.getElementById('loginPassword'), 'Este campo es obligatorio.');
            isValid = false;
        } else {
            hideError(document.getElementById('loginPassword'));
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError(document.getElementById('loginEmail'), 'Por favor, introduce un correo electrónico válido.');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.classList.add('text-danger');
    }

    function hideError(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = '';
        errorSpan.classList.remove('text-danger');
    }
});*/

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar la recarga inmediata de la página

        if (!validateRegistrationForm()) {
            swal({
                title: "¡Falta información!",
                text: "Por favor, revise los campos antes de enviar.",
                icon: "warning",
                button: "Revisar campos",
            });
        } else {
            swal({
                title: "¡Registro exitoso!",
                text: "Su cuenta ha sido registrada con éxito.",
                icon: "success",
                button: "OK",
            }).then(() => {
                window.location.reload(); // Recargar la página después de que el usuario presione "OK"
            });
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar la recarga de página por el submit
        if (!validateLoginForm()) {
            showError(document.getElementById('loginEmail'), 'Por favor, revise su información.');
        } else {
            loginForm.submit(); // Si es válido, proceder con el envío
        }
    });

    function validateRegistrationForm() {
        let isValid = true;

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

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            showError(document.getElementById('confirmPassword'), 'Las contraseñas no coinciden.');
            isValid = false;
        }

        const email = document.getElementById('regEmail').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError(document.getElementById('regEmail'), 'Por favor, introduce un correo electrónico válido.');
            isValid = false;
        }

        const phone = document.getElementById('phone').value;
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            showError(document.getElementById('phone'), 'Por favor, introduce un número de teléfono válido (10 dígitos).');
            isValid = false;
        }

        return isValid;
    }

    function validateLoginForm() {
        let isValid = true;

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email.trim()) {
            showError(document.getElementById('loginEmail'), 'Este campo es obligatorio.');
            isValid = false;
        } else {
            hideError(document.getElementById('loginEmail'));
        }

        if (!password.trim()) {
            showError(document.getElementById('loginPassword'), 'Este campo es obligatorio.');
            isValid = false;
        } else {
            hideError(document.getElementById('loginPassword'));
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError(document.getElementById('loginEmail'), 'Por favor, introduce un correo electrónico válido.');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.classList.add('text-danger');
    }

    function hideError(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = '';errorSpan.classList.remove('text-danger');
    }
});
