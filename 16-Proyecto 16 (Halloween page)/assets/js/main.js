const navMenu = document.getElementById("nav-menu"), //asignamos capturamos con docuemnt y con el getElementById seleccionamos el id
  navToggle = document.getElementById("nav-toggle"),  //con esto se puede agrupar  //para que se visualiza cuando este abierto
  navClose = document.getElementById("nav-close");     //esto tambien se agrupa  //Y esto es  cuando este cerrado

  // todos los const se puede agrupar con coma

if (navToggle) {                            //si nuesto navtoggle fuese igual a un true
  navToggle.addEventListener("click", () => {  //navtoggle hagamos un click vamos a listar todos los eventos el evento click haga la siguente opeacion
    navMenu.classList.add("show-menu");     //quisera seleecione navmenu agregamos nueva clase  
  });
}
if (navClose) {     //si nuesto navclose fue igual a un true
  navClose.addEventListener("click", () => {  //cada vez q haga un click quisera q haga la siguent efuncion
    navMenu.classList.remove("show-menu"); //navmenu quisera q lo borres
  });
}
const navLink = document.querySelectorAll(".nav__link");  //llamas a una clase
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

//SWIPER
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16,
});

//Scroll up
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//Sections active
const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive)

//Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  
});
sr.reveal(`.home-swiper,.new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });
