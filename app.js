// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
// y lo agregarán a una lista visible al hacer clic en "Adicionar".
//se crea la lista para almacenar los nombres de los amigos añadidos
let Amigos = [];


function limpiarCaja(){
    document.getElementById('amigo').value='';
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();

    if(nombre === ''){
        alert('ingrese un nombre valido');
        return;
    }
    else{
        Amigos.push(nombre);
        limpiarCaja();
    }
}



