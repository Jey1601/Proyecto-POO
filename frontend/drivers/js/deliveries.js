var drivers=[
    {
        usuario: "801200119257",
        nombre: "Julio",
        apellidos: "Espinal Guevara",
        direccion: "direccion ficticia",
        telefono: "33281590",
        email: "email@gmail.com",
        placa: "ser1924",
        contraseña: "1234",
        ordenesTomadas: [],
        ordenesEntregadas: [
            {
                idOrden: 0,
                idUsuario: 1,
                estado: "entregada",
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
        usuario: "801200119258",
        nombre: "Julio",
        apellidos: "Lopez Arellano",
        direccion: "Calle Ficticia #123, Ciudad Imaginaria",
        telefono: "33281590",
        email: "julio.espinal@email.com",
        placa: "SER1924",
        contraseña: "secreto123",
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        usuario: "801200119259",
        nombre: "María",
        apellidos: "González Pérez",
        direccion: "Av. Falsa #456, Pueblo Imaginado",
        telefono: "55512345",
        email: "maria.gonzalez@email.com",
        placa: "ABC9876",
        contraseña: "clave456",
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        usuario: "801200119260",
        nombre: "Carlos",
        apellidos: "López Ramírez",
        direccion: "Carrera Imaginaria #789, Villa Soñada",
        telefono: "77798765",
        email: "carlos.lopez@email.com",
        placa: "XYZ1234",
        contraseña: "secreta789",
        ordenesTomadas: [],
        ordenesEntregadas: [ ]
    }
]

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

       drivers[0].ordenesEntregadas.forEach(function(orden){
        users.forEach(function(user){
            if(user.id==orden.idUsuario){
                document.getElementById('panelOrders').innerHTML+=
                    `<div class="takeOrderCard">
                    <p class="itemOrderCard">${orden.idOrden}</p>
                    <p class="itemOrderCard">${user.nombre}</p>
                    <p class="itemOrderCard"> ${user.apellidos}</p>
                    <button data-bs-toggle="collapse" href="#hola" role="button" aria-expanded="false"
                    aria-controls="hola"><i class="fa-solid fa-eye" style="color: #8c8c8c;"></i></button>
            </div>
            <div class="collapse" id="hola">
                <div class="card card-body">
                    
                    <button data-bs-toggle="modal" data-bs-target="#invoiceModal" type="button" class="btn-proceed">Ver Factura</button>
                </div>
            </div>
        </div>`;
            }
        })


       })
    
       
        
    }


renderOrders();