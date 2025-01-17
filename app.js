let amigos = [];  

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre.");
    } else {
        amigos.push(nombreAmigo);  // Agregar al array

        document.getElementById('amigo').value = "";  // Limpiar el campo

        // Mostrar la lista actualizada
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  // Limpiar la lista actual
    
    // Recorrer el array y agregar cada amigo a la lista en pantalla
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica si el array está vacío
    if (amigos.length === 0) {
        // Muestra mensaje si no hay amigos
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
    }

    // Selecciona un amigo aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Muestra el amigo sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}

