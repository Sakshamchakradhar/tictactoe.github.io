let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true; //playerO, playerX,
let moves = 0; 

const winPattern = [    // these are all the Winning Pattern possible for the game!!
  
[0, 1, 2],  [3, 4, 5], [6, 7, 8], [0, 3, 6],
    
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], 
];

boxes.forEach ((box) => {
    box.addEventListener ("click", () =>{
    
    if (turnO === true) {
        box.innerText = "O";
        turnO = false; // Now the chance of X is here
    } else {
        box.innerText = "X";
        turnO = true; // the chance back to the O's
    }
     box.disabled = true;
     moves++;

      checkWinner();
      checkTie();
    })
});


const disableboxes = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};


const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const showTie = () => {
  msg.innerText = "It's a tie!";
  msgcontainer.classList.remove("hide");
  disableboxes();
};


const checkWinner = () => {
  for  (let Pattern of winPattern ) {
    let pos1Val = boxes [Pattern[0]].innerText;
    let pos2Val = boxes [Pattern[1]].innerText;
    let pos3Val = boxes [Pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos2Val != ""){
       if(pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
       }  
    }  
  }
};

const checkTie = () => {
  if (moves === 9) {
    showTie();
  }
};


const reset = () => {
  turnO = true;  
  enableBoxes();
  moves = 0;
  msgcontainer.classList.add("hide");
};

resetBtn.addEventListener("click", reset);




