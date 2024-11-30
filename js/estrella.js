// Datos de las estrellas con sus momentos especiales
const estrellasData = [
  { 
    id: 1, 
    left: '10%', 
    top: '10%', 
    title: 'Eres mi sol en cada amanecer, la razón de mi felicidad. 💖', 
    message: 'Desde que llegaste a mi vida, todo tiene más luz. Eres el sueño que nunca quiero despertar. ✨ Mi vida es más brillante contigo.', 
    photo: 'img/osin.gif', 
    color: '#FF6347',      // Color para el mensaje
    colorTitle: '#FFA500'  // Color para el título (Naranja)
  },
  { 
    id: 2, 
    left: '20%', 
    top: '40%', 
    title: 'Nuestro amor es un corazón que creamos juntos. 💖', 
    message: 'Con cada gesto, con cada sonrisa, construimos un amor único. Tus manos y las mías se entrelazan para formar un lazo eterno. Eres mi todo, y juntos somos invencibles. 💕', 
    photo: 'img/corazon.jpeg', 
    color: '#FF1493',  // Color para el mensaje (un rosa intenso para el amor)
    colorTitle: '#800080'  // Color para el título (un morado para reflejar el romanticismo)
},
  { 
    id: 3, 
    left: '70%', 
    top: '25%', 
    title: 'Cada día contigo es un regalo que me deja sin palabras. 🌹', 
    message: 'Eres todo lo que siempre soñé y mucho más. Estar a tu lado es mi lugar feliz, mi razón para seguir adelante. No hay un solo día que no agradezca tenerte en mi vida. 💖', 
    photo: 'img/osito.jpg', 
    color: '#1E90FF',      // Color para el mensaje
    colorTitle: '#1E3A8A'  // Color para el título (Dorado)
  },
  { 
    id: 4, 
    left: '70%', 
    top: '60%', 
    title: 'Tu belleza no tiene límites, y no solo en tu rostro, sino en cada palabra que dices. 💖', 
    message: 'Cada momento que paso contigo me hace sentir como si estuviera viviendo un sueño. A tu lado, todo es posible, y todo se llena de amor y magia. 💖', 
    photo: 'img/oso.gif', 
    color: '#212121',      // Color para el mensaje
    colorTitle: '#4B0082'  // Color para el título (Índigo)
  },
  { 
    id: 5, 
    left: '20%', 
    top: '80%', 
    title: 'Te amo más allá de las palabras, más de lo que imaginé posible. 💕', 
    message: 'Tus ojos son mi hogar, y tu sonrisa mi paz. No hay nada en este mundo que desee más que estar contigo siempre. Mi vida no tiene sentido sin ti. 🌟', 
    photo: 'img/osito.gif', 
    color: '#5D3F6E',      // Color para el mensaje
    colorTitle: '#D32F2F'  // Color para el título (Índigo)
  }
];

  
  
  // Función para crear estrellas
  // Función para crear estrellas
function crearEstrellas() {
  const mapa = document.querySelector('.mapa-estrellas');
  
  estrellasData.forEach(est => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = est.left;
    star.style.top = est.top;
    star.dataset.id = est.id;

    // Usar el emoji de estrella ⭐
    star.innerHTML = '⭐';
    star.style.fontSize = '40px'; // Tamaño de la estrella
    star.style.cursor = 'pointer'; // Mostrar cursor de puntero
    mapa.appendChild(star);
  });
}

  
  // Mostrar información de la estrella
  // Mostrar información de la estrella en el modal
// Mostrar información de la estrella en el modal
// Mostrar información de la estrella en el modal
function mostrarInfo(id) {
  const estrella = estrellasData.find(est => est.id === parseInt(id));

  if (!estrella) {
    console.error(`No se encontró una estrella con id: ${id}`);
    return;
  }

  const modal = document.getElementById('modal-info');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = '';

  // Crear y agregar el título con color personalizado
  const titleElement = document.createElement('h2');
  titleElement.innerText = estrella.title;
  titleElement.style.color = estrella.colorTitle; // Aplicar color al título
  modalBody.appendChild(titleElement);

  // Crear y agregar el mensaje con color personalizado
  if (estrella.message) {
    const messageElement = document.createElement('p');
    messageElement.innerText = estrella.message;
    messageElement.style.color = estrella.color; // Aplicar color al mensaje
    modalBody.appendChild(messageElement);
  }

  if (estrella.photo) {
    const imageElement = document.createElement('img');
    imageElement.src = estrella.photo;
    imageElement.alt = estrella.title;
    imageElement.style.width = '100%';
    imageElement.style.borderRadius = '10px';
    modalBody.appendChild(imageElement);
  }

  modal.style.display = 'flex';

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}



// Agregar evento a las estrellas
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('star')) {
    const id = e.target.dataset.id;
    mostrarInfo(id);
  }
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-info');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
      const id = e.target.dataset.id;
      console.log(`Se hizo clic en la estrella con id: ${id}`); // Depurar el id
      mostrarInfo(id);
    }
  });
    
  
  
// Agregar evento a las estrellas
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
      const id = e.target.dataset.id;
      mostrarInfo(id);
    }
  });
  
  // Crear las estrellas cuando la página cargue
  crearEstrellas();  

  
  // Función para crear corazones flotantes aleatorios
// Función para crear corazones emoji flotantes aleatorios
function crearCorazones() {
  const totalCorazones = 10; // Cuántos corazones se generarán
  const container = document.body;

  for (let i = 0; i < totalCorazones; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-emoji');
    heart.textContent = '💖'; // Aquí es donde está el emoji del corazón
    heart.style.left = `${Math.random() * 100}vw`; // Posición aleatoria en el eje X
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración más lenta de la animación
    heart.style.animationDelay = `${Math.random() * 5}s`; // Retardo aleatorio
    container.appendChild(heart);
  }
}

// Llamar a la función para crear los corazones al cargar la página
crearCorazones();

