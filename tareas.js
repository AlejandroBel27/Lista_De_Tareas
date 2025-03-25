

let formulario = document.getElementById("form");

formulario.addEventListener("submit", function (e){
    e.preventDefault();
    let automovil = {
        modelo: document.getElementById("modelo").value,
        anio: document.getElementById("anio").value,
        marca: document.getElementById("marca").value,
        serie: document.getElementById("serie").value
    };

    agregarTabla(automovil);

    e.target.reset("");

});

function agregarTabla(automovil) {
    let cuerpo_tabla = document.getElementById("cuerpo_tabla");

    let fila = document.createElement("tr");

    for (let key in automovil){
        let campo = document.createElement("td");
        campo.textContent = automovil[key];
        fila.appendChild(campo);
    }

    let eliminarCelda = document.createElement("td");
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent= "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.addEventListener("click",function(){
        fila.remove();
    });
    eliminarCelda.appendChild(btnEliminar);
    fila.appendChild(eliminarCelda);

    let actualizarCelda = document.createElement("td");
    let btnActualizar = document.createElement("button");
    btnActualizar.textContent = "Actualizar";
    btnActualizar.classList.add("btn-actualizar");
    btnActualizar.addEventListener("click", function () {
        actualizarFila(fila, automovil);
    });
    actualizarCelda.appendChild(btnActualizar);
    fila.appendChild(actualizarCelda);

    cuerpo_tabla.appendChild(fila);

    function actualizarFila(fila, automovil) {
        let nuevoModelo = prompt("Nuevo modelo:", automovil.modelo);
        let nuevoAnio = prompt("Nuevo año:", automovil.anio);
        let nuevaMarca = prompt("Nueva marca:", automovil.marca);
        let nuevaSerie = prompt("Nueva serie:", automovil.serie);
    
        if (nuevoModelo && nuevoAnio && nuevaMarca && nuevaSerie) {
            automovil.modelo = nuevoModelo;
            automovil.anio = nuevoAnio;
            automovil.marca = nuevaMarca;
            automovil.serie = nuevaSerie;
    
            
            let celdas = fila.getElementsByTagName("td");
            celdas[0].textContent = automovil.modelo;
            celdas[1].textContent = automovil.anio;
            celdas[2].textContent = automovil.marca;
            celdas[3].textContent = automovil.serie;
        }
    }
}



/*
const boton = document.getElementById("agregar");

let tareas = [];

boton.onclick = function () {
    agregarTarea();
}

function agregarTarea() {
    let campo = document.getElementById("tareas");

    let tarea = campo.value;

    if (tarea === "") {
        console.log("Contenedor vacio");
    } else {
        let lista = document.getElementById("listas_tareas");
        tareas.push(tarea);
        let li = document.createElement("li");

        li.innerHTML = tarea;

        let boton_actualizar= document.createElement("button");
        boton_actualizar.innerHTML = "Actualizar";
        boton_actualizar.classList.add("btnActualizar");

        boton_actualizar.onclick = function (){
            let nuevaTarea = prompt("Editar Tarea:", tarea);
            if(nuevaTarea !== null && nuevaTarea.trim() !== ""){
                li.firstChild.textContent = nuevaTarea;
            }
        };

        let boton_eliminar = document.createElement("button");

        boton_eliminar.innerHTML = "Eliminar";

        boton_eliminar.classList.add("btneliminar")

        boton_eliminar.onclick= function(){
            lista.removeChild(li);
        }
        li.appendChild(boton_actualizar);
        li.appendChild(boton_eliminar);

        

        lista.appendChild(li);

        campo.value="";
    }
}*/