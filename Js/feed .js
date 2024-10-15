


document.addEventListener('DOMContentLoaded', () => {
    const filterCocinaSelect = document.getElementById('filterCocina');
    filterCocinaSelect.addEventListener('change', filterPublications);
    
    loadPublications();
});

function filterPublications() {
    const selectedCuisine = document.getElementById('filterCocina').value;
    const allPublications = JSON.parse(localStorage.getItem('publicationData')) || [];
    const itemsContainer = document.getElementById("list-items");
    
    // Limpiar el contenido anterior
    itemsContainer.innerHTML = ""; 

    // Filtrar publicaciones
    const filteredPublications = selectedCuisine 
        ? allPublications.filter(pub => pub.cuisine === selectedCuisine)
        : allPublications; // Si no hay selección, mostrar todas

    filteredPublications.forEach(pub => {
        addItem(pub); // Agregar cada publicación filtrada
    });
}


function loadPublications() {
    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    const itemsContainer = document.getElementById("list-items");

    // Limpiar el contenido anterior
    itemsContainer.innerHTML = "";

    if (Array.isArray(publications)) {
        publications.forEach(publication => {
            addItem(publication); // Cargar todas las publicaciones al inicio
        });
    }
}

function addItem(item) {
    if (!item.comments) {
        item.comments = [];
    }

    const itemHTML = `
    <div class="col-sm-12">
        <div class="card mb-5 col-sm" style="max-width: 28em">
            <div class="card-body col-sm">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
            </div>
                <h5 class="card-title">${item.userFirstName} ${item.userLastName}</h5>
            </div>
            <img src="${item.img}" class="card-img-top" alt="image" style="max-height:14em;">
            <div class="card-body col-sm">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><small class="text-muted">Tipo de cocina: ${item.cuisine}</small></p>
                <div class="comments-section" id="comments-${item.date || Date.now()}">
                    <h6>Comentarios:</h6>
                    <div class="comments-list" style="max-height: 150px; overflow-y: auto;"></div>
                    <textarea class="form-control" placeholder="Escribe un comentario..." rows="2" style="resize:none"></textarea>
                    <a href="#" class="btn btn-primary mt-2" onclick="addComment(event,'${item.date || Date.now()}')">Hacer Comentario</a>
                    <button class="btn btn-danger mt-2" onclick="removeRecipe(event,'${item.name}')">Eliminar Publicación</button>
                </div>
            </div>
        </div>
        <br/>
    </div>`;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.insertAdjacentHTML("afterbegin", itemHTML);
}//function addItem


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


function updateAssignedCuisines() {
    const assignedCuisinesContainer = document.getElementById('assigned-cuisines');
    assignedCuisinesContainer.innerHTML = ' '; // Limpiar lista existente

    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    const cuisines = new Set();

    publications.forEach(publication => {
        if (publication.cuisine) {
            cuisines.add(publication.cuisine);
        }
    });
    
    cuisines.forEach(cuisine => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = cuisine;
        assignedCuisinesContainer.appendChild(li);
    });
}//Función para actualizar el tipo de cocina


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
        'name': 'Teriyaki Chicken Casserole',
        'img': 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
        'description': 'japanese Meat Casserole',
        'userFirstName':'Ricardo' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina de autor'
        // Agregar tipo de cocina
    },
    {
        'name': 'Duck Confit',
        'img': 'https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg',
        'description': 'French duck recipe',
        'userFirstName':'Jesus' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina de vanguardia'
        // Agregar tipo de cocina
    },
    {
        'name':'Dal fry',
        'img':'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
        'description':'indian Curry,Vegetarian,Cake',
        'userFirstName':'Alberto' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina fusión'
    },
    {'name':'Ayam Percik',
        'img':'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
        'description':'malaysian chicken recipe ',
        'userFirstName':'Francisco' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Alta cocina'
    },
    {'name':'Apple Frangipan Tart',
        'img':'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
        'description':'Tart,Baking,Fruity recipe',
        'userFirstName':'Jess' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina creativa'
    },
    {'name':'Apple & Blackberry Crumble',
        'img':'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
        'description':'Pudding recipe',
        'userFirstName':'Enrique' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina de autor'
    },
    {'name':'Apam balik',
        'img':'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
        'description':'Malaysian dessert recipe',
        'userFirstName':'Jesus' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Nouvelle cuisine'
    }
    // Agrega más recetas aquí...
];

initialRecipes.forEach(recipe => addItem(recipe));
