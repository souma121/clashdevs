const toggleSwitch = document.getElementById('modeToggle');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

const fontSizeSlider = document.getElementById('fontSize');
const unitSelect = document.getElementById('unitSelect');
const textSample = document.getElementById('textSample');
const sizeDisplay = document.getElementById('sizeDisplay');

function updateFontSize() {
  const size = fontSizeSlider.value;
  const unit = unitSelect.value;
  textSample.style.fontSize = size + unit;
  sizeDisplay.textContent = size;
}

fontSizeSlider.addEventListener('input', updateFontSize);
unitSelect.addEventListener('change', updateFontSize);


updateFontSize();