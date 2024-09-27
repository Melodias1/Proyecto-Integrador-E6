function addItem(item){
    const itemHTML = `
    <div class="col-sm-12">
        <div class="card mb-5 col-sm" style="max-width: 28em; ">
            <img src="${item.img}" class="card-img-top" alt="image" style="max-height:14em;">
            <div class="card-body col-sm">
                <h5 class="card-title">${item.name}</h5>
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
    itemsContainer.insertAdjacentHTML ("afterbegin",itemHTML);
}

//==============================cargar comentarios=============================================
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
            publications[publicationIndex].comments.push(commentText);
            localStorage.setItem('publicationData', JSON.stringify(publications));
        }
        commentTextarea.value = ''; // Limpiar el textarea
    } else {
        alert("Por favor, escribe un comentario.");
    }
}
//==============================que vienen de la api=============================================
addItem({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addItem({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'})

addItem({'name':'Apple Frangipan Tart',
    'img':'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    'description':'Tart,Baking,Fruity recipe'});

addItem({'name':'Apple & Blackberry Crumble',
    'img':'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
    'description':'Pudding recipe'})
addItem({'name':'Apam balik',
    'img':'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
    'description':'Malaysian dessert recipe'});

addItem({'name':'Ayam Percik',
    'img':'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
    'description':'malaysian chicken recipe '})
addItem({'name':'Dal fry',
    'img':'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
    'description':'indian Curry,Vegetarian,Cake'});

addItem({'name':'Dundee cake',
    'img':'https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg',
    'description':'heavy,Nutty,Fruity british cake'})   
addItem({'name':'Teriyaki Chicken Casserole',
    'img':'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    'description':'japanese Meat Casserole'});

addItem({'name':'Duck Confit',
    'img':'https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg',
    'description':'french duck recipe'})

//==============================cargar nuevas publicaciones=============================================

function loadPublications() {
    const publications = JSON.parse(localStorage.getItem('publicationData')) || [];
    console.log(publications)
    if (Array.isArray(publications)) {
        publications.forEach(publication => {
            addItem(publication);
        });
    }else{
        addItem(publications);
    }
    }
    //funcionalidad del boton +
    document.getElementById("btnNewPublication").onclick = function() {
        window.open("../WebPages/publicaciones.html", "_blank");
    };  

loadPublications();
