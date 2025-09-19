let listaAmigos = []; /* Almacena el nombre de amigos */

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    
    /*Valida la entrada*/
    if(amigo != ''){
        listaAmigos.push(amigo);
        console.log(listaAmigos);
    } else{
        alert('Por favor, inserte un nombre!');
    }
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}