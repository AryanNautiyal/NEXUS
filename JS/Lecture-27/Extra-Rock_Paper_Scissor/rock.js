

const choice = document.querySelector('.options');

const choices = ['rock' , 'paper' , 'scissor'];

const background = ["url(./rock.png)", "url(./paper.png)", "url(./scissor.png)"];

let score_user = 0;

let score_bot = 0;

function getChoice(){

    const index = Math.floor((Math.random()*3));

    return choices[index];
}

const cleanup = (event)=>{

    event.preventDefault();

    const element = event.target;

    const bot_choice = getChoice();

    const img = document.querySelector('.cont1');

    const img2 = document.querySelector('.cont2');

    const score_user1 = document.querySelector('.score-p1');

    const score_bot1 = document.querySelector('.scorep2');

    img.style.backgroundImage = 'url(./default.png)';

    img2.style.backgroundImage = 'url(./default.png)';

    score_user = 0;

    score_user1.innerHTML = `${score_user}`;


    score_bot = 0;

    score_bot1.innerHTML = `${score_user}`;

    choice.removeEventListener('click',WINNER);

    const removal = document.body.querySelector('.extra');

    removal.remove();

    choice.addEventListener('click' , WINNER);
    
}

function creator(){

    const win = document.createElement('div');

        win.style.height = '100vh';
        win.style.width = '100vw';
        win.style.opacity = '0.9';
        win.style.display = 'flex';
        win.style.backgroundColor = '#000000';
        win.style.justifyContent = 'center';
        win.style.alignItems = 'center';
        win.style.flexDirection = 'column';
        win.style.color = '#00FFFF';
        win.style.fontWeight = 'bold';
        win.style.fontSize = '30px';
        win.style.fontFamily = "'Press Start 2P', cursive";
        win.style.position = 'absolute';
        win.style.zIndex = '10';
        win.className = "extra";
        
        const winnerMessage = document.createElement('h1');

        winnerMessage.innerHTML = "Game Over";
        winnerMessage.style.color = '#00FFFF';
        winnerMessage.style.fontWeight = 'bold';
        winnerMessage.style.fontSize = '30px';

        const winner_name = document.createElement('h2');


        winner_name.style.color = '#00FFFF';
        winner_name.style.fontWeight = 'bold';
        winner_name.style.fontSize = '30px';

        if(score_user === 3)
        {
            winner_name.innerHTML = "You Win";
        }
        else
        {
            winner_name.innerHTML = "You Lose";
        }

        const br = document.createElement('br');

        document.body.appendChild(win);

        win.appendChild(winnerMessage);
        win.appendChild(br);
        win.appendChild(winner_name);

        const button = document.createElement('button');

        button.style.padding = '10px'
        button.style.backgroundColor = '#000000';
        button.style.marginTop = '40px';
        button.style.border = '2px #00FFFF solid';
        button.style.color = '#00FFFF';
        button.style.fontWeight = 'bold';
        button.style.fontSize = '20px';
        button.style.fontFamily = "'Press Start 2P', cursive";
        button.className = 'button';
        button.type = 'reset';


        button.innerHTML = 'Restart'

        win.appendChild(button);

        button.addEventListener('click', cleanup);

}


const WINNER = (event)=>{

    event.preventDefault();

    const element = event.target;

    const bot_choice = getChoice();

    const img = document.querySelector('.cont1');

    const img2 = document.querySelector('.cont2');

    const score_user1 = document.querySelector('.score-p1');

    const score_bot1 = document.querySelector('.scorep2');

    let user_choice;

    if(bot_choice==='rock')
    {

        img2.style.backgroundImage = background[0];

        img2.style.backgroundSize = "700px";

    }
    else if(bot_choice==='paper')
    {

        img2.style.backgroundImage = background[1];

        img2.style.backgroundSize = "700px";

    }
    else
    {

        img2.style.backgroundImage = background[2];

        img2.style.backgroundSize = "800px";

    }



    if(element.id==='rock')
    {

        img.style.backgroundImage = background[0];

        img.style.backgroundSize = "700px";

        user_choice = 'rock';


    }
    else if(element.id==='paper')
    {

        img.style.backgroundImage = background[1];

        img.style.backgroundSize = "700px";

        user_choice = 'paper';

    }
    else
    {

        img.style.backgroundImage = background[2];

        img.style.backgroundSize = "800px";

        user_choice = 'scissor';

    }


    if((user_choice === 'rock' && bot_choice === 'paper') || (user_choice === 'paper' && bot_choice === 'scissor') || (user_choice === 'scissor' && bot_choice === 'rock'))
    {
        score_bot += 1;

        score_bot1.innerHTML = `${score_bot}`;
    }

    else if((user_choice === 'paper' && bot_choice === 'rock') || (user_choice === 'scissor' && bot_choice === 'paper') || (user_choice === 'rock' && bot_choice === 'scissor'))
    {
        score_user += 1;

        score_user1.innerHTML = `${score_user}`;
    }



    if(score_user === 3 || score_bot === 3)
    {
        creator();
    }

}


choice.addEventListener('click', WINNER);



