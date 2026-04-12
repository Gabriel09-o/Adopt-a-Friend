document.addEventListener("DOMContentLoaded", () => {
    const botonesDetalles = document.querySelectorAll('.btn-details');

    botonesDetalles.forEach((boton) => {
        boton.addEventListener('click', (e) => {
    
            const nombreMascota = e.target.closest('.request-card').querySelector('h2').textContent;
            const numeroSolicitud = e.target.closest('.request-card').querySelector('p').textContent;
            
            alert(`Abriendo expediente de ${nombreMascota}...\n${numeroSolicitud}`);
        });
    });

    const tarjetas = document.querySelectorAll('.request-card');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', () => {
            tarjeta.style.transform = "scale(1.02)";
            tarjeta.style.transition = "all 0.3s ease";
        });
        tarjeta.addEventListener('mouseleave', () => {
            tarjeta.style.transform = "scale(1)";
        });
    });
});