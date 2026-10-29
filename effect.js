const button = document.querySelector('#celebrate');
const wish = document.querySelector('#wish');
const audio = document.querySelector('.song');
const confetti = document.querySelector('.confetti');
const musicGate = document.querySelector('#music-gate');

function startMusic() {
  audio.volume = 0.7;
  return audio.play().catch(() => {});
}

function makeConfetti() {
  const colors = ['#ffd46b', '#f985bd', '#b69cff', '#8ee7d4', '#fff6de'];
  for (let i = 0; i < 88; i += 1) {
    const piece = document.createElement('i');
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 1.8}s`;
    piece.style.animationDuration = `${2.8 + Math.random() * 2.2}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    confetti.appendChild(piece);
  }
}

function openCelebration() {
  if (document.body.classList.contains('music-on')) return;
  document.body.classList.add('music-on');
  musicGate.classList.add('hidden');
  musicGate.setAttribute('aria-hidden', 'true');
  startMusic();
  makeConfetti();
  setTimeout(() => confetti.replaceChildren(), 5600);
}

musicGate.addEventListener('click', openCelebration);
musicGate.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openCelebration();
  }
});

button.addEventListener('click', () => {
  document.body.classList.add('celebrating');
  wish.classList.add('visible');
  button.classList.add('hidden');
  makeConfetti();
  startMusic();
  setTimeout(() => confetti.replaceChildren(), 5600);
  wish.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
