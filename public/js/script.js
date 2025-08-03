console.log('Animation script loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, looking for animated elements');
  
  const animatedElements = document.querySelectorAll('[data-animate]');
  console.log('Found animated elements:', animatedElements.length);

  if (animatedElements.length === 0) {
    console.log('No animated elements found');
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element intersecting:', entry.target);
        const el = entry.target;
        const isStaggered = el.hasAttribute('data-stagger');
        const index = Number(el.dataset.index || 0);
        const delay = isStaggered ? index * 100 : 0;

        setTimeout(() => {
          el.classList.add('is-animated');
          console.log('Added is-animated class to:', el);
        }, delay);

        obs.unobserve(el);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach((el, index) => {
    if (el.hasAttribute('data-stagger')) {
      const siblings = Array.from(el.parentElement.querySelectorAll('[data-stagger]'));
      el.dataset.index = siblings.indexOf(el);
    }
    observer.observe(el);
    console.log('Observing element:', el);
  });
}); 