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
      phoneNumber.classList.remove('opacity');
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
        1850: {
           slidesPerView: 3.8
        },
        1750: {
           slidesPerView: 3.5
        },
        1650: {
           slidesPerView: 3.3
        },
        1550: {
           slidesPerView: 3.1
        },
        1450: {
           slidesPerView: 2.8
        },
        1350: {
           slidesPerView: 2.6
        },
        1250: {
           slidesPerView: 2.4
        },
        1150: {
           slidesPerView: 2.3
        },
        1050: {
           slidesPerView: 2.2
        },
        992: {
           slidesPerView: 2
        },
        950: {
           slidesPerView: 1.9,
        },
        900: {
           slidesPerView: 1.8
        },
        850: {
           slidesPerView: 1.7
        },
        800: {
           slidesPerView: 1.6
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
        546: {
           slidesPerView: 1.1,
           loop: true
        },
        320: {
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
        1259: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 2.5
        },
        576: {
            slidesPerView: 2
        },
        425: {
           slidesPerView: 1.5
        },
        380: {
            slidesPerView: 1.3
        },
        320: {
           slidesPerView: 1.1
        },
    }
});

