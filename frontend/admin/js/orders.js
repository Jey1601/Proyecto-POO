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


function renderOrders() {

    document.getElementById('ordersList').innerHTML="";
    let count=0;
    for(let i=0;i<users.length;i++){
        for(let j=1;j<=users[i].ordenes.length;j++){

            if(users[i].ordenes[j-1].estado=="pendiente"){
                count+=1;
                document.getElementById('ordersList').innerHTML+=
                    `<tr>
                        <th scope="row">${count}</th>
                        <td>${users[i].ordenes[j-1].idOrden}</td>
                        <td>${users[i].ordenes[j-1].idUsuario}</td>
                        <td>${users[i].nombre}</td>
                        <td>${users[i].apellidos}</td>
                        <td>
                            <i type="button" data-bs-toggle="modal" data-bs-target="#detailOrderModal" class="fa-solid fa-eye" style="color: #878787;"></i>
                            <i  type="button" data-bs-toggle="modal" data-bs-target="#selectDelivery" class="fa-solid fa-truck" style="color: #878787;"></i>
                            <i class="fa-solid fa-trash" style="color: #878787;"></i>
                        </td>
                    </tr>`;

            }
            

        }
        
    }
}




function renderDriversList(){
    document.getElementById('driversList').innerHTML="";

    for(let i=1;i<=drivers.length;i++){
        document.getElementById('driversList').innerHTML+=
        `<tr>
            <th scope="row">${i}</th>
            <td>${drivers[i-1].usuario}</td>
            <td>${drivers[i-1].nombre}</td>
            <td>${drivers[i-1].apellidos}</td>
           
        </tr>`
    }

}


renderDriversList();
renderOrders();