// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
        const inputNombre = document.getElementById('nombreAmigo');
        const btnAgregar = document.getElementById('btnAgregar');
        const btnSortear = document.getElementById('btnSortear');
        const amigosList = document.getElementById('amigosList');
        const resultado = document.getElementById('resultado');

        btnAgregar.addEventListener('click', () => {
            const nombre = inputNombre.value.trim();
            if (nombre === '') {
                alert('Por favor, ingresa un nombre válido.');
                return;
            }
            amigos.push(nombre);
            inputNombre.value = '';
            mostrarListaAmigos();
        });

        btnSortear.addEventListener('click', () => {
            if (amigos.length === 0) {
                alert('No hay amigos para sortear. Agrega nombres primero.');
                return;
            }
            const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
            resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
        });

        function mostrarListaAmigos() {
            amigosList.innerHTML = '';
            amigos.forEach(amigo => {
                const li = document.createElement('li');
                li.textContent = amigo;
                amigosList.appendChild(li);
            });
        }