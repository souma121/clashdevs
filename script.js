const toggleSwitch = document.getElementById('modeToggle');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
