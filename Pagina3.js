document.addEventListener("DOMContentLoaded", () => {
    const botonEnviar = document.querySelector('.btn-submit');
    const inputsFormulario = document.querySelectorAll('.adoption-form input, .adoption-form textarea');

    botonEnviar.addEventListener('click', () => {
        let hayCamposVacios = false;

        inputsFormulario.forEach(campo => {
            if (campo.value.trim() === "") {
                hayCamposVacios = true;
                campo.classList.add('campo-error'); // Agregamos la clase de error
            } else {
                campo.classList.remove('campo-error'); // Quitamos la clase si ya escribió
            }
        });

        if (hayCamposVacios) {
            alert("Completa los campos para continuar con la adopción.");
        } else {
            alert("¡Solicitud enviada con éxito!");
        }
        // En el else del script.js (cuando todo está lleno)
alert("¡Solicitud enviada con éxito!");
window.location.href = "Pagina4.html"; // Esto te lleva a la otra página
    });
});