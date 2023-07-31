var drivers=[
    {
        usuario: "801200119257",
        nombre: "Julio",
        apellidos: "Espinal Guevara",
        direccion: "direccion ficticia",
        telefono: "33281590",
        email: "email@gmail.com",
        placa: "ser1924",
        contrasena: "1234",
        ordenesTomadas: [],
        ordenesEntregadas: []

    },
    {
        usuario: "801200119258",
        nombre: "Julio",
        apellidos: "Lopez Arellano",
        direccion: "Calle Ficticia #123, Ciudad Imaginaria",
        telefono: "33281590",
        email: "julio.espinal@email.com",
        placa: "SER1924",
        contrasena: "secreto123",
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
        contrasena: "clave456",
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
        contrasena: "secreta789",
        ordenesTomadas: [],
        ordenesEntregadas: [
            {
                id: "D567",
                fecha: "2023-07-29",
                producto: "Pasta",
                cantidad: 2
            },
            {
                id: "E432",
                fecha: "2023-07-27",
                producto: "Ensalada",
                cantidad: 1
            },
            {
                id: "F987",
                fecha: "2023-07-25",
                producto: "Hamburguesa",
                cantidad: 3
            }
        ]
    }
]


function login(event){
    const usuario=document.getElementById("loginDriversUser").value;
    const contrasena=document.getElementById("loginDriversPassword").value;

    console.log(usuario);
    console.log(contrasena);
    event.preventDefault();
    drivers.forEach(function(driver){
        if(driver.usuario==usuario  && driver.contrasena==contrasena){
            console.log("Acceso exitoso");


            window.location.href="./mainDrivers.html";
        }else{
            console.log("Acceso Denegado");
        }

       
    })

}