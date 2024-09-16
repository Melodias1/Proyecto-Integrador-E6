
//llamando al elemento del dom
const itemsContainer = document.getElementById("list-items");
// fetch a la api de themealdb, las recetas estan en el elemento "meal, por lo que se llama a data.meals"
function getData(){
    const promesa = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b", {method:"GET"});
    promesa.then().then((response)=>{response.json().then((data)=>{
        console.log(data.meals);
        
        addItem(data.meals);
    }).catch((er)=>console.log("problema con el json",er));
}).catch((err)=>console.log("existe un problema",err));

}// get data


//construccion de las card/ publicaciones para cada elemento del feed
function addItem(item){

    item.forEach(p => {
         const itemHTML = `<div class="col-sm-12">
                <br>
        <div class="card" style="width: 18rem;">
        <img src="${p.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${p.strMeal}</h5>
                  <p class="card-text">${p.strInstructions}</p>
                  <a href="#" class="btn btn-primary">Me gusta</a>
                  <a href="#" class="btn btn-primary">Comentar</a>
                  <a href="#" class="btn btn-primary">Compartir</a>
            </div>
        </div>
        <br>
    
      </div>`;
        //insercion del html de la publicacion
    itemsContainer.insertAdjacentHTML ("beforeend", itemHTML);
    });
   
}
//llamda a la funcion que hace el fetch a la api
getData();



