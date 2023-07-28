console.log("helllo")
const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const btn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;
const winingPosition=[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]];
// initial a game so wright function
function intGame(){
    currentPlayer="X";
    btn.classList.remove("active");
    gameInfo.innerHTML=`current Player -${currentPlayer}`
    gameGrid=["","","","","","","","","",];
    boxes.forEach((box,index) =>{
        box.innerHTML="";
        box.classList=`box box${index+1}`
        box.style.pointerEvents="all"
    })
};

intGame();

function checkWin(){
    let ans= "";

    winingPosition.forEach((position) =>{

        if((gameGrid[position[0]] !=="" || gameGrid[position[1]] !=="" || gameGrid[position[2]] !=="") && 
        (gameGrid[position[0]]===gameGrid[position[1]]) && 
        (gameGrid[position[1]]===gameGrid[position[2]])){


            if(gameGrid[position[0]] === "X"){
                ans="X"
            }else{
                ans="O"
            }

            boxes.forEach(box =>{
                box.style.pointerEvents="none"
            })


            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });


    if(ans !==""){
        gameInfo.innerHTML=`winner Player -${ans}`;
        btn.classList.add("active");
    }


    let count=0;
    gameGrid.forEach((box) =>{
        if(box !==""){
            count++;
        }
    })

    if(count === 9){
        gameInfo.innerHTML=`game - Tide`;
        btn.classList.add("active");
    }

   
};

boxes.forEach((box,index) =>{
    box.addEventListener("click",() =>{
        handelclick(index);
    })
})


function handelclick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerHTML=currentPlayer;
        gameGrid[index]=currentPlayer;
        console.log(gameGrid);
        swapTurn();

        checkWin();
    }
}

function swapTurn(){
    if(currentPlayer == "X"){
        currentPlayer="O";
    } else{
        currentPlayer="X";
    }
    gameInfo.innerHTML=`current Player -${currentPlayer}`
}

btn.addEventListener("click", intGame);