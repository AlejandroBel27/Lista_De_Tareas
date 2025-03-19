
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
}