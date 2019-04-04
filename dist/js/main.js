const symbol_btn = document.querySelector(".symbol_btn");
const close_line = document.querySelector(".close_line");
const aside = document.querySelector("aside");
symbol_btn.addEventListener('click', openSide);
close_line.addEventListener('click', closeSide);

//let showSide = true;
function openSide(){
   // if(showSide){
        aside.classList.add('show');
      //  let showSide = false;
   // }else{
     //   aside.classList.remove('show');
    //    let showSide = true;
  //  }
}

function closeSide() {
   //// if(showSide){
    aside.classList.remove('show');
   // }
}
