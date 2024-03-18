const menuToggle= document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')

menuToggle.onclick= function(){  //para hacer click
    navigation.classList.toggle('open')  //busca y activa la funcion
}

const list = document.querySelectorAll('.list')

function activarLink(){   //activa cada unos de los link
    list.forEach((item)=> item.classList.remove('active'))   //capturr los item
    this.classList.add('active') //activas asignas

}
list.forEach((item)=>   //mapeas  capturas
item.addEventListener('click',activarLink) //asignar un evento
)
