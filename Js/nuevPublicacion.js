function loadPublications() {
    const publications = JSON.parse(localStorage.getItem('publications')) || [];
    publications.forEach(publication => {
        displayPublication(publication);
    });
} // Cargar publicaciones del local storage al inicio

// Mostrar publicación en el contenedor
function displayPublication(publication) {
    const publicationDiv = document.createElement('div');
    publicationDiv.classList.add('col-md-4');
    publicationDiv.innerHTML = `
    <div class="card mb-5" style="width: 18rem;">
        ${publication.image ? `<img src="${publication.image}" class="card-img-top" alt="image">` : ''}
       ${publication.video ? `<video class="card-img-top mb-2" controls><source src="${publication.video}" type="video/mp4">Tu navegador no soporta el video.</video>` : ''}
        <div class="card-body">
            <h5 class="card-title">Título de la Publicación</h5>
            <p class="card-text">${publication.text}</p>           
           <div class="comments-section" id="comments-${publication.date}">
                <h6>Comentarios:</h6>
                <div class="comments-list"></div>
                <textarea class="form-control" placeholder="Escribe un comentario..." rows="2"></textarea>
                <button class="btn btn-primary mt-2" onclick="addComment('${publication.date}')">Comentar</button>
            </div>
        </div>
    </div>
    `;
    document.getElementById('list-items').appendChild(publicationDiv);
}


document.getElementById('publicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const imageFile = document.getElementById('imageFile').files[0];
    const videoFile = document.getElementById('videoFile').files[0];
    const textContent = document.getElementById('exampleFormControlTextarea1').value;

    const publication = {
        text: textContent,
        image: imageFile ? URL.createObjectURL(imageFile) : null,
        video: videoFile ? URL.createObjectURL(videoFile) : null,
        date: new Date().toISOString() // La fecha ordena la publicacion
    };

    // Guardar publicación en el local storage
    const publications = JSON.parse(localStorage.getItem('publications')) || [];
    publications.unshift(publication); // Añadir al inicio
    localStorage.setItem('publications', JSON.stringify(publications));

    // Mostrar la nueva publicación
    displayPublication(publication);

    // Reiniciar el formulario
    document.getElementById('publicationForm').reset();
});
