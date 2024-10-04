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
document.getElementById("btnPublicar").addEventListener("click", function(event) {
    event.preventDefault();

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
            comments: [],
            userFirstName:nameLog ,
            userLastName: lastNameLog
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
