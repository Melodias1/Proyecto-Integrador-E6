
let fullName = document.getElementById("fullName");
let emailJS= document.getElementById("regEmail");
let phoneJS= document.getElementById("phone");
let passwordJS= document.getElementById("password")
let confPassJS= document.getElementById("confirmPassword");
let btnLogin = document.getElementById("btnLogin");
let usuarioLoginValid= document.querySelector('#loginEmail');
let passLoginValid= document.querySelector('#loginPassword')
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
            storeData();
            swal({
                title: "¡Registro exitoso!",
                text: "Su cuenta ha sido registrada con éxito.",
                icon: "success",
                button: "OK",
                
            }).then(() => {
                fullName.value="";
                emailJS.value="";
                phoneJS.value="";
                passwordJS.value="";
                confPassJS.value="";
            window.location.reload();// recarga ventana
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

        const fields = [{ id: 'fullName', message: 'Por favor, introduce tu nombre completo.' },
            { id: 'phone', message: 'Por favor, introduce un número de teléfono válido (10 dígitos).' },
            { id: 'regEmail', message: 'Por favor, introduce un correo electrónico válido.' },
            { id: 'password', message: 'Por favor, introduce una contraseña.' },
            { id: 'confirmPassword', message: 'Por favor, confirma tu contraseña.' },
        ];

        fields.forEach(({ id, message }) => {
            const input = document.getElementById(id);
            if (!input.value.trim()) {
                showError(input, message);
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
        // Solo borra los campos si no son válidos
    if (!isValid) {
        fields.forEach((field) => {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                input.value = ""; // Borra solo si el campo está vacío
            }
        });
    }
        return isValid;
        
        
    }

    function validateLoginForm() {
        let isValid = true;

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email.trim()) {
            showError(document.getElementById('loginEmail'), 'El nombre no es válido. Debe tener al menos 3 caracteres.');
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
        const errorSpan = document.getElementById(input.id + 'Error');
        errorSpan.textContent = message;
        errorSpan.classList.add('text-danger');
    }

    function hideError(input) {
        const errorSpan = document.getElementById(input.id + 'Error');
        errorSpan.textContent = '';
        errorSpan.classList.remove('text-danger');
    }

function storeData(){

    const fullName = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("password").value;

    let newUser= {
        nombre: fullName,
        phone:phone,
        email:email,
        password:password
    };

    let usersDb = JSON.parse(localStorage.getItem('usuariosDb')) || [];
    usersDb.push(newUser); // Agregar el nuevo usuario
    localStorage.setItem("usuariosDb",JSON.stringify(usersDb))// Guardar de nuevo
//    console.log('Usuarios guardados:', usersDb); // Verifica que se guarden correctamente
}

//==========creacion de funcion para validar usuario y contraseña en local=============
//boton de validacion de formulario inicio de sesion
btnLogin.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log('Botón de inicio de sesión clicado');
    //variable bandera
    let usuarioEcnontrado=false;
//traer lista de usuarios
    let usersLocalDb= JSON.parse(localStorage.getItem('usuariosDb')) || [];
    //borrar alertas y coloca el texto
     borrarError(document.getElementById('loginEmail'),'Email (nombre de usuario)');
     borrarError(document.getElementById('loginPassword'),'Contraseña');
   // ciclo foreach donde se compara el correo y la contraseña
    usersLocalDb.forEach(element => {
        if (usuarioLoginValid.value===element.email && passLoginValid.value===element.pass) {
            usuarioEcnontrado=true
            swal({
                title: "Inicio exitoso!",
                text: `Bienvenido, ${element.nombre}`,
                icon: "success",
                button: "OK",
                
            })
            //agregar usuario logeado al local storage
            localStorage.setItem("usuarioLoged",JSON.stringify(element))
            //borra los campos en caso de ser exitoso
            usuarioLoginValid.value=""
            passLoginValid.value=""
            //lleva a el feed despues de 3s
            setTimeout(() => {
                window.location.href="../WebPages/feed.html"
                
            }, 3000);
            
        }
       
    });

    if(!usuarioEcnontrado){
        //muestra un error dentro del campo del email
        mostrarError(document.getElementById('loginEmail'),'Usuario o contraseña no coinciden');
    }

});


//===========funcion para borrar alertas=============
function borrarError(input,message) {
    const errorSpan = document.getElementById(input.id + 'Error');
    errorSpan.textContent = message;
    errorSpan.classList.remove('text-danger');
}
//===========funcion para mostrar error=============
function mostrarError(input, message) {
    const errorSpan = document.getElementById(input.id + 'Error');
    errorSpan.textContent = message;
    errorSpan.classList.add('text-danger');
}

});