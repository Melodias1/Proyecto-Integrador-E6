let navbody= document.getElementsByTagName("body").item(0)
let css= document.getElementsByTagName("head").item(0)
let home= "Inicio"
let linkHome="../index.html"
let sobreNosotros= "Sobre Nosotros"
let linkSobre="../WebPages/aboutUs.html"
let contactanos= "Contáctanos"
let linkContactanos="../WebPages/contactUs.html"
let feed= "Feed"
let linkFeed="../WebPages/feed.html"
let bandeja= "Bandeja de Entrada"
let linkBandeja="../WebPages/feed.html"
let iniciarSesion= "Iniciar Sesión"
let linkIniciarSesion="../WebPages/registroUsuarios.html"
let perfil= "Mi Perfil"
let linkPerfil="../WebPages/perfil.html"
let busqueda= "Búsqueda"
let linkBusqueda="../WebPages/search.html"
let navBar="";

const footerBody = document.getElementsByClassName("footerBody").item(0);
const footerStyle = document.getElementsByTagName("head").item(0);






        const styleNav=`<link rel="stylesheet" href="../css/navbarStyle.css">`


        css.insertAdjacentHTML("beforeend",styleNav)
        

window.addEventListener('load', function() {
    const footerHTML=`
        <footer>
    <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" style="justify-content:center;">
        <div class="col">
            <h5 class="footer-title">Guarniapp</h4>
            <ul id="ulc1">
                <li><a href="../index.html">Inicio</a></li>
            </ul>
        </div>
        <div class="col">
            <h5 class="footer-title">Compañía</h4>
            <ul id="ulc2">
                <li><a href="../WebPages/aboutUs.html">Conócenos</a></li>
                <li><a href="../WebPages/Mision.html">Misión</a></li>
                <li><a href="../WebPages/Vision.html">Visión</a></li>
            </ul>
        </div>
        <div class="col">
            <h5 class="footer-title">Soporte</h4>
            <ul id="ulc3">
                <li><a href="../WebPages/contactUs.html">Contáctanos</a></li>
            </ul>
        </div>
        </div>
        <div class="footer-logo">
        <a href="https://github.com/Melodias1/Proyecto-Integrador-E6" target="_blank">
        <img src="../assets/logotipo-de-github.png" alt="GitHub Logo" class="github-logo">
        </a>
        </div>
    </div>
    </footer>
    `;
    footerBody.insertAdjacentHTML("afterend", footerHTML);
    let footercss = `<link rel="stylesheet" href="../css/footerStyle.css">`;
    footerStyle.insertAdjacentHTML("beforeend", footercss);
});


//     headElements.insertAdjacentHTML("afterbeging",headElements)

// validacion si hay un usuario logueado, de haberlo carga la primera navbar, de no haberlo carga la segunda
if(localStorage.getItem('usuarioLoged')!=null){
    const userLogged = JSON.parse(localStorage.getItem('usuarioLoged'));
    const userName = userLogged.nombre;

     navBar=`<nav class="navbar navbar-expand-md bg-white ">
        <div class="container-fluid navbar-container">
        
        <a class="navbar-brand" href="#">
            <!--GuarniApp-->
            <img src="../assets/logo_guarniapp-removebg-preview.png" alt="GuarniApp Logo"> 
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav m-auto">

            <li class="nav-item">
                <a class="nav-link active " href="${linkHome}">${home}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="${linkSobre}">${sobreNosotros}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${linkContactanos}">${contactanos}</a>
            </li>
           
            <li class="nav-item">
                <a class="nav-link active" href="${linkBandeja}">${bandeja}</a>
            </li>
            
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
            <span>Bienvenido, ${userName}</span>
            </div>
            
            </ul>
        </div>
              <button id="btnExit"></button>
        </div>
        
        </nav>`;

        //===desloguear al clickear btnExit, borra al usuario logueado y redirije al registro/inicio=====


}else{
    navBar=`<nav class="navbar navbar-expand-md bg-white ">
    <div class="container-fluid navbar-container">
    
    <a class="navbar-brand" href="#">
        <!--GuarniApp-->
        <img src="../assets/logo_guarniapp-removebg-preview.png" alt="GuarniApp Logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav m-auto">

        <li class="nav-item">
            <a class="nav-link active " href="${linkHome}">${home}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="${linkSobre}">${sobreNosotros}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${linkContactanos}">${contactanos}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="${linkIniciarSesion}">${iniciarSesion} </a>
        </li>
        
        
        
        </ul>
    </div>
    </div>
    
    </nav>`;
}

navbody.insertAdjacentHTML("afterbegin",navBar);
let btnExit= document.getElementById('btnExit');
if(btnExit!=null){
    btnExit.addEventListener('click',(event)=>{
        event.preventDefault;
    
        localStorage.removeItem('usuarioLoged')
        window.location='../WebPages/registroUsuarios.html';
    })
}
