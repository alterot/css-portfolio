let currentIndex: number = 0;

document.addEventListener('DOMContentLoaded', function() {
  const portfolioImage: HTMLElement | null = document.querySelector('.portfolio-gallery');
  const images: HTMLElement[] = Array.from(portfolioImage?.children || []).map(element => element as HTMLElement);
  const leftArrow: HTMLElement | null = document.querySelector('.portfolio__arrow--left');
  const rightArrow: HTMLElement | null = document.querySelector('.portfolio__arrow--right');

  function scrollPortfolio(direction: 'left' | 'right'): void {
    if (direction === 'left' && currentIndex > 0) {
      currentIndex--;
    } else if (direction === 'right' && currentIndex < images.length - 1) {
      currentIndex++;
    }

    portfolioImage?.scroll({
      left: images[currentIndex].offsetLeft,
      behavior: 'smooth'
    });
  }

  leftArrow?.addEventListener('click', function() {
    scrollPortfolio('left');
  });

  rightArrow?.addEventListener('click', function() {
    scrollPortfolio('right');
  });

  const text1: HTMLElement | null = document.querySelector('#text1');
  if (text1) {
    text1.style.display = 'block';
  }
});

const portfolioGallery: HTMLElement | null = document.querySelector('.portfolio-gallery');
portfolioGallery?.addEventListener('scroll', function() {
  const textElements: NodeListOf<HTMLElement> = document.querySelectorAll('.portfolio-gallery__item--text');
  textElements.forEach(function(text) {
    text.style.display = 'none';
  });

  const currentText: HTMLElement | null = document.querySelector('#text' + (currentIndex + 1));
  if (currentText) {
    currentText.style.display = 'block';
  }
});