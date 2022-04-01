/**
 * @author [VereAbsolutum]
 * @email [sergiopile3@gmail.com]
 * @create date 2022-03-15 20:22:46
 * @modify date 2022-03-15 20:22:46
 * @desc [Personal-Portfolio]
 */

/* strict mode */

;(function () {
  var swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination'
    },

    spaceBetween: 16,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    centeredSlides: true,
    loop: true,

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 36,
        centeredSlides: false
      },

      768: {
        slidesPerView: 3,
        centeredSlides: false
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 48,
        centeredSlides: false
      }
    }
  })

  var slideFull = new Swiper('.s-slide', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    centeredSlides: true,
    loop: true
  })
})()
