(function () {                                                                   

  const sliderInIt = function (slider) {

      let sliders = slider.querySelectorAll('.slides');

      sliders[0].classList.add('active-slider');

      let ArrowNext = document.querySelector('.slider__arrow-right');
  
      let ArrowPrev = document.querySelector('.slider__arrow-left');
      
      ArrowNext.addEventListener('click', function () {
          let activeElem = slider.querySelector('div.active-slider');
          let nextElem = activeElem.nextElementSibling;

          if (activeElem != null) {
               if (!nextElem) {
                  activeElem.classList.remove('active-slider');
                  sliders[0].classList.add('active-slider');
              }
              else if (nextElem.classList.contains('slides')) {
                  activeElem.classList.remove('active-slider');
                  nextElem.classList.add('active-slider');
              }
              else {
                  activeElem.classList.remove('active-slider');
                  sliders[0].classList.add('active-slider');
              }
          }
      });

      ArrowPrev.addEventListener('click', function () {
          let activeElem = slider.querySelector('div.active-slider');
          let prevElem = activeElem.previousElementSibling;
          if (activeElem != null) {
              if (!prevElem) {
                  activeElem.classList.remove('active-slider');
                  sliders[sliders.length - 1].classList.add('active-slider');
              }
              else if (prevElem.classList.contains('slides')) {
                  activeElem.classList.remove('active-slider');
                  prevElem.classList.add('active-slider');
              }
              else {
                  activeElem.classList.remove('active-slider');
                  sliders[sliders.length - 1].classList.add('active-slider');
              }
          }
      });
  };

  this.slider = function (selector) {

      let slider = document.querySelector(selector);

      if (!slider) {
          console.log('Slider not found');
          return false;
      }

      sliderInIt(slider);
  };
}());
slider('.slider__main-block');

const mainBlock = document.querySelector('.site')
const childBlock = document.querySelector('.block-first')

const arrowScroll = document.querySelector('.scroll-to-bottom');

arrowScroll.addEventListener('click', (e) => {
  e.preventDefault();
  if(window.pageYOffset >= 0 && window.pageYOffset < childBlock.clientHeight) {
    window.scrollTo({
      top: childBlock.clientHeight,
      behavior: "smooth"
  });
 }
  else if(window.pageYOffset >= childBlock.clientHeight 
         && window.pageYOffset < childBlock.clientHeight * 2 
         && !arrowScroll.classList.contains('rotate') ) {
          window.scrollTo({
            top: childBlock.clientHeight * 2,
            behavior: "smooth"
        });
    arrowScroll.classList.add('rotate');
  }
  else if(arrowScroll.classList.contains('rotate') ) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
    arrowScroll.classList.remove('rotate');
  }
})

document.addEventListener('scroll', onScroll);  

function onScroll() {
  if(window.pageYOffset > childBlock.clientHeight && window.pageYOffset < childBlock.clientHeight * 2) {
    arrowScroll.classList.add('rotate');
  }
  else if(window.pageYOffset > 0 && window.pageYOffset < childBlock.clientHeight) {
    arrowScroll.classList.remove('rotate');
  }
}

const form = document.querySelector('.main-form__form');
const modal = document.querySelector('.modal')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    setTimeout(() => {
        modal.classList.remove('active');
    }, 2000);
    form.reset();
})

const secondBlock = document.querySelector('.block-second')

function parallax(e) {
  this.querySelectorAll('.stars').forEach((star) => {
    const speed = star.getAttribute('data-speed');
    star.style.transform = `translate(${e.clientX*speed/1000}px, ${e.clientY*speed/1000}px)`
  }) 
}

secondBlock.addEventListener('mousemove', parallax);