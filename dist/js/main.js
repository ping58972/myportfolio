const symbol_btn = document.querySelector(".symbol_btn");
const close_line = document.querySelector(".close_line");
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