

const board = document.querySelector('.tic');

let total__turn = 0;

let turn = 'O';

let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];


let board_array = new Array(9).fill('E');                     // Filled each index with 'E'


let image = document.querySelector('img');

let image1 = document.querySelector('.img2');

image.style.transform = 'scale(1.5)';

image1.style.transform = 'scale(1)';


function checkWinner(){

    for(let [idx0,idx1,idx2] of winner)
    {

            if(board_array[idx0] === board_array[idx1] && board_array[idx1] === board_array[idx2] && board_array[idx0] != 'E')
            {
                return 1;
            }
    }


    return 0;

}


const printer = (event)=>{


    const element = event.target;

    if(board_array[element.id] === 'E')
    {

        total__turn += 1;

        if(turn === 'O')
        {

            image.style.transform = 'scale(1)';

            image1.style.transform = 'scale(1.5)';


            element.innerHTML = "O";

            board_array[element.id] = "O";

            if(checkWinner())
            {
                document.getElementById('winningMessage').innerHTML = "Winner is 0";

                board.removeEventListener('click', printer);

                return;                                                                 // So that if someone wins at last move so it doesn't check below

            }

            turn = 'X';

        }
        else
        {

            // reversed the scales so that it switches to other person turn

            image.style.transform = 'scale(1.5)';

            image1.style.transform = 'scale(1)';

            element.innerHTML = "X";

            board_array[element.id] = "X";

            if(checkWinner())
            {
                document.getElementById('winningMessage').innerHTML = "Winner is X";

                board.removeEventListener('click', printer);

                return;
                
            }

            turn = 'O';
        }

        if(total__turn === 9)
        {

            document.getElementById('winningMessage').innerHTML = "Match is Draw";      

        }

    }
}

board.addEventListener('click', printer);


// Removed function from addEventListener as we needed function in both







// To remove event listener

//  board.removeEventListener('click', callback function);







const button = document.querySelector('.button');

button.addEventListener('click',()=>{

    const cell = document.getElementsByClassName('cell');

    Array.from(cell).forEach((value)=>{
        value.innerHTML = " ";
    })

    total__turn = 0;
    turn = "O";
    board_array = new Array(9).fill("E");
    board.addEventListener('click', printer);

    document.getElementById('winningMessage').innerHTML = "";

    image.style.transform = 'scale(1.5)';

    image1.style.transform = 'scale(1)';

})