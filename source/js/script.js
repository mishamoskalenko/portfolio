document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const isStaggered = el.hasAttribute('data-stagger');
        const index = Number(el.dataset.index || 0);
        const delay = isStaggered ? index * 100 : 0;

        setTimeout(() => {
          el.classList.add('is-animated');
        }, delay);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    if (el.hasAttribute('data-stagger')) {
      const siblings = Array.from(el.parentElement.querySelectorAll('[data-stagger]'));
      el.dataset.index = siblings.indexOf(el);
    }
    observer.observe(el);
  });
});