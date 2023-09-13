let perfil = "ADMINISTRADOR";

if(perfil === " ") {
    console.log("Debe especificar el perfil del usuario");
} else if(perfil === "Administrador" || perfil === "ADMINISTRADOR" || perfil === "administrador"){
    console.log("Usted tiene todos los privilegios del uso del sistema");
} else if (perfil === "Asistente" || perfil === "ASISTENTE" || perfil === "asistente") {
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
} else if(perfil === "Invitado" || perfil === "INVITADO" || perfil === "invitado"){
    console.log("Usted sólo tiene permisos de consultar datos");
} else {
    console.log("Debe especificar un perfil válido");
}