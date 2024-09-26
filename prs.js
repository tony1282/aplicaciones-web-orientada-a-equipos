const btnPlay = document.querySelector('#button');
const h3User = document.querySelector('#user span');
const h3Compu = document.querySelector ('#compu span');
const h1Result = document.querySelector('h1');

const play = () => {
    const choiceUser = prompt('Elige: \n piedra \n papel \n tijeras');
    const choices = [' Piedra' , 'papel', 'tijeras' ];

    const choiceCompu = choices[Math.floor(Math.random() * 3)];
    let message = '';
    if(choiceUser ===  choiceCompu){
        message = 'Empate!';
        
    } else if (choiceUser === 'piedra' && choiceCompu === 'tijeras' ||
        choiceUser === 'papel ' && choiceCompu === 'piedra' ||
        choiceUser === 'tijeras' && choiceCompu === 'papel'){
            message = 'Ganaste!';
        } else {
            message = 'Perdiste';
    }
    h3User.innerText = choiceUser;
    h3Compu.innerText = choiceCompu;
    h1Result.innerText = message;
}

btnPlay.addEventListener('click' , play);