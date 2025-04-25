const toggleSwitch = document.getElementById('modeToggle');
const themeStatus = document.getElementById('themeStatus');


document.addEventListener('DOMContentLoaded', () => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
    themeStatus.textContent = 'Current Theme: Dark';
  } else {
    document.body.classList.remove('dark-mode');
    toggleSwitch.checked = false;
    themeStatus.textContent = 'Current Theme: Light';
  }
});


toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    themeStatus.textContent = 'Current Theme: Dark';
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    themeStatus.textContent = 'Current Theme: Light';
  }
});
