const swiper = new swiper(".swiper-container",{
    effect:"coverflow",
    loop:true,
    grabCursor:true,
    conteredSlide:true,
    slidePerView: "auto",
    coverflowEffect:{
        rotate:20,
        stretch:0,
        depth:350,
        modifier:1,
        slideShadiws: true,
    },
    pagination:{
        el:".swiper-pagination"
    }
})