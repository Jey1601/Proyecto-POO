var admins=[
    {
    usuario:"801200119258",
    contrasena:"1234"
    },
    {
    usuario:"801200119257",
    contrasena:"1234"
    }
]

function login(event){
    const usuario=document.getElementById("adminUser").value;
    const contrasena=document.getElementById("adminPassword").value;

    console.log(usuario);
    console.log(contrasena);
    event.preventDefault();
    admins.forEach(function(admin){
        if(admin.usuario==usuario  && admin.contrasena==contrasena){
            console.log("Acceso exitoso");

          /*  //Guardamos el admin actual ingresado en el local storage
            if (localStorage.getItem('usuario') == null) {
                localStorage.setItem('usuario', JSON.stringify(usuario));
            } else {
                usuario=JSON.parse(localStorage.getItem('usuario'));
            }*/

            window.location.href="./companies.html";
        }else{
            console.log("Acceso Denegado");
        }

       
    })

}