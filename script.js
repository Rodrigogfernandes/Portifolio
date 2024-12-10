
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





