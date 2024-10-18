// obtener texto del text area y titulo
const userText = document.getElementById('exampleFormControlTextarea1');
const tituloText = document.getElementById('tituloText');
const errorSpanText = document.getElementById('textAreaError');
const errorSpanTitle = document.getElementById('fileError');
let nameLog = "";
let lastNameLog = "";

if (localStorage.getItem('usuarioLoged') != null) {
    const usuarioLoged = JSON.parse(localStorage.getItem('usuarioLoged'));
    nameLog = usuarioLoged.full_name;
    usuarioid=usuarioLoged.id;
    
}

// Función para manejar el cambio en el select de tipo de cocina
function assignCuisine(event) {
    const selectedCuisine = event.target.value; // Obtiene el valor seleccionado
    console.log(`Tipo de cocina seleccionado: ${selectedCuisine}`);
}

function saveInLocalStorage(publicationData) {
    let publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    if (!Array.isArray(publications)) {
        publications = [];
    }
    publications.push(publicationData);
    localStorage.setItem('publicationData', JSON.stringify(publications));
}

// Añade el evento onchange en el select
const tipoCocinaSelect = document.getElementById('tipoCocina');
tipoCocinaSelect.addEventListener('change', assignCuisine);

document.getElementById("btnPublicar").addEventListener("click", function(event) {
    event.preventDefault();

    const tipoCocina = document.querySelector('select').value;

    // Limpiar mensajes de error previos
    errorSpanText.style.display = "none";
    errorSpanTitle.style.display = "none";

    // Validar campos
    let isValid = true;

    // Validar el título
    if (tituloText.value.trim() === "") {
        errorSpanTitle.textContent = "El título no puede estar vacío.";
        errorSpanTitle.style.display = "block";
        isValid = false;
    }

    // Validar el textarea
    if (userText.value.trim() === "") {
        errorSpanText.textContent = "El texto no puede estar vacío.";
        errorSpanText.style.display = "block";
        isValid = false;
    }

    // Si todo es válido, proceder con la creación del JSON
    if (isValid) {
        const imageUrl = localStorage.getItem('uploadedImageUrl');
        const publicationData = {
            img: imageUrl,
            description: userText.value,
            name: tituloText.value,
            cuisine: tipoCocina,
            comments: [""],
            userFirstName: nameLog,
            date: Date.now().toString() // Añadir la fecha aquí
        };
        const publicationDB ={
            postFile: imageUrl,
            postDescription: userText.value,
            postTitle: tituloText.value,
            user_iduser: usuarioid,
            categoria_idcategoria:1,
            postDate: Date.now().toString() // Añadir la fecha aquí
        }

        // Guardar en local storage
        saveInLocalStorage(publicationData);

        // Preparar los datos para la solicitud
        const myHeaders = new Headers({
            "Content-Type": "application/json"
        });

        // Convertir publicationData a JSON
        const raw = JSON.stringify(publicationDB);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        // Mandar guardar a base de datos
        fetch("http://localhost:8080/api/post/", requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json(); // Cambia a json si esperas un objeto JSON de respuesta
                } else {
                    throw new Error("Error en la solicitud");
                }
            })
            .then((result) => {
                console.log(result);
                swal({
                    title: "¡Receta Publicada!",
                    text: "Su receta ha sido publciada con éxito.",
                    icon: "success",
                    button: "OK"
                }).then(() => {
                    // Limpiar campos
                    userText.value = "";
                    tituloText.value = "";
                    // Redirigir a otra página
                    window.location = '../WebPages/feed.html';
                });
            })
            .catch((error) => {
                console.error(error);
                swal({
                    title: "¡Error!",
                    text: "Hubo un problema al publicar su contenido. Inténtelo de nuevo.",
                    icon: "error",
                    button: "OK"
                });
            });
    }
});
