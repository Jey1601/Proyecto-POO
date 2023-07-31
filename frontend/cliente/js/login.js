var usuarios=[
    {
        id: 1,
        nombre: "Juan Fernando",
        apellidos: "Perez Sosa",
        email: "juan@Gmail.com",
        telefono: "99346961",
        contrasena: "123456",
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
                        precio: 19.99
                    },
                    {
                        codigo: 2,
                        nombre: "Producto 2",
                        descripcion: "Descripción del Producto 2",
                        precio: 25.50
                    },
                    {
                        codigo: 3,
                        nombre: "Producto 3",
                        descripcion: "Descripción del Producto 3",
                        precio: 12.75
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




function login(event){
    const email=document.getElementById("loginClientEmail").value;
    const contrasena=document.getElementById("loginClientPassword").value;

    var myAlert = document.getElementById('alertLogin');
    var bsAlert = new bootstrap.Alert(myAlert);

    console.log(email);
    console.log(contrasena);
    event.preventDefault();
    usuarios.forEach(function(usuario){
        if(usuario.email==email && usuario.contrasena==contrasena){
            console.log("Acceso exitoso");

            //Guardamos el usuario actual ingresado en el local storage
            if (localStorage.getItem('usuario') == null) {
                localStorage.setItem('usuario', JSON.stringify(usuario));
            } else {
                usuario=JSON.parse(localStorage.getItem('usuario'));
            }

            window.location.href="./categories.html";
            return
        }else{
           bsAlert.show;
        }

       
    })

}