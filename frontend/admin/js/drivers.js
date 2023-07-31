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



function renderDriversList(){
    document.getElementById('driversList').innerHTML="";

    for(let i=1;i<=drivers.length;i++){
        document.getElementById('driversList').innerHTML+=
        `<tr>
            <th scope="row">${i}</th>
            <td>${drivers[i-1].usuario}</td>
            <td>${drivers[i-1].nombre}</td>
            <td>${drivers[i-1].apellidos}</td>
            <td>

                <i onclick="renderInformationDriver(${i-1})" class="fa-solid fa-pen-to-square" style="color: #878787;"></i>
                <i class="fa-solid fa-trash" style="color: #878787;"></i>
            </td>
        </tr>`
    }

}

function renderInformationDriver(usuario){
    const driver=drivers[usuario];
    document.getElementById('driverName').value=drivers[usuario].nombre;
    document.getElementById('driverLastName').value=drivers[usuario].apellidos;
    document.getElementById('driverId').value=drivers[usuario].usuario;
    document.getElementById('driverDirection').value=drivers[usuario].direccion;
    document.getElementById('driverPhone').value=drivers[usuario].telefono;
    document.getElementById('driverEmail').value=drivers[usuario].email;
    document.getElementById('driverPlate').value=drivers[usuario].placa;

}

renderDriversList();