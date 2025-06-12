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
const signos = { alef: "Sagitário", jenni: "Virgem" };
const mensagensHoroscopo = [
  `🌟 Segunda: Sagitário e Virgem começam a semana com energias renovadas e muito carinho.`,
  `🌟 Terça: O universo conspira para momentos de alegria e cumplicidade entre vocês.`,
  `🌟 Quarta: O amor de Sagitário e Virgem está mais forte, superando qualquer obstáculo.`,
  `🌟 Quinta: Dia perfeito para relembrar bons momentos e planejar o futuro juntos.`,
  `🌟 Sexta: O romance está no ar! Aproveitem para celebrar o amor.`,
  `🌟 Sábado: Diversão e sintonia marcam o dia desse casal incrível.`,
  `🌟 Domingo: Descanso, aconchego e muito amor para Sagitário e Virgem.`
];
const diaSemana = new Date().getDay(); // 0 = domingo, 1 = segunda, ...
document.getElementById("horoscopo").textContent =
  mensagensHoroscopo[diaSemana];

// Carrossel de fotos: rolar para o lado
function rolarCarrossel(direcao) {
  const galeria = document.getElementById('galeria');
  galeria.scrollBy({ left: direcao * 200, behavior: 'smooth' });
}

// Carrossel automático
setInterval(() => {
  rolarCarrossel(1);
}, 3000);