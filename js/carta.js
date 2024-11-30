// Carta de amor
const letterText = `
  Mi Querida princesa Kiara, ❤️

  Desde que llegaste a mi vida, mi mundo ha cambiado por completo. Cada día a tu lado es un regalo que agradezco con todo mi corazón. Eres mi sol, mi razón para sonreír, mi refugio en las tormentas y la calma que necesito en los días agitados. Desde que te conocí, supe que mi vida tenía un propósito: hacerte feliz, porque tú eres todo lo que siempre soñé y más. 🌟

  En esta primera semana juntos, quiero que sepas que no hay palabras suficientes para describir lo afortunado que me siento al tenerte a mi lado. Tú, mi princesa, la dueña de mi corazón, eres mi todo. Cada mensaje, cada gesto de amor tuya me llena de una felicidad inmensa. No hay nada que desee más en este mundo que verte sonreír, porque cuando tú sonríes, todo mi mundo se ilumina. 💫

  Mi amor por ti no tiene límites, es un amor profundo, eterno y verdadero. Prometo amarte cada día más, con todo lo que soy, con cada latido de mi corazón. Te prometo que no importa lo que pase en la vida, siempre estaré a tu lado, en las buenas y en las malas, porque eres la persona más importante para mí, y no hay nada que quiera más que compartir toda mi vida contigo. 💖

  Quiero construir un futuro juntos, lleno de amor, risas, y momentos inolvidables. Quiero una familia contigo, compartir los sueños, las alegrías, las lágrimas y todo lo que nos prepare el destino. Pase lo que pase, siempre estaré aquí para ti, para apoyarte, cuidarte, y amarte con todo lo que soy. Porque tú eres mi todo, mi razón de ser, mi amor eterno. 💍

  Gracias por cada momento maravilloso, por cada gesto de amor, por ser tan increíblemente especial. No me canso de agradecerle a la vida por haberte puesto en mi camino. Mi corazón es tuyo, para siempre. 💘

  Te amo más de lo que las palabras pueden expresar, y siempre lo haré. Juntos, por siempre. ❤️

  Con todo mi amor,  
  Jhosep tu principe. 
`;

let i = 0;
function typeLetter() {
  if (i < letterText.length) {
    document.getElementById("loveLetter").innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeLetter, 50); // Velocidad de la escritura
  }
}

if (document.querySelector("#loveLetter")) {
  typeLetter();
}


// Controlar la música
let musicPlaying = false;
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

function toggleMusic() {
  if (musicPlaying) {
    backgroundMusic.pause();
    musicButton.innerHTML = "🎶 Reproducir Música Especial";
  } else {
    backgroundMusic.play();
    musicButton.innerHTML = "🎶 Pausar Música";
  }
  musicPlaying = !musicPlaying;
}
