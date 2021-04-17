const button = document.querySelector('.button-wrap');
const buttonLines = document.querySelectorAll('.button-line');
const menu = document.querySelector('.menu');
const portrait = document.querySelector('.portrait');
const navigation = document.querySelector('.navigation');
const navItems= document.querySelectorAll('.navigation-listItem');
let isOpen = false;

button.addEventListener('click', ()=>{
    isOpen?isOpen=false:isOpen=true
    button.classList.toggle('close')
    buttonLines.forEach(line=>line.classList.toggle('close'))
    menu.classList.toggle('show')
    portrait.classList.toggle('show')
    navigation.classList.toggle('show')
    navItems.forEach(navItem=>navItem.classList.toggle('show'))
    
})


const ball = document.getElementById('ball')

document.onmousemove = function(){
    var x = event.clientX *100 / window.innerWidth;
    var y = event.clientY *70 / window.innerHeight;
    console.log(y);
    if(x>65 && y>50 ){
        ball.style.top = "50%";
        ball.style.left ="65%";
    }else if(x>65){
        ball.style.top =y+"%";
        ball.style.left ="65%";
    }else if(y>50){
        ball.style.top ="50%";
        ball.style.left =x+"%";
    }else{
        ball.style.top =y+"%";
        ball.style.left =x+"%";
    }
    
}
