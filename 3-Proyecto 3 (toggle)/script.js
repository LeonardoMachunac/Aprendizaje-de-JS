let toggleBtn = document.querySelector('.toggleBtn')
let container = document.querySelector('.container')

toggleBtn.onclick=function(){  //cada vezz que haga click 
    container.classList.toggle('active')  //en m container listame todas las clases en el container y ubicame en toggle

}