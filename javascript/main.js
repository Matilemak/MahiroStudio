document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.title-home, .titletext-home');

    function fadeInText(text) {
        text.style.opacity = '0';
        text.style.transform = 'translateX(100px)';
        text.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';

        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateX(0)';
        }, 100);
    }

    texts.forEach(text => {
        fadeInText(text);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.exp-data');
  const duration = 1000;          // Duración total en ms para  → puedes ajustarla
  const observerOptions = {root: null, threshold: 0.6};

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const numMatch = el.textContent.match(/\d+/);    // extrae el número
      if (!numMatch) return;

      const target = parseInt(numMatch[0], 10);
      let current = 0;
      const startTime = performance.now();
      el.style.opacity = 1;                            // fade‑in al iniciar

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);          // 0 → 1
        current = Math.floor(progress * target);

        // Mantén cualquier texto antes/después del número
        el.textContent = el.textContent.replace(/\+\d+/, `+${current}`);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          // Asegura que termine exactamente en el valor final
          el.textContent = el.textContent.replace(/\+\d+/, `+${target}`);
          observer.unobserve(el);  // Deja de observar: anima solo una vez
        }
      };

      requestAnimationFrame(step);
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
});