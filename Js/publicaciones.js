
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

const form = document.getElementById("publicationForm");
const imageFile = document.getElementById("imageFile");
const videoFile = document.getElementById("videoFile");
const textArea = document.getElementById("exampleFormControlTextarea1");

document.addEventListener("DOMContentLoaded", function(){
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let isValid = true;

        // Ocultar mensajes de error si ya existen
        clearErrorMessages();

        // Validar la imagen
        if (!validateImage()) {
            showError(imageFile, "Debe cargar una imagen válida.");
            isValid = false;
        }

        // Validar el video (opcional)
        if (!validateVideo()) {
            showError(videoFile, "Debe cargar un video válido.");
            isValid = false;
        }

        // Validar el campo de texto
        if (textArea.value.trim().length === 0) {
            showError(textArea, "Debe escribir algo en la publicación.");
            isValid = false;
        }

        // Si el formulario no es válido
        if (!isValid) {
            swal({
                title: "¡Falta información!",
                text: "Por favor, revise los campos antes de enviar.",
                icon: "warning",
                button: "Revisar campos",
            });
            return;
        }

        // Si es válido
        swal({
            title: "¡Publicación exitosa!",
            text: "Su publicación ha sido realizada con éxito.",
            icon: "success",
            button: "OK",
        });
    });

    // Función para validar la imagen
    function validateImage() {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        return imageFile.files.length > 0 && allowedExtensions.test(imageFile.value);
    }

    // Función para validar el video (opcional)
    function validateVideo() {
        const allowedExtensions = /(\.mp4|\.mov|\.avi|\.wmv)$/i;
        return videoFile.files.length > 0 && allowedExtensions.test(videoFile.value);
    }

    // Mostrar mensaje de error
    function showError(inputElement, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "text-danger";
        errorElement.textContent = message;
        inputElement.parentElement.appendChild(errorElement);
    }

    // Limpiar los mensajes de error
    function clearErrorMessages() {
        const errors = document.querySelectorAll(".text-danger");
        errors.forEach(function(error) {
            error.remove();
        });
    }
});


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

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'my_cloud_name', 
  uploadPreset: 'my_preset'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
