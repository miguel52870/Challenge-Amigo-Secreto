// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
// y lo agregarán a una lista visible al hacer clic en "Adicionar".
//se crea la lista para almacenar los nombres de los amigos añadidos
let Amigos = [];

//esta funcion limpia el cuadro para agregar los nombres
function limpiarCaja(){
    document.getElementById('amigo').value='';
}

//esta funcion agrega elementos a la lista "amigos"
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();


    if(nombre === ''){
        alert('por favor inserte un nombre');
        return;
    }
    else{
        Amigos.push(nombre);
        limpiarCaja();
        mostrarLista();//llama a la funcion para mostrar lista en la interfaz
    }    
}

//se crea una función para actualizar la lista de amigos

function mostrarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i <Amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = Amigos[i];
        lista.appendChild(li);
    }
}



