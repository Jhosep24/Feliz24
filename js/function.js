// Mostrar el modal de sorpresa
function showSurprise() {
    const modal = document.getElementById('surpriseModal');
    modal.style.display = 'block';
  }
  
  // Cerrar el modal
  function closeModal() {
    const modal = document.getElementById('surpriseModal');
    modal.style.display = 'none';
  }
  
  // Contador de días
  function calculateDays() {
    const startDate = new Date('2024-11-24T00:00:00'); // Fecha de inicio (medianoche)
    const today = new Date(); // Fecha actual
    today.setHours(0, 0, 0, 0); // Elimina horas, minutos y segundos
    
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById('daysCount').innerText = diffDays;
  }
  
  // Reproducir o pausar música
  let isPlaying = false;
  function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const button = document.getElementById('musicButton');
    if (isPlaying) {
      music.pause();
      button.innerText = '🎶 Reproducir Canción Especial';
    } else {
      music.play();
      button.innerText = '⏸️ Pausar Canción Especial';
    }
    isPlaying = !isPlaying;
  }
  
  document.addEventListener('DOMContentLoaded', calculateDays);
  

  // Mostrar el modal de sorpresa
function showSurprise() {
    const modal = document.getElementById('surpriseModal');
    const backdrop = document.getElementById('modalBackdrop');
    modal.style.display = 'block'; // Muestra el modal
    backdrop.style.display = 'block'; // Muestra el fondo nublado
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById('surpriseModal');
    const backdrop = document.getElementById('modalBackdrop');
    modal.style.display = 'none'; // Oculta el modal
    backdrop.style.display = 'none'; // Oculta el fondo nublado
}


// Función para generar corazones flotantes
// Función para generar corazones flotantes
// Función para generar corazones flotantes
function generateHearts() {
  const heartsContainer = document.querySelector('.hearts');
  
  // Crear un número aleatorio de corazones (reducido)
  const numHearts = 5 + Math.floor(Math.random() * 5); // Genera entre 3 y 5 corazones

  for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');

      // Insertamos el emoji de corazón dentro del div
      heart.innerHTML = '❤️';

      // Posicionarlos aleatoriamente dentro de toda la pantalla
      heart.style.left = `${Math.random() * 100}%`; // Posición aleatoria horizontal
      heart.style.bottom = `${Math.random() * 100}%`; // Posición aleatoria vertical
      heart.style.animationDuration = `${5 + Math.random() * 5}s`; // Duración aleatoria

      heartsContainer.appendChild(heart);

      // Eliminar el corazón después de que termine su animación
      setTimeout(() => {
          heart.remove();
      }, 10000); // Lo elimina después de 10 segundos
  }
}

// Generar corazones flotantes cada 5 segundos (intervalo más grande)
setInterval(generateHearts, 5000);



