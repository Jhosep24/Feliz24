// Función para reproducir el video
function playVideo() {
    const videoWrapper = document.getElementById('videoWrapper');
    const video = document.getElementById('loveVideo');
  
    videoWrapper.style.display = 'block';
    video.play();
    
    // Ocultar el botón después de reproducir
    document.getElementById('playVideoButton').style.display = 'none';
  }
  