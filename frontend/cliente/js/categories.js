var categorias = [
    {
        nombre: "Restaurantes",
        imagen: "../cliente/assets/images/restaurantes.png"
    },
    {
        nombre: "Farmacias",
        imagen: "../cliente/assets/images/farmacias.png"
    },
    {
        nombre: "Cafetería",
        imagen: "https://w7.pngwing.com/pngs/214/523/png-transparent-illustration-of-open-coffee-shop-coffee-cafe-fast-food-map-coffee-shop-text-cartoon-hand-painted-logo.png"
    }
]

var usuario = {};

var categoriaActual='';

if (localStorage.getItem('usuario') == null) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
} else {
    usuario = JSON.parse(localStorage.getItem('usuario'));
}

function renderCategorias() {

    let palabras = usuario.nombre.split(" "); // Divide la cadena en un array de palabras
    let primeraPalabra = palabras[0];

    document.getElementById('welcomeCategories').innerHTML = "";
    document.getElementById('welcomeCategories').innerHTML +=
        ` <p>¡Hola ${primeraPalabra}!</p>
    <p>¿Qué te llevamos hoy?</p>`

    document.getElementById('containerCategories').innerHTML = "";
    document.getElementById('containerCategories').innerHTML +=
        `<div class="row sloganCategories">
    <div class="col">
        <p>¡Aquí encontrarás todo lo que quieras!</p>
    </div>
    </div>`;

    document.getElementById('containerCategories').innerHTML +=createCategories();
    

 
}

function createCategories(){
    let re='<div id="Panel" class="row">';

    categorias.forEach(function (categoria) {
        re +=
            ` <div class="col-6">

        <div onclick="openCategorie('${categoria.nombre}')" class="categorieCard">
            <div class="categorieImage">
                <div class="categorieImageBackground"></div>
                <img src="${categoria.imagen}" alt="">
            </div>
            <p>${categoria.nombre}</p>
        </div>
        
         </div>`
    })
    re+='</div>'

    return re;
}


function openCategorie(nombre){

   
   categoriaActual=nombre;

       
        localStorage.setItem('categoriaActual', JSON.stringify(categoriaActual));
      
    
    window.location.href="./companies.html";
}

renderCategorias();


