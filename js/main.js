const navMenu = document.querySelector(".nav-menu");

window.onscroll = function () {
    if(scrollY > 100) {
        navMenu.classList.add("navBackground")
    }
    else if(scrollY < 100){
        navMenu.classList.remove("navBackground")
    }
}

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
    simulateTouch:true,
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
           slidesPerView: 1.9
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
           slidesPerView: 1.2
        },
        546: {
           slidesPerView: 1.1
        },
        320: {
           slidesPerView: 1
        }
    }
});

new Swiper('.partners-swiper', {
    direction: 'horizontal',
    loop: true,
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
        380: {
            slidesPerView: 1
        },
    }
});

