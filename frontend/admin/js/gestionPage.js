var gestionCompanie='';
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

gestionCompanie= usuario=JSON.parse(localStorage.getItem('gestionCompanie'));

function renderInformation(){
    let count=-1;
    companies.forEach(function(companie){
        count+=1;
        if(companie.nombre==gestionCompanie){

            
            document.getElementById('containerImgcardInfo').innerHTML="";
            document.getElementById('containerImgcardInfo').innerHTML+=
            ` <img  src="${companie.imagen}" class="card-img-top" alt="...">`;

            document.getElementById('companieName').value=companie.nombre;
            document.getElementById('companieDescripcion').value=companie.descripcion;
            document.getElementById('companieCategory').value=companie.categoria;
            document.getElementById('companieDirection').value=companie.direccion;
            document.getElementById('companiePhone').value=companie.telefono;
            document.getElementById('companieEmail').value=companie.email;

            document.getElementById('productsList').innerHTML="";

            for(let i=1;i<=companie.productos.length;i++){  
                document.getElementById('productsList').innerHTML+=
                `<tr>
                    <th scope="row">${i}</th>
                    <td>${companie.productos[i-1].codigo}</td>
                    <td>${companie.productos[i-1].nombre}</td>
                    <td>${companie.productos[i-1].precio}</td>
                    <td>

                        <i onclick="renderModal(${count},${i-1})"  data-bs-toggle="modal" data-bs-target="#detailProduct" class="fa-solid fa-pen-to-square" style="color: #878787;"></i>
                        <i class="fa-solid fa-trash" style="color: #878787;"></i>
                    </td>
                </tr>`;
            }

        }
    })
}


function renderModal(index1, index2){
    console.log(index1);
    console.log(index2);

    let producto=companies[index1].productos[index2];

    document.getElementById('productModalName').value=producto.nombre;
    document.getElementById('productModalCodigo').value=producto.codigo;
    document.getElementById('productModalDescripcion').value=producto.descripcion;
    document.getElementById('productModalPrecio').value=producto.precio;

}

renderInformation();