let amigos = []; /* Almacena el nombre de amigos */

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    
    /*Valida la entrada*/
    if(amigo != ''){
        /* Verifica si el amigo ya está en la lista */
        if(amigos.includes(amigo)){
            alert('El amigo ya está en la lista!');
        } else{
            amigos.push(amigo);
            actualizarLista(amigo);
            console.log(amigos);
        }
    } else{
        alert('Por favor, inserte un nombre!');
    }
    limpiarCaja();
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

function actualizarLista(amigo) {
    let elementoHTML = document.querySelector('#listaAmigos');
    elementoHTML.innerHTML += `<li>${amigo}</li>`;
    return;
}
