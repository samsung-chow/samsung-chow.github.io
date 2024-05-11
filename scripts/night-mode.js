const toggleButton = document.getElementById('dark-mode-toggle')
const toggleButtonIcon = document.getElementById('dark-mode-toggle-icon')
const body = document.body;

// Check if the browser's preferred color scheme is dark
function isDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
if (isDarkMode()) {
  body.classList.toggle('dark-mode');
  toggleButtonIcon.src = 'pictures/night-mode/sun.png';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      toggleButtonIcon.src = 'pictures/night-mode/sun.png';
    } else {
      toggleButtonIcon.src = 'pictures/night-mode/moon.svg';
    }
});
