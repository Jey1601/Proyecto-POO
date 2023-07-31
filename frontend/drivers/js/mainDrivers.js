var users=[
    {
        id: 1,
        nombre: "Juan Fernando",
        apellidos: "Perez Sosa",
        email: "Juan@Gmail.com",
        telefono: "99346961",
        contrasena: "1234",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Henry_Cavill_by_Gage_Skidmore_2.jpg",
        ordenes: [
            {
                idOrden: 1,
                idUsuario: 1,
                estado: "pendiente",
                productos: [
                    {
                        codigo: 1,
                        nombre: "Producto",
                        descripcion: "lorem ipsum",
                        precio: 19.99,
                        imagen: "https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
                    },
                    {
                        codigo: 2,
                        nombre: "Producto 2",
                        descripcion: "Descripción del Producto 2",
                        precio: 25.50,
                        imagen: "https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
                    },
                    {
                        codigo: 3,
                        nombre: "Producto 3",
                        descripcion: "Descripción del Producto 3",
                        precio: 12.75,
                        imagen: "https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg?t=st=1690763398~exp=1690763998~hmac=ad75b7a16925919809e46a23c0e2bc001265ed7a7ba24417f01f87c05cb0dc74"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: "María José",
        apellidos: "Gómez López",
        email: "mariajose@email.com",
        telefono: "77712345",
        contrasena: "1234",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Emma_Watson_2013_%28Cropped%29.jpg",
        ordenes: [
            {
                idOrden: 2,
                idUsuario: 2,
                estado: "entregada",
                productos: [
                    {
                        codigo: 4,
                        nombre: "Producto 4",
                        descripcion: "Descripción del Producto 4",
                        precio: 8.99
                    },
                    {
                        codigo: 5,
                        nombre: "Producto 5",
                        descripcion: "Descripción del Producto 5",
                        precio: 14.50
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: "Carlos Alberto",
        apellidos: "Ramírez Hernández",
        email: "carlos@email.com",
        telefono: "55598765",
        contrasena: "1234",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/3/30/Chris_Evans_by_Gage_Skidmore.jpg",
        ordenes: [
            {
                idOrden: 3,
                idUsuario: 3,
                estado: "pendiente",
                productos: [
                    {
                        codigo: 6,
                        nombre: "Producto 6",
                        descripcion: "Descripción del Producto 6",
                        precio: 9.99
                    }
                ]
            },
            {
                idOrden: 4,
                idUsuario: 3,
                estado: "entregada",
                productos: [
                    {
                        codigo: 7,
                        nombre: "Producto 7",
                        descripcion: "Descripción del Producto 7",
                        precio: 12.25
                    },
                    {
                        codigo: 8,
                        nombre: "Producto 8",
                        descripcion: "Descripción del Producto 8",
                        precio: 18.75
                    }
                ]
            }
        ]
    }
]


function renderOrders() {

    document.getElementById('panelOrders').innerHTML="";
    document.getElementById('panelOrders').innerHTML+=
    ` <div class="ordersHeader ">
    <p class="ordersHeaderItem">#Orden</p>
    <p class="ordersHeaderItem">Nombre</p>
    <p class="ordersHeaderItem">Apellidos</p>
    <p class="ordersHeaderItem">Opciones</p>
    </div>`


    for(let i=0;i<users.length;i++){
        for(let j=1;j<=users[i].ordenes.length;j++){

            if(users[i].ordenes[j-1].estado=="pendiente"){
               
                    document.getElementById('panelOrders').innerHTML+=
                    `<div class="freeOrderCard">
                    <p class="itemOrderCard">${users[i].ordenes[j-1].idOrden}</p>
                    <p class="itemOrderCard">${users[i].nombre}</p>
                    <p class="itemOrderCard"> ${users[i].apellidos}</p>
                    <button data-bs-toggle="modal" data-bs-target="#detailOrderModal"><i class="fa-solid fa-eye"
                            style="color: #8c8c8c;"></i></button>
                   </div>`;
            }
            

        }
        
    }
}


renderOrders();
