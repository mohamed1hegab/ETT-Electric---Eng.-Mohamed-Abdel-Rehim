// Scroll animation for elements
const boxes = document.querySelectorAll('.info-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

boxes.forEach(box => {
  observer.observe(box);
});

// Optional: Click to open WhatsApp or email
document.querySelectorAll('.info-box').forEach(box => {
  box.addEventListener('click', () => {
    const type = box.dataset.type;
    if (type === 'phone') {
      window.open('https://wa.me/201015390006', '_blank');
    } else if (type === 'email') {
      window.open('mailto:email@example.com');
    } else if (type === 'location') {
      window.open('https://www.google.com/maps?q=30.12345,31.12345');
    }
  });
});
