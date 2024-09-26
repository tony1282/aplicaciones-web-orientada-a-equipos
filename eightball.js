const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const eightBall= ()=> {
   const question = prompt('pregunta:') 
   const random= Math.floor(Math.random()*8) ;
   const options = [
    'si',
    'sure',
    'no',
    'tal vez',
    'no se',
    'a lo mejor',
    'claro',
   ]
    
   
   h1.innerText = options[random];
}

main.addEventListener('click', w=eightBall);