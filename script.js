// Contador de tempo juntos
const inicio = new Date("2024-01-29T00:00:00");
setInterval(() => {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").textContent =
    `Estamos juntos há ${dias} dias, ${horas} horas e ${minutos} minutos 💖`;
}, 1000);

// Horóscopo do dia (simulado)
const signos = { alef: "Sagitário", jenni: "Virgem" };
document.getElementById("horoscopo").textContent =
  `🌟 Hoje os astros dizem que ${signos.alef} e ${signos.jenni} estão mais unidos do que nunca.`;

// Carrossel de fotos: rolar para o lado
function rolarCarrossel(direcao) {
  const galeria = document.getElementById('galeria');
  galeria.scrollBy({ left: direcao * 200, behavior: 'smooth' });
}