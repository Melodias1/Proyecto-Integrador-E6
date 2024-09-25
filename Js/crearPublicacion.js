 // obtener texto del text area y titulo
const userText = document.getElementById('exampleFormControlTextarea1');
const tituloText = document.getElementById('tituloText');
// obtener url de imagen almacenado al subirla con el widget


document.getElementById("btnPublicar").addEventListener("click", function(event){
    event.preventDefault();
    const imageUrl = localStorage.getItem('uploadedImageUrl');
  
    

    // creacion del json
    const publicationData = {
        img: imageUrl,
        description: userText.value,
        name: tituloText.value,
        comments: []
    };

    // guardar json en local storage
    let publications = JSON.parse(localStorage.getItem('publicationData')) || [];

    // Asegurar que sea un array (en caso de que esté mal formateado)
    if (!Array.isArray(publications)) {
        publications = [];
    }

    // Agregar la nueva publicación al array
    publications.push(publicationData);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('publicationData', JSON.stringify(publications));

    // Redirigir a otra página (por ejemplo, el feed)
    window.location = '../WebPages/feed.html';
});



