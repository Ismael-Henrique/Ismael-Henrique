
  document.addEventListener('DOMContentLoaded', function () {
    const secondCarousel = document.querySelector('#carouselExample1'); // Seleciona o segundo carrossel
    const prevButton = secondCarousel.querySelector('.carousel-control-prev1');
    const nextButton = secondCarousel.querySelector('.carousel-control-next1');
    const carouselItems = secondCarousel.querySelectorAll('.carousel-item');
    
    let activeIndex = 0;

    // Atualiza o item ativo
    function updateActiveItem(newIndex) {
      carouselItems[activeIndex].classList.remove('active');
      activeIndex = newIndex;
      carouselItems[activeIndex].classList.add('active');
    }

    // Evento para o botão "Previous"
    prevButton.addEventListener('click', function () {
      const newIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length; // Movimento circular
      updateActiveItem(newIndex);
    });

    // Evento para o botão "Next"
    nextButton.addEventListener('click', function () {
      const newIndex = (activeIndex + 1) % carouselItems.length; // Movimento circular
      updateActiveItem(newIndex);
    });
  });
