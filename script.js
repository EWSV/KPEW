const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.level .node').forEach((el) => {
  reveal.observe(el);
});

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;
  if (bg1) bg1.style.transform = `translate(${x * 20}px, ${y * 16}px)`;
  if (bg2) bg2.style.transform = `translate(${x * -14}px, ${y * -10}px)`;
});
