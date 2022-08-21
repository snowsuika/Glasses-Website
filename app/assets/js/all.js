const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');


menuBtn.addEventListener('click',(event)=>{
  console.log('mobileMenu.classList',mobileMenu.classList);
  if(mobileMenu.classList.contains("d-flex")){
    mobileMenu.classList.remove("d-flex");
    mobileMenu.classList.add("d-none");
  }else{
    mobileMenu.classList.remove("d-none");
    mobileMenu.classList.add("d-flex");
  }

})