//true = p1
//false = p2

let currentState = new Array(9);
currentState=[0,0,0,0,0,0,0,0,0];
let count=0

tile1=document.querySelector('#one');
tile2=document.querySelector('#two');
tile3=document.querySelector('#three');
tile4=document.querySelector('#four');
tile5=document.querySelector('#five');
tile6=document.querySelector('#six');
tile7=document.querySelector('#seven');
tile8=document.querySelector('#eight');
tile9=document.querySelector('#nine');




turn = true;

function resetGame()
{
    currentState=[0,0,0,0,0,0,0,0,0];
    location.reload();
}

function gameStateCheck()
{
    //horizontal

        if(currentState[0]== 1 && currentState[1]== 1 && currentState[2]==1)
        {
            alert('player1 won');
            resetGame();
            return;
        }
        else if (currentState[0]== 2 && currentState[1]==2 && currentState[2]==1) 
        {
            alert('player2 won');
            resetGame();
            return;
        }
        
    

    
        else if(currentState[3]== 1 && currentState[4] == 1 && currentState[5]==1)
        {
            alert('player1 won');
            resetGame();
            return;
        }
        else if(currentState[3]== 2 && currentState[4] ==2 && currentState[5]==2)
        {
            alert('player2 won');
            resetGame();
            return;
        }
    

    
        else if(currentState[6] == 1 && currentState[7] ==1 && currentState[8]==1)
        {
            alert('player1 won');
            resetGame();
            return;
        }
        else if(currentState[6] == 2 && currentState[7] ==2 && currentState[8]==2)
        {
            alert('player2 won');
            resetGame();
            return;
        }
    
    //vertical
    
        else if(currentState[0] ==1 && currentState[3] ==1 && currentState[6]==1)
        {
            alert('player1 won');
            resetGame();
            return;
        }
        else if(currentState[0] ==2 && currentState[3] ==2 && currentState[6]==2)
        {
            alert('player2 won');
            resetGame();
            return;
        }
    
  
        else if(currentState[1] == 1 && currentState[4] == 1 && currentState[7] == 1)
        {
            alert('player1 won');
            resetGame();
            return;
        }
        else if (currentState[1] == 2 && currentState[4] == 2 && currentState[7] == 2)
        {
            alert('player2 won');
            resetGame();
            return;
        }
    
  
        else if(currentState[2] == 1 && currentState[5] == 1 && currentState[8] !=1 )
        {
            alert('player1 won');
            resetGame();
            return;
        }
        else if (currentState[2] == 2 && currentState[5] == 2 && currentState[8] !=2 )
        {
            alert('player2 won');
            resetGame();
            return;
        }
    

   
        else if(currentState[0] ==1 && currentState[4] ==1 && currentState[8]==1)
        {
            alert('player1 won');
            resetGame();
            return;
        }
        else if (currentState[0] ==2 && currentState[4] ==2 && currentState[8]==2 )
        {
            alert('player2 won');
            resetGame();
            return;
        }

 
       else if(currentState[2] ==1 && currentState[4] ==1 && currentState[6]==1)
        {
            alert('player1 won');
            resetGame();
            return;
        }
        else if (currentState[2] ==2 && currentState[4] ==2 && currentState[6]==2 )
        {
            alert('player2 won');
            resetGame();
            return;
        }
     
}

function playerClicked1()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile1.style.backgroundColor='red';
        currentState[0]=1;
        turn = !turn;
        document.querySelector('#one').removeEventListener('click',playerClicked1);
    }
    else
    {
        tile1.style.backgroundColor='green';
        currentState[0]=2;
        turn = !turn;
        document.querySelector('#one').removeEventListener('click',playerClicked1);
    }
    gameStateCheck();
}
function playerClicked2()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile2.style.backgroundColor='red';
        currentState[1]=1;
        turn = !turn;
        document.querySelector('#two').removeEventListener('click',playerClicked2);
    }
    else
    {
        tile2.style.backgroundColor='green';
        currentState[1]=2;
        turn = !turn;
        document.querySelector('#two').removeEventListener('click',playerClicked2);
    }
    gameStateCheck();
}
function playerClicked3()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile3.style.backgroundColor='red';
        currentState[2]=1;
        turn = !turn;
        document.querySelector('#three').removeEventListener('click',playerClicked3);
    }
    else
    {
        tile3.style.backgroundColor='green';
        currentState[2]=2;
        turn = !turn;
        document.querySelector('#three').removeEventListener('click',playerClicked3);
    }
    gameStateCheck();
}
function playerClicked4()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile4.style.backgroundColor='red';
        currentState[3]=1;
        turn = !turn;
        document.querySelector('#four').removeEventListener('click',playerClicked4);
    }
    else
    {
        tile4.style.backgroundColor='green';
        currentState[3]=2;
        turn = !turn;
        document.querySelector('#four').removeEventListener('click',playerClicked4);
    }
    gameStateCheck();
}
function playerClicked5()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile5.style.backgroundColor='red';
        currentState[4]=1;
        turn = !turn;
        document.querySelector('#five').removeEventListener('click',playerClicked5);
    }
    else
    {
        tile5.style.backgroundColor='green';
        currentState[4]=2;
        turn = !turn;
        document.querySelector('#five').removeEventListener('click',playerClicked5);
    }
    gameStateCheck();
}
function playerClicked6()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile6.style.backgroundColor='red';
        currentState[5]=1;
        turn = !turn;
        document.querySelector('#six').removeEventListener('click',playerClicked6);
    }
    else
    {
        tile6.style.backgroundColor='green';
        currentState[5]=2;
        turn = !turn;
        document.querySelector('#six').removeEventListener('click',playerClicked6);
    }
    gameStateCheck();
}
function playerClicked7()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile7.style.backgroundColor='red';
        currentState[6]=1;
        turn = !turn;
        document.querySelector('#seven').removeEventListener('click',playerClicked7);
    }
    else
    {
        tile7.style.backgroundColor='green';
        currentState[6]=2;
        turn = !turn;
        document.querySelector('#seven').removeEventListener('click',playerClicked7);
    }
    gameStateCheck();
}
function playerClicked8()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile8.style.backgroundColor='red';
        currentState[7]=1;
        turn = !turn;
        document.querySelector('#eight').removeEventListener('click',playerClicked8);
    }
    else
    {
        tile8.style.backgroundColor='green';
        currentState[7]=2;
        turn = !turn;
        document.querySelector('#eight').removeEventListener('click',playerClicked8);
    }
    gameStateCheck();
}
function playerClicked9()
{
    gameStateCheck();
    count++;
    if(turn)
    {
        tile9.style.backgroundColor='red';
        currentState[8]=1;
        turn = !turn;
        document.querySelector('#nine').removeEventListener('click',playerClicked9);
    }
    else
    {
        tile9.style.backgroundColor='green';
        currentState[8]=2;
        turn = !turn;
        document.querySelector('#nine').removeEventListener('click',playerClicked9);
    }
    gameStateCheck();
}

document.querySelector('#one').addEventListener('click',playerClicked1)
document.querySelector('#two').addEventListener('click',playerClicked2)
document.querySelector('#three').addEventListener('click',playerClicked3)
document.querySelector('#four').addEventListener('click',playerClicked4)
document.querySelector('#five').addEventListener('click',playerClicked5)
document.querySelector('#six').addEventListener('click',playerClicked6)
document.querySelector('#seven').addEventListener('click',playerClicked7)
document.querySelector('#eight').addEventListener('click',playerClicked8)
document.querySelector('#nine').addEventListener('click',playerClicked9)   