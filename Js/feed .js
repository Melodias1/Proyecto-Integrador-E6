


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
            <h5 class="card-title">${item.userFirstName} ${item.userLastName}</h5>
            </div>
            <img src="${item.img}" class="card-img-top" alt="image" style="max-height:14em;">
            <div class="card-body col-sm">
                <h5 class="card-title">${item.name}</h5>
                
                <p class="card-text">${item.description}</p>
                
                <div class="comments-section" id="comments-${item.date || Date.now()}">
                    <h6>Comentarios:</h6>
                    <div class="comments-list"></div>
                    <textarea class="form-control" placeholder="Escribe un comentario..." rows="2" style="resize:none;"></textarea>
                    <a href="#" class="btn btn-primary mt-2" onclick="addComment(event,'${item.date || Date.now()}')" style="width 500px">Hacer Comentario</a>
                    <button class="btn btn-danger mt-2" onclick="removeRecipe(event,'${item.name}')">Eliminar Publicacion</button>
                </div>
            </div>
        </div>
        <br/>
    </div>`;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.insertAdjacentHTML("afterbegin", itemHTML);
}
// borrar comentarios del Json de la publicacion
function removeFromLocalStorage(comentTxt){
    let comentario
}
// agregar comentarios al Json de la publicacion
function agregarAlJson(comentTxt){
    let JsonCard = localStorage.getItem('publicationData')
}

function removeRecipe(event,name) {
    event.preventDefault();
    const itemsContainer = document.getElementById("list-items");
    const cards = itemsContainer.getElementsByClassName('card-title');
    for (let card of cards) {
        if (card.textContent === name) {
            card.closest('.col-sm-12').remove();
            break;
        }
    }
    //removeFromLocalStorage(name);
}

function removeFromLocalStorage(name){

}

function addComment(event,date) {
    event.preventDefault();
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
        // updateTrendingRecipes(); // Actualiza las tendencias
        agregarAlJson();
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
if(localStorage.getItem('usuarioLoged')!=null){
    document.getElementById("btnNewPublication").onclick = function() {
        window.open("../WebPages/publicaciones.html", "_blank");
    };  
}else{
    swal({
        title: "¡Usuario no encontrado!",
        text: "Por favor, Inicie sesion o Registre nuevo usuario.",
        icon: "warning",
        button: "Ok",
    });
    document.getElementById("btnNewPublication").onclick = function() {
        swal({
            title: "¡Usuario no encontrado!",
            text: "Por favor, Inicie sesion o Registre nuevo usuario.",
            icon: "warning",
            button: "Ok",
        });
    };  
}


// Ejemplo de adición de recetas iniciales
const initialRecipes = [
    {
        'name': 'juice',
        'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
        'description': 'Orange and Apple juice fresh and delicious',
        'userFirstName':'Ricardo' ,
        'userLastName': 'GuarniApp',
        'comentarios':''
    },
    {
        'name': 'Tayto',
        'img': 'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
        'description': 'Cheese & Onion Chips',
         'userFirstName':'Jesus' ,
        'userLastName': 'GuarniApp',
        'comentarios':''
    }
    // Agrega más recetas aquí...
];

initialRecipes.forEach(recipe => addItem(recipe));
