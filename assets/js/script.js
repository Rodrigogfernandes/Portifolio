
document.querySelectorAll('.acordeon').forEach(button => {
    button.addEventListener('click', () => {

        button.classList.toggle('open');

        const info = button.nextElementSibling;

        if (info.classList.contains('hidden')) {
            info.classList.remove('hidden');
        } else {
            info.classList.add('hidden');
        }
    });
});

// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
        // Here you could send the data to a server, but for now, just show alert
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});





