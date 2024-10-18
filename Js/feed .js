function initializePublications() {
    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    if (publications.length === 0) {
        localStorage.setItem('publicationData', JSON.stringify(initialRecipes));
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const filterCocinaSelect = document.getElementById('filterCocina');
    if (filterCocinaSelect) {
        filterCocinaSelect.addEventListener('change', filterPublications);
    }
    const publicationsContainer = document.getElementById("publicationsContainer");

    // Escuchar clics en el contenedor de publicaciones
    publicationsContainer.addEventListener('click', function(event) {
        // Verificar si el clic fue en un botón de hacer comentario
        if (event.target.matches('.btn-primary')) {
            // Obtener la fecha asociada con la tarjeta en la que se hizo clic
            const date = event.target.getAttribute('data-date');
            addComment(event, date);
        }
    });

    initializePublications(); 
    loadPublications();
    

});


function loadPublications() {
    const publicationsContainer = document.getElementById("publicationsContainer");
    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];

    publicationsContainer.innerHTML = ""; // Limpiar el contenido anterior

    if (Array.isArray(publications)) {
        publications.forEach(publication => {
            addItem(publication); // Cargar todas las publicaciones al inicio
            agregarAlJson(publication.date); // Asegúrate de cargar los comentarios también
        });
    }
}

function filterPublications() {
    const selectedCuisine = document.getElementById('filterCocina').value;
    const allPublications = JSON.parse(localStorage.getItem('publicationData')) || [];
    const publicationsContainer = document.getElementById("publicationsContainer");

    // Limpiar el contenido anterior
    publicationsContainer.innerHTML = ""; 

    // Filtrar publicaciones
    const filteredPublications = selectedCuisine 
        ? allPublications.filter(pub => pub.cuisine === selectedCuisine)
        : allPublications; // Si no hay selección, mostrar todas

    filteredPublications.forEach(pub => {
        addItem(pub); // Agregar cada publicación filtrada
    });
}

function addItem(item) {
    const publicationsContainer = document.getElementById("publicationsContainer");

    if (!item.comments) {
        item.comments = [];
    }

    const itemHTML = `
    <div class="col-12 d-flex justify-content-center">
        <div class="card mb-5 col-sm" style="max-width: 28em; width: 100%">
            <div class="card-body">
                <div class="d-flex align-items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person me-2" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                    <h5 class="card-title mb-0">${item.userFirstName}</h5>
                </div>
                <img src="${item.img}" class="card-img-top" alt="image" style="max-height:14em;">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text" style="white-space: pre-line;">${item.description}</p>
                    <p class="card-text"><small class="text-muted">Tipo de cocina: ${item.cuisine}</small></p>
                    <div class="comments-section" id="comments-${item.date}">
                        <h6>Comentarios:</h6>
                        <div class="comments-list" style="max-height: 150px; overflow-y: auto;"></div>
                        <textarea class="form-control" placeholder="Escribe un comentario..." rows="2" style="resize:none"></textarea>
                        <a href="#" class="btn btn-primary mt-2" data-date="${item.date}">Hacer Comentario</a>
                        <button class="btn btn-danger mt-2" onclick="removeRecipe(event,'${item.name}')">Eliminar Publicación</button>
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>`;

    publicationsContainer.insertAdjacentHTML("afterbegin", itemHTML);

   
}//function addItem


// borrar comentarios del Json de la publicacion
function removeFromLocalStorage(date, commentText){
    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    const publicationIndex = publications.findIndex(pub => pub.date === date);

    if (publicationIndex !== -1) {
        const comments = publications[publicationIndex].comments || [];
        const commentIndex = comments.indexOf(commentText);
        
        if (commentIndex !== -1) {
            comments.splice(commentIndex, 1); // Elimina el comentario
            publications[publicationIndex].comments = comments;
            localStorage.setItem('publicationData', JSON.stringify(publications));
        }
    }
}

// agregar comentarios al Json de la publicacion
function agregarAlJson(date){
    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    const publicationIndex = publications.findIndex(pub => pub.date === date);

    if (publicationIndex !== -1) {
        const comments = publications[publicationIndex].comments || [];
        const commentsList = document.querySelector(`#comments-${date} .comments-list`);

        if (commentsList) { // Asegúrate de que commentsList no sea null
            commentsList.innerHTML = ""; // Limpiar lista de comentarios

            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.textContent = comment;
                commentsList.appendChild(commentElement);
            });
        } else {
            console.error(`No se encontró la lista de comentarios para la fecha: ${date}`);
        }
    }
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

// function addComment(event,date) {
//     event.preventDefault();
//     const commentTextarea = document.querySelector(`#comments-${date} textarea`);
//     const commentText = commentTextarea.value;

//     if (commentText) {
//         const commentsList = document.querySelector(`#comments-${date} .comments-list`);
//         const newComment = document.createElement('div');
//         newComment.classList.add('comment');
//         newComment.textContent = commentText;
//         commentsList.appendChild(newComment);

//         const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
//         const publicationIndex = publications.findIndex(pub => pub.date === date);

//         if (publicationIndex !== -1) {
//             if (!publications[publicationIndex].comments) {
//                 publications[publicationIndex].comments = [];
//             }
//             publications[publicationIndex].comments.push(commentText);
//             localStorage.setItem('publicationData', JSON.stringify(publications));
//         }

//         commentTextarea.value = ''; // Limpiar el textarea
//         // updateTrendingRecipes(); // Actualiza las tendencias
//         agregarAlJson(date);
//     }
// }


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
        'cuisine':'Cocina de autor',
        'date': 45648456
        // Agregar tipo de cocina
    },
    {
        'name': 'Duck Confit',
        'img': 'https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg',
        'description': 'French duck recipe',
        'userFirstName':'Jesus' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina de vanguardia',
        'date': 4564686456
        // Agregar tipo de cocina
    },
    {
        'name':'Dal fry',
        'img':'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
        'description':'indian Curry,Vegetarian,Cake',
        'userFirstName':'Alberto' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina fusión',
        'date': 86456456456
    },
    {'name':'Ayam Percik',
        'img':'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
        'description':'malaysian chicken recipe ',
        'userFirstName':'Francisco' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Alta cocina',
        'date': 4564852312
    },
    {'name':'Apple Frangipan Tart',
        'img':'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
        'description':'Tart,Baking,Fruity recipe',
        'userFirstName':'Jess' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina creativa',
        'date': 89654356354
    },
    {'name':'Apple & Blackberry Crumble',
        'img':'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
        'description':'Pudding recipe',
        'userFirstName':'Enrique' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Cocina de autor',
        'date': 4565463696323
    },
    {'name':'Apam balik',
        'img':'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
        'description':'Malaysian dessert recipe',
        'userFirstName':'Jesus' ,
        'userLastName': 'GuarniApp',
        'comentarios':'',
        'cuisine':'Nouvelle cuisine',
        'date': 456832135348
    }
    // Agrega más recetas aquí...
];
// generacion de cards
initialRecipes.forEach(recipe => addItem(recipe));




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
        agregarAlJson(date);
    }//addComment


    
}
