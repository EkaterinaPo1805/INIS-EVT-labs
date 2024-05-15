document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const lightIcon = document.querySelector('.profile-image');
    const darkIcon = document.querySelector('.profile-image-dark');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        let theme = 'light-theme';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark-theme';
        }
        localStorage.setItem('theme', theme);
    }

    lightIcon.addEventListener('click', toggleTheme);
    darkIcon.addEventListener('click', toggleTheme);
});

