var empresaActual="";
empresaActual = JSON.parse(localStorage.getItem('empresaActual'));
var companies=[
    {
        nombre: "Empresa x",
        descripcion: "lorem",
        categoria: "Restaurantes",
        direccion: "lorem ipsum",
        telefono: "empresaxy@gamil.com",
        email: "empresaxy@gamil.com",
        puntuacion:3,
        imagen: "https://img.freepik.com/vector-gratis/restaurante-italiano-diseno-plano_23-2147560162.jpg",
        productos: [
            {
                codigo: 1,
                nombre: "Producto",
                descripcion: "lorem ipsum",
                precio: 19.99,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 2,
                nombre: "Producto 2",
                descripcion: "Descripción del Producto 2",
                precio: 25.50,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 3,
                nombre: "Producto 3",
                descripcion: "Descripción del Producto 3",
                precio: 12.75,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 4,
                nombre: "Producto 4",
                descripcion: "Descripción del Producto 4",
                precio: 8.99,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            }
        ]  
    },
    {
        nombre: "Empresa y",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id bibendum risus.",
        categoria: "Farmacias",
        direccion: "Calle Ficticia #123, Ciudad Imaginaria",
        telefono: "123-456-7890",
        email: "contacto@empresaxy.com",
        puntuacion:2,
        imagen: "https://img.freepik.com/vector-gratis/restaurante-italiano-diseno-plano_23-2147560162.jpg",
        productos: [
            {
                codigo: 1,
                nombre: "Producto",
                descripcion: "lorem ipsum",
                precio: 19.99,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 2,
                nombre: "Producto 2",
                descripcion: "Descripción del Producto 2",
                precio: 25.50,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 3,
                nombre: "Producto 3",
                descripcion: "Descripción del Producto 3",
                precio: 12.75,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 5,
                nombre: "Producto 5",
                descripcion: "Descripción del Producto 5",
                precio: 9.99,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            }
        ]  
    },
    {
        nombre: "Empresa z",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id bibendum risus.",
        categoria: "Cafetería",
        direccion: "Calle Ficticia #12, Ciudad Imaginaria",
        telefono: "123-456-7890",
        email: "contacto@empresaxy.com",
        puntuacion:4,
        imagen: "https://img.freepik.com/vector-gratis/restaurante-italiano-diseno-plano_23-2147560162.jpg",
        productos: [
            {
                codigo: 1,
                nombre: "Producto",
                descripcion: "lorem ipsum",
                precio: 19.99,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 2,
                nombre: "Producto 2",
                descripcion: "Descripción del Producto 2",
                precio: 25.50,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 3,
                nombre: "Producto 3",
                descripcion: "Descripción del Producto 3",
                precio: 12.75,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            },
            {
                codigo: 6,
                nombre: "Producto 6",
                descripcion: "Descripción del Producto 6",
                precio: 10.99,
                imagen:"https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
            }
        ]  
    }
]




function renderCompanie(){

    console.log(empresaActual);
    document.getElementById('CompanieName').innerHTML="";
    document.getElementById('CompanieName').innerHTML+=
    `<p>${empresaActual}</p>`;

    

    companies.forEach(function(companie){
        if(companie.nombre== empresaActual){
           
            console.log('la empresa actual es');
            console.log(companie);

            document.getElementById('inicialCompanieInfo').innerHTML="";
            document.getElementById('inicialCompanieInfo').innerHTML+=
            `<div class="col-3">
            <img id="imgActualCompanie" src="${companie.imagen}" alt="">
            </div>
            <div class="col-9">
                <p class="info">${companie.descripcion}</p>
                <div>
                ${addPuntuation(companie.puntuacion)}
                </div>
            </div>`


            document.getElementById('panelProducts').innerHTML="";
            document.getElementById('panelProducts').innerHTML+=renderProducts(companie.productos);
            
            
        }
    })

    
}


function addPuntuation(puntuacion){
    
    let re='';

    for(let i=1;i<=puntuacion;i++){
        re+=' <i class="fa-solid fa-star" style="color: #ffea00;"></i>';
    }
    for(let j=5;j>puntuacion;j--){
        re+=' <i class="fa-solid fa-star" style="color: gray;"></i>';
    }

    return re;
}


function renderProducts(productos){
    let re='';

    productos.forEach(function(producto){
        re+=`<div class="col-12">

        <div class="productCard">
            <div class="productImage">
                <div class="productImageBackground"></div>
                <img src="${producto.imagen}" alt="">
            </div>
            <div class="productInfo">
                <p>${producto.nombre}</p>
                <p class="info">${producto.descripcion}</p>
                <div class="productOptions">
                     <div class="btnProductLarge">${producto.precio}</div>
                     <i type="button" class="fa-solid fa-circle-minus" style="color: #ff6392;"></i>
                     <div class="productQuantity"><p>0</p></div>
                     <i class="fa-solid fa-circle-plus" style="color: #ff6392;"></i>
                     <button class="btnProductLarge">Pedir</button>
                </div>
            </div>
            
        </div>
        
    </div>`
    })
    

    return re;

}

renderCompanie();
