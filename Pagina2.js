let mascotaSeleccionada = null;

function seleccionarMascota(id, nombre, especie, salud) {
    mascotaSeleccionada = { id, nombre, especie, salud };
    document.getElementById('resultadoIA').innerText = `Mascota seleccionada: ${nombre}. Ahora ingresa tu API Key y presiona el botón morado.`;
    
    const btnAdopcion = document.getElementById('btnIrAdopcion');
    if (btnAdopcion) {
        btnAdopcion.innerText = `Continuar con la Adopción de ${nombre}`;
    }
}

document.getElementById('btnAnalizar').addEventListener('click', async () => {
    const apiKey = document.getElementById('apiKey').value.trim();
    const visualResult = document.getElementById('resultadoIA');

    if (!apiKey) {
        alert("Por favor, ingresa tu API Key de Gemini");
        return;
    }

    if (!mascotaSeleccionada) {
        alert("Primero selecciona una mascota de la tabla");
        return;
    }

    visualResult.innerText = "Conectando con Gemini... Por favor espera.";

    // 1. Definimos la URL correcta
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    try {
        // 2. USAMOS la variable 'url' aquí (Antes tenías el texto largo otra vez)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ 
                        text: `Eres un experto en comportamiento animal. Haz un análisis corto (máximo 4 párrafos) sobre la personalidad y cuidados de un ${mascotaSeleccionada.especie} llamado ${mascotaSeleccionada.nombre} que se encuentra en estado: ${mascotaSeleccionada.salud}. Sé amable y motiva a la adopción.` 
                    }]
                }]
            })
        });

        const data = await response.json();

        if (response.ok && data.candidates && data.candidates[0]) {
            const textoIA = data.candidates[0].content.parts[0].text;
            visualResult.innerText = textoIA;
        } else {
            // Si hay error, te dirá exactamente qué dice Google
            console.error("Error detallado:", data);
            visualResult.innerText = "Error: " + (data.error ? data.error.message : "La IA no respondió correctamente.");
        }

    } catch (error) {
        console.error("Error de conexión:", error);
        visualResult.innerText = "Hubo un error de conexión. Asegúrate de usar Live Server.";
    }
});