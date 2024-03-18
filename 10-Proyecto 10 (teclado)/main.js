const Keys=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
function getRandomNumber(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
function getRandomKey()
{
    return Keys[getRandomNumber(0,Keys.length-1)]
}
function targetRandomKey(){  //capturar  las letras del teclado
    const key = document.getElementById(getRandomKey())
    key.classList.add("selected");
}
document.addEventListener("keyup",event=>{  //indexamos
    const keyPressed= String.fromCharCode(event.keyCode)
    const keyElement=document.getElementById(keyPressed)
        const highlightedkey=document.querySelector(".selected")
        keyElement.classList.add(".hit")
        keyElement.addEventListener('animationend',()=>{
            keyElement.classList.remove("hit")
        })
        if(KeyPressed===highlightedkey.innerHTML){
            highlightedkey.classList.remove("selected")
            targetRandomKey()
        }
    
    })
    
    targetRandomKey()