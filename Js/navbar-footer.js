let navbody= document.getElementsByClassName("navbody").item(0)
let css= document.getElementsByTagName("head").item(0)
let home= "Inicio"
let linkHome="../WebPages/Inicio"
let sobreNosotros= "Sobre Nosotros"
let linkSobre="../WebPages/aboutUs.html"
let contactanos= "Contáctanos"
let linkContactanos="../WebPages/contactUs.html"
let bandeja= "Publicaciones"
let linkBandeja="../WebPages/publicaciones.html"
let iniciarSesion= "Iniciar Sesión"
let linkIniciarSesion="../WebPages/IniciarSesion.html"
let perfil= "Mi Perfil"
let linkPerfil="../WebPages/miperfil.html"
let feed= "Registro Usuarios"
let linkFeed="../WebPages/Registro Usuarios.html"
let busqueda= "Búsqueda"
let linkBusqueda="../WebPages/search.html"

let navBar=`<nav class="navbar navbar-expand-md bg-white ">
        <div class="container-fluid navbar-container">
        <a class="navbar-brand" href="#">
            <!--GuarniApp-->
            <img src="../assets/1.png" alt="GuarniApp Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

            <li class="nav-item">
                <a class="nav-link active" href="${linkHome}">${home}</a>
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


        let styleNav=`<link rel="stylesheet" href="../css/navbar.css">`

        navbody.insertAdjacentHTML("afterbegin",navBar);

        css.insertAdjacentHTML("beforeend",styleNav)
        




//     headElements.insertAdjacentHTML("afterbeging",headElements)

        

    

