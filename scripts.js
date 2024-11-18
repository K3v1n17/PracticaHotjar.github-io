document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado!');
});

document.getElementById('primaryAction').addEventListener('click', function() {
    // Redirige a la nueva página
    window.location.href = 'pagina2.html';
});

document.getElementById('secondaryAction').addEventListener('click', function() {
    alert('Acción Secundaria ejecutada.');
});
