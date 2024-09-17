
// //llamando al elemento del dom
// const itemsContainer = document.getElementById("list-items");
// // fetch a la api de themealdb, las recetas estan en el elemento "meal, por lo que se llama a data.meals"
// function getData(){
//     const promesa = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b", {method:"GET"});
//     promesa.then().then((response)=>{response.json().then((data)=>{
//         console.log(data.meals);
        
//         addItem(data.meals);
//     }).catch((er)=>console.log("problema con el json",er));
// }).catch((err)=>console.log("existe un problema",err));

// }// get data


// //construccion de las card/ publicaciones para cada elemento del feed
// function addItem(item){

//     item.forEach(p => {
//          const itemHTML = `<div class="col-sm-12">
//                 <br>
//         <div class="card" style="max-width: 35rem;">
//         <img src="${p.strMealThumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${p.strMeal}</h5>
//                   <p class="card-text">${p.strInstructions}</p>
//                   <a href="#" class="btn btn-primary">Me gusta</a>
//                   <a href="#" class="btn btn-primary">Comentar</a>
//                   <a href="#" class="btn btn-primary">Compartir</a>
//             </div>
//         </div>
//         <br>
    
//       </div>`;
//         //insercion del html de la publicacion
//     itemsContainer.insertAdjacentHTML ("beforeend", itemHTML);
//     });
   
// }
// //llamda a la funcion que hace el fetch a la api
// getData();

// usando las reglas de negocio propuestas en el documento de tareas

function addItem(item){
    const itemHTML = '<div class="card mb-5" style="width: 18rem; ">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
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