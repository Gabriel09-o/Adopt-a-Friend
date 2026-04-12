document.getElementById("btnAnalizar").addEventListener("click", async () => {

    const apiKey = document.getElementById("apiKey").value;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: "Di hola" }
                    ]
                }
            ]
        })
    });

    const data = await response.json();

    document.getElementById("resultadoIA").innerText =
        data.candidates?.[0]?.content?.parts?.[0]?.text || JSON.stringify(data);
});