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
let linkBandeja="../WebPages/inbox.html"
let iniciarSesion= "Iniciar Sesión"
let linkIniciarSesion="../WebPages/IniciarSesion.html"
let perfil= "Mi Perfil"
let linkPerfil="../WebPages/perfil.html"
let busqueda= "Búsqueda"
let linkBusqueda="../WebPages/search.html"

const footerBody = document.getElementsByClassName("footerBody").item(0);
const footerStyle = document.getElementsByTagName("head").item(0);



const navBar=`<nav class="navbar navbar-expand-md bg-white ">
        <div class="container-fluid navbar-container">
        <a class="navbar-brand" href="#">
            <!--GuarniApp-->
            <img src="../assets/1.png" alt="GuarniApp Logo">
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
                <a class="nav-link active" aria-current="page" href="${linkFeed}">${feed}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="${linkBandeja}">${bandeja}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="${linkIniciarSesion}">${iniciarSesion}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="${linkPerfil}">${perfil}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="${linkBusqueda}">${busqueda}</a>
            </li>
            
            </ul>
        </div>
        </div>
        </nav>`;


        const styleNav=`<link rel="stylesheet" href="../css/navbarStyle.css">`

        navbody.insertAdjacentHTML("afterbegin",navBar);

        css.insertAdjacentHTML("beforeend",styleNav)
        

window.addEventListener('load', function() {
    const footerHTML=`
        <footer>
    <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" style="justify-content:center;">
        <div class="col">
            <h5 class="footer-title">Guarniapp</h4>
            <ul id="ulc1">
                <li><a href="./feed.html">Inicio</a></li>
            </ul>
        </div>
        <div class="col">
            <h5 class="footer-title">Compañia</h4>
            <ul id="ulc2">
                <li><a href="./contactUs.html">Conocenos</a></li>
                <li><a href="./Mision.html">Misión</a></li>
                <li><a href="./Vision.html">Visión</a></li>
            </ul>
        </div>
        <div class="col">
            <h5 class="footer-title">Soporte</h4>
            <ul id="ulc3">
                <li><a href="./feed.html">Conocenos</a></li>
            </ul>
        </div>
        </div>
    </div>
    </footer>
    `;
    footerBody.insertAdjacentHTML("afterbegin", footerHTML);
    let footercss = `<link rel="stylesheet" href="../css/footerStyle.css">`;
    footerStyle.insertAdjacentHTML("beforeend", footercss);
});


//     headElements.insertAdjacentHTML("afterbeging",headElements)


