document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const icon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        // Vérifie le thème actuel
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        
        if (currentTheme === 'light') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            themeToggleBtn.classList.replace('btn-outline-secondary', 'btn-outline-warning');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            themeToggleBtn.classList.replace('btn-outline-warning', 'btn-outline-secondary');
        }
    });
});