let listaAmigos = []; /* Almacena el nombre de amigos */

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    listaAmigos.push(amigo);
    console.log(listaAmigos);   
}