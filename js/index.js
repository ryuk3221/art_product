if (document.querySelector('.product-page')) {
  const recommendSlider = new Swiper('.recommend__slider', {
    slidesPerView: 6,
    spaceBetween: 40,
    freeMode: true,
    navigation: {
      prevEl: '.recommend-slider-prev',
      nextEl: '.recommend-slider-next'
    },
    pagination: {
      el: '.recommend-slider-pagination'
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8,
        freeMode: true,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 6,
        spaceBetween: 40,
      }
    }
  });

  const similarSlider = new Swiper('.similar__slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    freeMode: true,
    navigation: {
      prevEl: '.similar-slider-prev',
      nextEl: '.similar-slider-next'
    },
    pagination: {
      el: '.similar-slider-pagination'
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1230: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }
  });

  const productSliderSmall = new Swiper('.small-slider', {
    
    breakpoints: {
      320: {
        spaceBetween: 8,
        slidesPerView: 4,
      },
      600: {
        direction: "vertical",
        spaceBetween: 8,
        slidesPerView: 6,
      }
    }
  });

  const productSliderBig = new Swiper('.big-slider', {
    spaceBetween: 10,
    thumbs: {
      swiper: productSliderSmall,
    },
    navigation: {
      prevEl: '.small-slider-prev',
      nextEl: '.small-slider-next'
    }
  });

  const complectsSmallSliders = document.querySelectorAll('.popup-small-slider');
  const complectsBigSliders = document.querySelectorAll('.popup-big-slider');

  for (let i = 0; i < complectsSmallSliders.length; i++) {
    let sliderSmall = new Swiper(complectsSmallSliders[i], {
      spaceBetween: 8,
      slidesPerView: 6,
      breakpoints: {
        320: {
          spaceBetween: 8,
          slidesPerView: 4,
        },
        768: {
          direction: "vertical",
          spaceBetween: 8,
          slidesPerView: 6,
        }
      }
    });

    let popupSliderBig = new Swiper(complectsBigSliders[i], {
      spaceBetween: 10,
      thumbs: {
        swiper: sliderSmall,
      },
      navigation: {
        prevEl: '.popup-small-slider-prev',
        nextEl: '.popup-small-slider-next'
      }
    });
  }
  
  //Открытие попапов с допами 
  const complectClickable = document.querySelectorAll('.complect-item__content');

  const complectClickableImg = document.querySelectorAll('.complect-item__img');

  const complectPopupShow = (event) => {
    const parent = event.target.closest('.complect-item');
    const popup = parent.querySelector('.complect-popup');
    popup.classList.add('complect-popup--open');
  };

  complectClickable.forEach(el => {
    el.onclick = complectPopupShow;
  });

  complectClickableImg.forEach(el => {
    el.onclick = complectPopupShow;
  });

  const complectPopupHide = (event) => {
    const { target } = event;
    if (target.classList.contains('complect-popup') || target.closest('.complect-popup__content--close')) {
      document.querySelector('.complect-popup--open').classList.remove('complect-popup--open');
    }
  };

  document.querySelectorAll('.complect-popup').forEach(el => {
    el.onclick = complectPopupHide;
  });
}

document.querySelector('.drawer-menu').onclick = (event) => {
  if (event.target.classList.contains('drawer-menu')) {
    document.querySelector('.drawer-menu--open').classList.remove('drawer-menu--open');
    menuBtn.classList.toggle('header-mid__btn--active');
  }
};  