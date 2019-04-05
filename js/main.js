const symbol_btn = document.querySelector(".symbol_btn");
const close_line = document.querySelector(".close_btn");
const aside = document.querySelector("aside");
const bodyPage = document.querySelector(".main_projects");
const bodyPage1 = document.querySelector(".top_left");
const bodyPage2 = document.querySelector(".other_project");
const bodyPage3 = document.querySelector("footer");
const strDescribe = document.getElementsByClassName("str_describe");
const mainProject = document.getElementsByClassName("project_name");
const mainProject_sub = document.querySelector(".project_name.current");
const strDescribe_sm = document.getElementsByClassName("str_describe_sm");


symbol_btn.addEventListener('click', openSide);
close_line.addEventListener('click', closeSide);
bodyPage.addEventListener('click', bodyCloseSide);
bodyPage1.addEventListener('click', bodyCloseSide);
bodyPage2.addEventListener('click', bodyCloseSide);
bodyPage3.addEventListener('click', bodyCloseSide);
 mainProject_sub.addEventListener('click', displayProject_stop);


let x=0;

for(let i=0; i<mainProject.length; i++){
 
  mainProject[i].addEventListener('click', () => {
    strDescribe[i].classList.add('current');
    mainProject[i].classList.add('current');
   strDescribe_sm[i].classList.add('current');   
    if(i!==x){
      strDescribe[x].classList.remove('current');
    mainProject[x].classList.remove('current');
    strDescribe_sm[x].classList.remove('current');
    }  
    x=i;
  });
}

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


function displayProject_stop(){
  mainProject_sub.removeEventListener('click', displayProject_stop); 
  event.stopPropagation();
}


