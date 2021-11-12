const body = document.querySelector('body'),
   navMenu = document.querySelector('.nav-menu'),
   navBar = document.querySelector('.navbar'),
   contIcons = document.querySelector('.contacts-icons'),
   phoneNumber = document.querySelector('.phone-number'),
   menuBtnOpen = document.querySelector('.menu-btn'),
   menuBtnClose = document.querySelector('.menu-close');

window.onscroll = function () {
    if(scrollY > 100) {
        navMenu.classList.add('navBackground');
        navBar.classList.add('navbarPadding');
        phoneNumber.classList.add('opacity');
    }
    else if(scrollY < 100){
        navMenu.classList.remove("navBackground");
        navBar.classList.remove('navbarPadding');
        phoneNumber.classList.remove('opacity');
    }
}

let menuOpen = false;
menuBtnOpen.addEventListener('click', ()=>{
   if(!menuOpen){
      navBar.classList.add('show');
      contIcons.classList.add('show-icons');
      phoneNumber.classList.add('opacity');
      body.classList.add('ofhd');
      menuOpen = true;
   } 
})

menuBtnClose.addEventListener('click', ()=>{
   if(menuOpen){
      navBar.classList.remove('show');
      contIcons.classList.remove('show-icons');
      body.classList.remove('ofhd');
      menuOpen = false;
   } 
})



new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

new Swiper('.projects-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    freeMode: true,
    spaceBetween: 0,
    simulateTouch: true,
    breakpoints: {
        1920: {
           slidesPerView: 4
        },
        1250: {
           slidesPerView: 2.4
        },
        992: {
           slidesPerView: 1.5
        },
        750: {
           slidesPerView: 1.5
        },
        700:{
           slidesPerView: 1.4
        },
        650: {
           slidesPerView: 1.3
        },
        576: {
           slidesPerView: 1.2,
           loop: true
        },
        375: {
           slidesPerView: 1,
           loop: true
        }
    }
});

new Swiper('.partners-swiper', {
    direction: 'horizontal',
    slidesPerView: 4,

    grid: {
        fill: 'row',
        rows: 2,
    },

    breakpoints: {
        1440: {
            slidesPerView: 4
        },
        1024: {
           slidesPerView: 3
        },
        992: {
            slidesPerView: 2
        },
        768: {
           slidesPerView: 1.8
        },
        576: {
            slidesPerView: 1.5
        },
        425: {
           slidesPerView: 1.2
        },
        380: {
            slidesPerView: 1.1
        },
        300: {
           slidesPerView: 1
        }
    }
});

