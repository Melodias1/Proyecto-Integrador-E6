function addItem(item){
    const itemHTML = '<div class="col-sm-12"><div class="card mb-5 col-sm-" style="max-width: 28em; ">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body ">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/> </div>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.insertAdjacentHTML ("afterbegin",itemHTML);
}

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
