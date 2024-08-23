document.getElementById("flecha_forward").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prueba");

  let respuestas = [];

  let cualidades = document.querySelector('input[name="question1"]:checked');
  if (cualidades) {
    console.log(cualidades.value);
    respuestas.push(cualidades.value);
  }

  let comida = document.querySelector('input[name="question2"]:checked');
  if (comida) {
    console.log(comida.value);
    respuestas.push(comida.value);
  }

  let poderes = document.querySelector('input[name="question3"]:checked');
  if (poderes) {
    console.log(poderes.value);
    respuestas.push(poderes.value);
  }

  let niveles = document.querySelector('input[name="question4"]:checked');
  if (niveles) {
    console.log(niveles.value);
    respuestas.push(niveles.value);
  }

  console.log(respuestas);

  if (respuestas.length == 4) {
    let character = getRandom(respuestas);
    let chosen = characters[character];
    console.log(chosen);
    document.getElementById("title_res").textContent = chosen.title;
    document.getElementById("text_res").textContent = chosen.text;
    document.getElementById("img_res").src = chosen.img;
  }
});

let characters = {
  YS: {
    title: "¡TU COMPAÑERO ES YOSHI!",
    text: "¿Quién no ha soñado con tener un dinosaurio amigable y saltarín como Yoshi a su lado en las aventuras de Mario Bros? Estesimpático personaje, con su lengua pegajosa y su capacidad para escupir huevos, está dispuesto a ayudarte en sus misiones, enfrentando a los enemigos más temibles con valentía y entusiasmo.",
    img: "images/Yoshi.png",
  },

  NB: {
    title: "¡TU COMPAÑERO ES NABBIT!",
    text: "  Nabbit, con su capacidad única de volverse intangible, sería un aliado estratégico invaluable en el Reino Champiñón. Podría infiltrarse en áreas restringidas, activar interruptores fuera de nuestro alcance y distraer a los enemigos mientras buscas una ruta alternativa. ¡Con Nabbit a tu lado, ningún desafío sería demasiado grande!",
    img: "images/Nabbit.png",
  },

  GB: {
    title: "¡TU COMPAÑERO ES GOOMBA!",
    text: "Aunque los Goombas suelen ser enemigos de Mario, podrías aprovechar sus habilidades únicas. Por ejemplo, un Goomba podría servir como plataforma para alcanzar zonas elevadas o distraer a los enemigos mientras buscas una ruta alternativa. ¡Trabajando juntos, podría convertirse en un equipo invencible!",
    img: "images/goomba.png",
  },

  CH: {
    title: "¡TU COMPAÑERO ES CHEEP CHEEP!",
    text: "Imagina tener a un Cheep Cheep como tu compañero de buceo en el Reino Champiñón. ¡Con su agilidad y capacidad para nadar a altas velocidades, podrías explorar las profundidades marinas como nunca! Podrías descubrir tesoros ocultos, esquivar peligrosos Pirañas Plant. ¡Sería una aventura llena de emoción y descubrimiento!",
    img: "images/cheep cheep.png",
  },
};

function getRandom(array) {
  if (array.length == 0) return null;
  var modeMap = {},
    maxCount = 1,
    modes = [];

  for (var i = 0; i < array.length; i++) {
    var el = array[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] == maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  console.log(modes);
  return modes[Math.floor(Math.random() * modes.length)];
}
