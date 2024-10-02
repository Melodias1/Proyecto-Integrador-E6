// Al cargar la página, cargar las publicaciones
function loadPublications() {
    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    if (Array.isArray(publications)) {
        publications.forEach(publication => {
            addItem(publication);
        });
    }
}

// Función para agregar un nuevo elemento (publicación)
function addItem(item) {
    if (!item.comments) {
        item.comments = []; // Asegúrate de que 'comments' esté inicializado
    }

    const itemHTML = `
    <div class="col-sm-12">
        <div class="card mb-5 col-sm" style="max-width: 28em;" onclick="openModal('${item.date || Date.now()}')">
            <img src="${item.img}" class="card-img-top" alt="image" style="max-height:14em;">
            <div class="card-body col-sm">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-date">${new Date(item.date || Date.now()).toLocaleString()}</p>
                <div class="comments-section" id="comments-${item.date || Date.now()}">
                    <h6>Comentarios:</h6>
                    <div class="comments-list">${item.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}</div>
                    <textarea class="form-control" placeholder="Escribe un comentario..." rows="2"></textarea>
                    <a href="#" class="btn btn-primary mt-2" onclick="addComment('${item.date || Date.now()}')">Comentar</a>
                </div>
            </div>
        </div>
        <br/>
    </div>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.insertAdjacentHTML("afterbegin", itemHTML);
}

// Función para agregar un comentario
function addComment(date) {
    const commentTextarea = document.querySelector(`#comments-${date} textarea`);
    const commentText = commentTextarea.value;

    if (commentText) {
        const commentsList = document.querySelector(`#comments-${date} .comments-list`);
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);

        // Cargar publicaciones del localStorage
        const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
        const publicationIndex = publications.findIndex(pub => pub.date === date);

        if (publicationIndex !== -1) {
            publications[publicationIndex].comments.push(commentText);
            localStorage.setItem('publicationData', JSON.stringify(publications)); // Guardar en localStorage
        }

        commentTextarea.value = ''; // Limpiar el textarea
    } else {
        alert("Por favor, escribe un comentario.");
    }
}

// Ejemplo de publicaciones iniciales
addItem({'name':'juice', 'img':'https://www.gs1india.org/media/Juice_pack.jpg', 'description':'Orange and Apple juice fresh and delicious'});
addItem({'name':'Tayto', 'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg', 'description':'Cheese & Onion Chips'});

// Funcionalidad del botón para abrir una nueva publicación
document.getElementById("btnNewPublication").onclick = function() {
    window.open("../WebPages/publicaciones.html", "_blank");
};

// Cargar las publicaciones al inicio
loadPublications();
