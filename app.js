let listaAmigos = []; /* Almacena el nombre de amigos */

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    
    /*Valida la entrada*/
    if(amigo!=''){
        console.log(amigo);
    } else{
        alert('Por favor, inserte un nombre!');
    }
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}