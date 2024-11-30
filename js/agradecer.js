// Función para reproducir música de fondo cuando la página carga
window.addEventListener('load', () => {
    let music = document.getElementById('backgroundMusic');
    music.play();
    music.volume = 0.5; // Ajuste del volumen
  });
  
  // Agregar más interactividad a los mensajes
  let mensajes = document.querySelectorAll('.message-container');
  let delay = 0;
  
  mensajes.forEach((mensaje, index) => {
    setTimeout(() => {
      mensaje.style.opacity = '1';
      mensaje.style.transform = 'translateY(0)';
    }, delay);
    delay += 1000; // Incrementar el retraso para la animación de cada mensaje
  });
  

// Obtener el modal y el corazón grande
var modal = document.getElementById("myModal");
var heartBig = document.getElementById("heartBig");
var span = document.getElementById("closeModal");

// Cuando se haga clic en el corazón grande, mostrar el modal
heartBig.onclick = function() {
  modal.style.display = "block";
}

// Cuando se haga clic en (x), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando se haga clic fuera del modal, también cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const textElement = document.getElementById('typed-text');
const phrases = [
  'Kiara y Jhosep 💖💙',
  'Por siempre y para siempre 💞'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (!isDeleting) {
    textElement.innerText = currentPhrase.slice(0, charIndex++);
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Pausa antes de empezar a borrar
    } else {
      setTimeout(typeEffect, 150); // Velocidad de escritura
    }
  } else {
    textElement.innerText = currentPhrase.slice(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Cambiar a la siguiente frase
      setTimeout(typeEffect, 500); // Pausa antes de escribir de nuevo
    } else {
      setTimeout(typeEffect, 100); // Velocidad de borrado
    }
  }
}

// Iniciar el efecto de escritura
typeEffect();

