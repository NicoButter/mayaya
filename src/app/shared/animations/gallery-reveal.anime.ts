/**
 * Initializes the scroll reveal effect using IntersectionObserver and CSS transitions.
 */
export function initGalleryReveal(cards: HTMLElement[]): void {
  // Set initial state for all cards
  cards.forEach(card => {
    card.classList.add('hidden');
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const card = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          card.classList.add('visible');
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
          card.classList.remove('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe each card
  cards.forEach(card => observer.observe(card));
}
