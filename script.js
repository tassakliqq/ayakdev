function changeText() {
  const textElement = document.querySelector('.changing-text');
  const texts = ['MAVİ AGLAMA', 'MAVİ ZIRLAMA'];
  let currentIndex = 0;

  setInterval(() => {
    textElement.classList.add('fade');
    
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      textElement.textContent = texts[currentIndex];
      textElement.classList.remove('fade');
    }, 500);
    
  }, 1000); 
}

document.addEventListener('DOMContentLoaded', changeText);
