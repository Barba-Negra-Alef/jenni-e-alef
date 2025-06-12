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

// Horóscopo do dia (mensagem muda conforme o dia da semana)
const mensagensHoroscopo = [
  `🌟 Sorte do dia: Sagitário e Virgem começam a semana com energias renovadas e muito carinho.`,
  `🌟 Sorte do dia: O universo conspira para momentos de alegria e cumplicidade entre vocês.`,
  `🌟 Sorte do dia: O amor de Sagitário e Virgem está mais forte, superando qualquer obstáculo.`,
  `🌟 Sorte do dia: Dia perfeito para relembrar bons momentos e planejar o futuro juntos.`,
  `🌟 Sorte do dia: O romance está no ar! Aproveitem para celebrar o amor.`,
  `🌟 Sorte do dia: Diversão e sintonia marcam o dia desse casal incrível.`,
  `🌟 Sorte do dia: Descanso, aconchego e muito amor para Sagitário e Virgem.`
];


// Carrossel de fotos: rolar para o lado
function rolarCarrossel(direcao) {
  const galeria = document.getElementById('galeria');
  galeria.scrollBy({ left: direcao * 200, behavior: 'smooth' });
}

// Carrossel automático
setInterval(() => {
  rolarCarrossel(1);
}, 3000);