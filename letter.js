const letterText = document.getElementById('loveLetter');
const saveButton = document.getElementById('saveButton');

const saved = localStorage.getItem('loveLetter');
if (saved) {
  letterText.value = saved;
}

letterText.addEventListener('input', () => {
  localStorage.setItem('loveLetter', letterText.value);
});

saveButton.addEventListener('click', () => {
  localStorage.setItem('loveLetter', letterText.value);
  saveButton.textContent = 'Guardado';
  setTimeout(() => {
    saveButton.textContent = 'Guardar';
  }, 1200);
});
