let navbody= document.getElementsByTagName("body").item(0)
let css= document.getElementsByTagName("head").item(0)
let home= "Inicio"
let linkHome="../index.html"
let sobreNosotros= "Sobre Nosotros"
let linkSobre="../WebPages/aboutUs.html"
let contactanos= "Contactanos"
let linkContactanos="../WebPages/contactUs.html"
let feed= "Feed"
let linkFeed="../WebPages/feed.html"
let bandeja= "Bandejad de Entrada"
let linkBandeja="../WebPages/inbox.html"
let iniciarSesion= "Iniciar Sesion"
let linkIniciarSesion="../WebPages/IniciarSesion.html"
let perfil= "Mi Perfil"
let linkPerfil="../WebPages/perfil.html"
let busqueda= "Busqueda"
let linkBusqueda="../WebPages/search.html"




let navBar=`<div class="container-fluid m-0" style="padding:0">
    <nav class="navbar navbar-expand-md bg-white ">
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
            </nav>
</div>`;


        let styleNav=`<link rel="stylesheet" href="../css/navbarStyle.css">`

        navbody.insertAdjacentHTML("afterbegin",navBar);

        css.insertAdjacentHTML("beforeend",styleNav)
        

// window.addEventListener('load', function() {
//     let footerHTML=`
//     `;
//     footerBody.insertAdjacentElement("afterbegin", footerHTML);

//     let footercss = `<link rel="shylesheet" href="../css/footerStyle.css">`;
//     footerStyle.insertAdjacentElement("beforeend", footercss);
// });


//     headElements.insertAdjacentHTML("afterbeging",headElements)

        

    

