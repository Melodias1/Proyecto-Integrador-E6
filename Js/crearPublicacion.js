// obtener texto del text area y titulo
const userText = document.getElementById('exampleFormControlTextarea1');
const tituloText = document.getElementById('tituloText');
const errorSpanText = document.getElementById('textAreaError');
const errorSpanTitle = document.getElementById('fileError');
let nameLog="";
let lastNameLog="";

if(localStorage.getItem('usuarioLoged')!=null){
     usuarioLoged= JSON.parse(localStorage.getItem('usuarioLoged'));
     nameLog=usuarioLoged.nombre;
     lastNameLog=usuarioLoged.apellido
}

// Función para manejar el cambio en el select de tipo de cocina
function assignCuisine(event) {
    const selectedCuisine = event.target.value; // Obtiene el valor seleccionado
    console.log(`Tipo de cocina seleccionado: ${selectedCuisine}`);
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
            comments: [],
            userFirstName:nameLog ,
            userLastName: lastNameLog,
            date: Date.now().toString() // Añadir la fecha aquí
        };

        let publications = JSON.parse(localStorage.getItem('publicationData')) || [];
        if (!Array.isArray(publications)) {
            publications = [];
        }
        publications.push(publicationData);
        localStorage.setItem('publicationData', JSON.stringify(publications));

        // Redirigir a otra página
        window.location = '../WebPages/feed.html';
    }
});
