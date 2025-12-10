function abrirEjercicio(num) {

  document.querySelectorAll(".vista").forEach(v => v.classList.remove("visible"));
  document.getElementById("vista-ejercicio").classList.add("visible");


  document.getElementById("titulo-ej").textContent = `Ejercicio ${num}`;


  const archivo = `js-snipets/exercise-${num}.js`;


  fetch(archivo)
    .then(r => r.text())
    .then(texto => {
      document.getElementById("codigo").textContent = texto;
    });


  const script = document.createElement("script");
  script.src = archivo;
  script.defer = true;

  document.body.appendChild(script);
    iniciarNieve(); // ❄ Activar nieve

}

function volver() {
  document.querySelectorAll(".vista").forEach(v => v.classList.remove("visible"));
  document.getElementById("home").classList.add("visible");
}


let snowInterval = null;

function iniciarNieve() {
  const snowContainer = document.getElementById("snow");

  // Evitar duplicados
  detenerNieve();

  snowInterval = setInterval(() => {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.textContent = "❄";

    // Tamaño aleatorio
    flake.style.fontSize = (Math.random() * 10 + 10) + "px";

    // Posición aleatoria
    flake.style.left = Math.random() * 100 + "vw";

    // Duración aleatoria
    const duracion = Math.random() * 5 + 5;
    flake.style.animationDuration = duracion + "s";

    // Desaparecer al finalizar
    setTimeout(() => flake.remove(), duracion * 1000);

    snowContainer.appendChild(flake);
  }, 200); // Cada 200ms nace un copo
}

function detenerNieve() {
  clearInterval(snowInterval);
  snowInterval = null;

  // Limpiar copos visibles
  document.getElementById("snow").innerHTML = "";
}
