const guardarContacto =(db,contacto) =>{
    db.setItem(contacto.id,JSON.stringify(contacto));
    window.location.href='/';
} 

const cargarContactos =(db,parentNode)=>{
    let clave = Object.keys(db);
    
    for(cla of clave){
        let contacto = JSON.parse(db.getItem(cla));
        crearContacto(parentNode,contacto,db);
    }
}

const crearContacto=(parentNode,contacto,db)=>{
    let divContacto = document.createElement('div');
    let nombre = document.createElement('h3');
    let numero = document.createElement('p');
    let direccion = document.createElement('p');
    let iconoBorrar = document.createElement('span'); 
    
    nombre.innerHTML = contacto.nombre;
    numero.innerHTML = contacto.telefono;
    direccion.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete';

    divContacto.classList.add('tarea');
    iconoBorrar.classList.add('material-symbols-outlined','icono');

    iconoBorrar.onclick= ()=>{
        db.removeItem(contacto.id);
        window.location.href='/';
    }

    divContacto.appendChild(nombre);
    divContacto.appendChild(numero);
    divContacto.appendChild(direccion);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);

}