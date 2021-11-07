'use strict'

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const rightBtn = document.querySelector('#rightBtn');
  const leftBtn = document.querySelector('#leftBtn');
  const dotContainer = document.querySelector('.dots')

  let curSlide = 0;
  let maxSlides = slides.length;
  const creatDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }
  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(i =>
      i.classList.remove('dots__dot--active'));

    document.querySelector(`[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }
  const goToSlide = function (curSlide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - curSlide)*100}%)`
    });
  }
  const nextSlide = function () {
    if (curSlide >= (maxSlides - 1)) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);

  };
  const preSlide = function () {
    if (curSlide <= 0) {
      curSlide = maxSlides - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const autoSlide = function () {
    nextSlide();
    setTimeout(autoSlide, 3000);
  };

  const init = function () {
    goToSlide(curSlide);
    creatDots();
    activateDot(curSlide);
    // autoSlide();
  }
  init();

  rightBtn.addEventListener('click', nextSlide)
  leftBtn.addEventListener('click', preSlide)

  document.addEventListener('keydown', e => {
    if (e.key === "ArrowRight") nextSlide();
    e.key === "ArrowLeft" && preSlide();
  });

  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = e.target.dataset.slide;
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  })
}

slider();
