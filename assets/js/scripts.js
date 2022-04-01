/**
 * @author [VereAbsolutum]
 * @email [sergiopile3@gmail.com]
 * @create date 2022-03-15 20:22:46
 * @modify date 2022-03-15 20:22:46
 * @desc [Personal-Portfolio]
 */

/* strict mode */

;(function () {
  /** ***************************************************************
   *  Set the cards background to the average color of the its image
   ** ****************************************** *********************/
  function changeCardBackgroundOnLoad() {
    function getAverageColorFromImage(imgElement, ratio) {
      const canvas = document.createElement('canvas')

      const width = (canvas.width = imgElement.width)
      const height = (canvas.height = imgElement.height)

      const context = canvas.getContext('2d')
      context.drawImage(imgElement, 0, 0)

      let data
      let i = -4,
        count = 0

      try {
        data = context.getImageData(0, 0, width, height)
      } catch (err) {
        return {
          R: 0,
          G: 0,
          B: 0
        }
      }

      let R, G, B
      R = G = B = 0

      length = data.data.length * 0.1

      while ((i += ratio * 4) < length) {
        ++count

        R += data.data[i]
        B += data.data[i + 1]
        G += data.data[i + 2]
      }

      R = ~~(R / count)
      G = ~~(G / count)
      B = ~~(B / count)

      return {
        R,
        G,
        B
      }
    }

    // implementation
    const images = document.querySelectorAll('.card__img')
    images.forEach((img, i) => {
      const { R, G, B } = getAverageColorFromImage(img, 4)
      img.closest('.card').style.backgroundColor = `rgb(${R},${G},${B})`
    })
  }

  /** ***************************************************************
   *  Open & Close the navbar
   ** ****************************************** *********************/
  function openCloseAnimatedNavbar() {
    // buttons
    const openBtn = document.querySelector('#open'),
      closeBtn = document.querySelector('#close')
    // elements
    const overlay = document.querySelector('#navbar-overlay'),
      navMain = document.querySelector('#nav-main'),
      nav = document.querySelector('#nav'),
      footer = document.querySelector('#overlay-footer')
    // overlay animation duration
    const duration = 1000

    const setArrayAttribute = (state) => {
      ;[nav, overlay, navMain, openBtn, closeBtn, footer].forEach((el, i) => {
        el.setAttribute('data-status', 'transition')
        setTimeout(() => {
          el.setAttribute('data-status', state)
        }, duration)
      })
    }

    const navbarState = (state) => {
      switch (state) {
        case 'open':
          setArrayAttribute('opened')
          break
        case 'close':
          setArrayAttribute('closed')
          break
        default:
          console.error('Invalid State Param ' + state)
          break
      }
    }

    // open nav
    openBtn.addEventListener('click', (e) => {
      // control the state of the animation
      navbarState('open')

      // navbar footer
      anime({
        targets: ['.navbar__footer'],
        opacity: [0, 1],
        translateY: [10, 0],
        easing: 'easeOutExpo',
        duration: 250,
        delay: 500
      })

      // nav-brad & close btn
      anime({
        targets: ['#nav-brand', '#close'],
        translateY: [-25, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 350,
        delay: 550
      })

      // nav-main items
      anime({
        targets: ['#nav-main li'],
        translateX: ['-100px', 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 750,
        delay: function (el, i, l) {
          return i * 100 + 300
        }
      })

      //  nav-main title
      anime({
        targets: ['#nav-main h5'],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 750,
        delay: 300
      })

      // overlay
      anime({
        targets: ['#navbar-overlay'],
        translateX: ['100vw', 0],
        easing: 'cubicBezier(.3,0,.5,1)',
        duration: 500
      })
    })

    // close nav
    closeBtn.addEventListener('click', (e) => {
      // control the state of the animation
      navbarState('close')

      // navbar footer
      anime({
        targets: ['.navbar__footer'],
        opacity: [1, 0],
        translateY: [0, 10],
        easing: 'easeOutExpo',
        duration: 250
      })

      // nav-brad & close btn
      anime({
        targets: ['#nav-brand', '#close'],
        translateY: [0, -25],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 350,
        delay: 250
      })

      // nav animation
      anime({
        targets: ['#nav'],
        height: ['100px', 0],
        easing: 'easeOutExpo',
        duration: 750,
        delay: 750
      })

      // nav-main items
      anime({
        targets: ['#nav-main li'],
        translateX: [0, '100px'],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 750,
        delay: anime.stagger(100, { direction: 'reverse' })
      })

      //  nav-main title
      anime({
        targets: ['#nav-main h5'],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 250,
        delay: 350
      })

      // overlay animation
      anime({
        targets: ['#navbar-overlay'],
        translateX: [0, '-100vw'],
        easing: 'easeOutExpo',
        duration: 750,
        delay: 650
      })
    })
  }

  /** ***************************************************************
   *  Animation - Close button
   ** ****************************************** *********************/
  function animeMenuBtn() {
    const duration = 150

    // buttons
    const openBtn = document.querySelector('#open'),
      closeBtn = document.querySelector('#close')

    openBtn.addEventListener('click', () => {
      // menu-btn__1
      anime({
        targets: ['.btn-open__1'],
        translateY: [0, '8px'],
        rotate: 45,
        easing: 'easeOutExpo',
        duration: duration
      })

      // menu-btn__2
      anime({
        targets: ['.btn-open__2'],
        scaleX: 0,
        easing: 'easeOutExpo',
        duration: duration
      })

      // menu-btn__3
      anime({
        targets: ['.btn-open__3'],
        translateY: [0, '-8px'],
        rotate: -45,
        easing: 'easeOutExpo',
        duration: duration
      })
    })

    closeBtn.addEventListener('click', () => {
      // btn-open__1
      anime({
        targets: ['.btn-open__1'],
        translateY: ['6px', 0],
        rotate: 0,
        easing: 'easeOutExpo',
        duration: duration
      })

      // btn-open__2
      anime({
        targets: ['.btn-open__2'],
        scaleX: 1,
        easing: 'easeOutExpo',
        duration: duration
      })

      // btn-open__3
      anime({
        targets: ['.btn-open__3'],
        translateY: ['-6px', 0],
        rotate: 0,
        easing: 'easeOutExpo',
        duration: duration
      })
    })
  }

  /** ***************************************************************
   *  Animation - Scroll reveal element
   ** ****************************************** *********************/
  function scrollAnimeJs() {
    const REVEAL_STARTING_POINT = 50
    const windowHeight = window.innerHeight
    const defineOrder = (callback, el, i) => {
      if (callback()) el.classList.add(`order-${i}`)
    }
    const setUp = (callback, el) => {
      if (callback()) el.classList.add('opacity-0')
    }
    const theEnd = (callback) => {
      if (callback()) {
        window.removeEventListener('scroll', scrollAnimeJs)
        window.removeEventListener('load', scrollAnimeJs)
      }
    }

    function scrollReveal(commonObject) {
      function reveal(targets, animeJs) {
        if (!targets) return
        const animeJsObject = Object.assign(commonObject, animeJs)
        const targetsArray = targets.split(',')

        targetsArray.forEach(runAnimation)
        function runAnimation(selector) {
          const elements = document.querySelectorAll(selector)

          elements.forEach(each)
          function each(elem, i) {
            const revealTop = elem.getBoundingClientRect().top
            const dataReveal = elem.getAttribute('data-reveal') || null
            const selector2 = elements.length > 1 ? `.order-${i}` : ''

            if (dataReveal == 'show') return

            defineOrder(() => elements.length > 1, elem, i)
            setUp(() => animeJsObject.opacity, elem)

            if (revealTop < windowHeight - REVEAL_STARTING_POINT) {
              anime(
                Object.assign(animeJsObject, {
                  targets: `${selector}${selector2}`
                })
              )
              elem.setAttribute('data-reveal', 'show')
            }
          }
        }
      }
      return {
        reveal
      }
    }

    const slideIn = scrollReveal({
      duration: 750,
      easing: 'easeOutExpo',
      opacity: [0, 1],
      translateY: [100, 0]
    })

    const slideInTop = scrollReveal({
      duration: 750,
      easing: 'easeOutExpo',
      opacity: [0, 1],
      translateY: [-100, 0]
    })

    const fadeIn = scrollReveal({
      duration: 1500,
      easing: 'easeOutExpo',
      opacity: [0, 1]
    })

    // hero
    slideIn.reveal(
      `
    .hero__description, 
    .hero__links, 
    .hero__background
    `,
      {
        delay: 300
      }
    )
    // slideIn.reveal('.hero__links', { delay: 400 })
    // fadeIn.reveal('.hero__background', { delay: 0 })

    // about
    slideIn.reveal('.about__subtitle', { delay: 300 })
    slideIn.reveal('.about__title', { delay: 400 })
    slideIn.reveal('.about__description', { delay: 400 })

    // slide-full
    slideIn.reveal('.swiper', { delay: 400 })

    // services
    slideIn.reveal('.services__header', { delay: 400 })

    // experience
    slideIn.reveal('.experience__subtitle', { delay: 400 })
    slideIn.reveal('.experience__title', { delay: 400 })
    slideIn.reveal('.experience__description', { delay: 400 })
    slideIn.reveal('.experience__data .list__item', { delay: 400 })

    // client
    slideIn.reveal('.client__subtitle', { delay: 400 })
    slideIn.reveal('.client__title', { delay: 400 })
    slideIn.reveal('.client__description', { delay: 400 })
    slideIn.reveal('.client__data img', { delay: 400 })

    // publicity
    slideIn.reveal('.publicity__subtitle', { delay: 400 })
    slideIn.reveal('.publicity__title', { delay: 400 })
    slideIn.reveal('.publicity__description', { delay: 400 })
    slideIn.reveal('.publicity__data .row', { delay: 400 })

    // header
    slideInTop.reveal('#header', { delay: 400 })

    // button #scroll-to
    slideIn.reveal('#scroll-to', { delay: 400 })

    // cards
    slideIn.reveal('.card', { delay: 100 })

    // title & subtitles
    slideIn.reveal(
      '.hero__subtitle, #case > h1, #personal > h1, #social h1, #contact p ',
      { delay: 0 }
    )
    slideIn.reveal(
      '.hero__title, #case > p, #personal > p, #social p, #contact h1 ',
      { delay: 200 }
    )

    theEnd(() => {
      const footer = document.querySelector('#footer')
      if (!footer) return
      const footerTop = footer.getBoundingClientRect().top
      const end =
        footerTop < windowHeight - REVEAL_STARTING_POINT ? true : false
      return end
    })
  }

  /** ***************************************************************
   *  Position floating elements based on the container-fluid width size
   ** ****************************************** *********************/
  function floatingElemPosition() {
    function position(el, side, relatedContainer, styleString, offSet) {
      const windowWidth = window.innerWidth
      const maxWidth = relatedContainer.getBoundingClientRect().width

      if (windowWidth > maxWidth) {
        const containerFluidSide =
          relatedContainer.getBoundingClientRect()[side]
        el.style[styleString] = windowWidth - containerFluidSide + offSet + 'px'
      } else {
        el.style[styleString] = ''
      }
    }

    const container = document.querySelector('.container-fluid')
    const heroImg = document.querySelector('#hero-background')

    if (heroImg) {
      position(heroImg, 'right', container, 'backgroundPositionX', 430)
    }

    if (!heroImg || !container) {
      window.removeEventListener('load', floatingElemPosition)
      window.removeEventListener('resize', floatingElemPosition)
    }
  }

  /** ***************************************************************
   *  Slide in the #button-up on scrollY > offset
   ** ****************************************** *********************/
  function displayFloatElm() {
    function slideIn(el) {
      const windowTop = window.scrollY
      const offSet = 200

      if (windowTop > offSet) el.classList.add('slide-in')
      else el.classList.remove('slide-in')
    }

    const floatButtonUp = document.querySelector('#button-up')
    if (!floatButtonUp) {
      window.removeEventListener('scroll', displayFloatElm)
      return
    }
    slideIn(floatButtonUp)
  }

  /** ***************************************************************
   *  Animation - contact-map letters
   ** ****************************************** *********************/
  function lettersAnimation() {
    anime({
      targets: '#contact-map-letters span',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: function (el, i, l) {
        return i * 150
      }
    })
  }

  /** ***************************************************************
   *  Animation - contact-map content position
   ** ****************************************** *********************/
  function mapContainerPosition() {
    const winWidth = window.innerWidth
    const mapContainer = document.querySelector('#contact-map-content')
    const containerFluidMaxWidth = 1400
    const distanceFromTheRightPosition = 0.3

    if (!mapContainer) {
      window.removeEventListener('resize', mapContainerPosition)
      window.removeEventListener('load', mapContainerPosition)
      return
    }

    if (winWidth > containerFluidMaxWidth) {
      mapContainer.style.right = distanceFromTheRightPosition * winWidth + 'px'
    } else {
      mapContainer.style.right = ''
    }
  }

  /** ***************************************************************
   *  IMPLEMENTATION
   ** ****************************************** *********************/
  openCloseAnimatedNavbar()
  animeMenuBtn()

  /********* Event Listeners */
  window.addEventListener('load', changeCardBackgroundOnLoad)
  window.addEventListener('scroll', scrollAnimeJs)
  window.addEventListener('load', scrollAnimeJs)
  window.addEventListener('load', floatingElemPosition)
  window.addEventListener('resize', floatingElemPosition)
  window.addEventListener('scroll', displayFloatElm)
  window.addEventListener('load', lettersAnimation)
  window.addEventListener('resize', mapContainerPosition)
  window.addEventListener('load', mapContainerPosition)
})()
