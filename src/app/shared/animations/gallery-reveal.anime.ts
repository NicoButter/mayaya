/**
 * Initializes the scroll reveal effect with three phases based on scroll progress.
 */
export function initGalleryReveal(cards: HTMLElement[]): void {
  const gallerySection = document.getElementById('gallery');
  if (!gallerySection) return;

  // Set initial state for all cards
  cards.forEach(card => {
    card.classList.add('hidden');
  });

  const updateCards = (progress: number) => {
    if (progress < 0.33) {
      // Fase 1: Tarjetas ingresan y se ordenan
      cards.forEach(card => {
        card.classList.add('visible');
        card.classList.remove('hidden');
      });
    } else if (progress < 0.66) {
      // Fase 2: Permanecen ordenadas
      cards.forEach(card => {
        card.classList.add('visible');
        card.classList.remove('hidden');
      });
    } else {
      // Fase 3: Se desarman
      cards.forEach(card => {
        card.classList.add('hidden');
        card.classList.remove('visible');
      });
    }
  };

  const handleScroll = () => {
    const rect = gallerySection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;

    // Calculate progress: 0 when section enters, 1 when section exits
    let progress = 0;
    if (rect.top < windowHeight && rect.bottom > 0) {
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(windowHeight, rect.bottom);
      const visibleHeight = visibleBottom - visibleTop;
      progress = visibleHeight / (windowHeight + sectionHeight);
    } else if (rect.bottom <= 0) {
      progress = 1;
    }

    updateCards(progress);
  };

  // Initial check
  handleScroll();

  // Add scroll listener
  window.addEventListener('scroll', handleScroll);

  // Cleanup on page unload (optional)
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
  });
}
