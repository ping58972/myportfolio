const symbol_btn = document.querySelector(".symbol_btn");
const close_line = document.querySelector(".close_btn");
const aside = document.querySelector("aside");
const bodyPage = document.querySelector(".main_projects");
const bodyPage1 = document.querySelector(".top_left");
const bodyPage2 = document.querySelector(".other_project");
const bodyPage3 = document.querySelector("footer");


symbol_btn.addEventListener('click', openSide);
close_line.addEventListener('click', closeSide);
bodyPage.addEventListener('click', bodyCloseSide);
bodyPage1.addEventListener('click', bodyCloseSide);
bodyPage2.addEventListener('click', bodyCloseSide);
bodyPage3.addEventListener('click', bodyCloseSide);

let showSide = true;
function openSide(){
        aside.classList.add('show');
         showSide = false;
    
}

function closeSide() {
    aside.classList.remove('show');
   showSide = true;
}

function bodyCloseSide(){
     if(!showSide){
       closeSide();
     }
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
  // slidesPerGroup: 4,
    //loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.swiper-container-main', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
      // loop: true,
        autoplay: {
          delay: 1500,
        // disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
    });