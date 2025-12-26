// Wand Cursor
const wand = document.getElementById('wand');

document.addEventListener('mousemove', (e) => {
  wand.style.left = (e.pageX - 10) + 'px';
  wand.style.top = (e.pageY - 50) + 'px';
  wand.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
  wand.style.display = 'none';
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// CTA Button interaction
document.querySelector('.cta-btn').addEventListener('click', function() {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Particle animation enhancement
const particles = document.querySelectorAll('.circuit-particle');
particles.forEach((particle, index) => {
  particle.style.left = Math.random() * 100 + '%';
});

// Project card animations
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-15px)';
  });
  
  card.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
  });
});

console.log('⚡ Electronics Wizard Portfolio Loaded! 🪄');
