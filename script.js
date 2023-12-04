const nombre = document.getElementById('nombre');
const telefono = document.getElementById("numero");
const direccion = document.getElementById("direccion");
const agregarTarea = document.getElementById("agregar");
const emty = document.querySelector(".emty");
listadoTarea = document.querySelector(".listado-tarea");

const db = window.localStorage;

agregarTarea.onclick = () =>{
    let contacto ={
        id: Math.random(1,100),
        nombre:nombre.value,
        telefono: telefono.value,
        direccion: direccion.value,

}

    guardarContacto(db,contacto);
}
cargarContactos(db,listadoTarea);