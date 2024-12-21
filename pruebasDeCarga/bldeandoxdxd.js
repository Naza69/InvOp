// Define el payload y los headers para la solicitud POST
const payload = {
    name: "GolpeadorDeMujeres"
};

const headers = {
    'Content-Type': 'application/json'
};

// Función para enviar la solicitud POST usando fetch
async function postPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);

    } catch (error) {
        console.error("Hubo un problema con la solicitud:", error);
    }
}

// Llamada a la función
postPokemon();


const boton = document.getElementById("boton")

boton.addEventListener("click", () => {
    postPokemon()
})