

let formulario = document.getElementById("form");

formulario.addEventListener("submit", function (e) {
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

    cuerpo_tabla.appendChild(fila);
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