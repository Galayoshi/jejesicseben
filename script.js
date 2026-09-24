const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');
const imageFrame = document.getElementById('imageFrame');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

if (imageInput && previewImage && imageFrame) {
  imageInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const objectURL = URL.createObjectURL(file);
    previewImage.src = objectURL;
    previewImage.onload = () => URL.revokeObjectURL(objectURL);
    imageFrame.classList.add('has-image');
  });
}

let noScale = 1;

if (noButton) {
  noButton.addEventListener('click', () => {
    noScale += 0.2;
    noButton.style.transform = `scale(${noScale})`;
    noButton.style.marginLeft = `${(Math.random() * 12) - 6}px`;
    noButton.style.marginTop = `${(Math.random() * 12) - 6}px`;
  });
}

if (yesButton) {
  yesButton.addEventListener('click', () => {
    window.location.href = 'letter.html';
  });
}
