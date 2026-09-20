const root = document.documentElement;
root.classList.add('has-js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

if (finePointer) {
  root.classList.add('has-fine-pointer');

  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  window.addEventListener(
    'pointermove',
    (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        root.style.setProperty('--pointer-x', `${pointerX}px`);
        root.style.setProperty('--pointer-y', `${pointerY}px`);
        frame = 0;
      });
    },
    { passive: true },
  );
}

const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
    observer.observe(item);
  });
}
