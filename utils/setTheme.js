const theme = document.getElementById('theme');

theme.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  theme.classList.remove('icon-sun', 'icon-moon');

  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('website-theme', 'light-mode');
    theme.classList.add('icon-sun');
  } else {
    localStorage.setItem('website-theme', 'default');
    theme.classList.add('icon-moon');
  }
})

function retrieveTheme() {
  const actualTheme = localStorage.getItem('website-theme');

  if (actualTheme != null) {
    document.body.classList.remove('default', 'light-mode');
    document.body.classList.add(actualTheme);

    theme.classList.remove('icon-sun', 'icon-moon');

    if (actualTheme == 'default') {
      theme.classList.add('icon-moon');
    } else {
      theme.classList.add('icon-sun');
    }
    theme.classList.add('icon-moon');
  }
}
retrieveTheme();

window.addEventListener('storage', () => {
  retrieveTheme();
}, false)