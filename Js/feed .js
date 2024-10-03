let usuarioLoged= JSON.parse(localStorage.getItem('usuarioLoged'));

document.addEventListener('DOMContentLoaded', () => {
    loadPublications();
});

function addItem(item) {
    if (!item.comments) {
        item.comments = [];
    }
    const itemHTML = `
    <div class="col-sm-12">
        <div class="card mb-5 col-sm" style="max-width: 28em">
        <div class="card-body col-sm">
            <h5 class="card-title">${usuarioLoged.nombre} ${usuarioLoged.apellido}</h5>
            </div>
            <img src="${item.img}" class="card-img-top" alt="image" style="max-height:14em;">
            <div class="card-body col-sm">
                <h5 class="card-title">${item.name}</h5>
                <button class="btn btn-danger" onclick="removeRecipe('${item.name}')">Eliminar</button>
                <p class="card-text">${item.description}</p>
                
                <div class="comments-section" id="comments-${item.date || Date.now()}">
                    <h6>Comentarios:</h6>
                    <div class="comments-list"></div>
                    <textarea class="form-control" placeholder="Escribe un comentario..." rows="2"></textarea>
                    <a href="#" class="btn btn-primary mt-2" onclick="addComment('${item.date || Date.now()}')">Comentar</a>
                </div>
            </div>
        </div>
        <br/>
    </div>`;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
}

function removeRecipe(name) {
    const itemsContainer = document.getElementById("list-items");
    const cards = itemsContainer.getElementsByClassName('card-title');
    for (let card of cards) {
        if (card.textContent === name) {
            card.closest('.col-sm-12').remove();
            break;
        }
    }
    removeFromLocalStorage(name);
}

function addComment(date) {
    const commentTextarea = document.querySelector(`#comments-${date} textarea`);
    const commentText = commentTextarea.value;

    if (commentText) {
        const commentsList = document.querySelector(`#comments-${date} .comments-list`);
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);

        const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
        const publicationIndex = publications.findIndex(pub => pub.date === date);

        if (publicationIndex !== -1) {
            if (!publications[publicationIndex].comments) {
                publications[publicationIndex].comments = [];
            }
            publications[publicationIndex].comments.push(commentText);
            localStorage.setItem('publicationData', JSON.stringify(publications));
        }

        commentTextarea.value = ''; // Limpiar el textarea
        updateTrendingRecipes(); // Actualiza las tendencias
    }
}


function loadPublications() {
    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    if (Array.isArray(publications)) {
        publications.forEach(publication => {
            addItem(publication);
        });
    }
}

// Funcionalidad del botón "+"
document.getElementById("btnNewPublication").onclick = function() {
    window.open("../WebPages/publicaciones.html", "_blank");
};  

// Ejemplo de adición de recetas iniciales
const initialRecipes = [
    {
        'name': 'juice',
        'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
        'description': 'Orange and Apple juice fresh and delicious'
    },
    {
        'name': 'Tayto',
        'img': 'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
        'description': 'Cheese & Onion Chips'
    },
    // Agrega más recetas aquí...
];

initialRecipes.forEach(recipe => addItem(recipe));
