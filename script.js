let boxes = document.querySelectorAll('.box');
let win=document.querySelector("#winnerAnnounce");
let hide=document.querySelector('.winnerSection');
let newGameBtn= document.querySelector("#newGameBtn");
let resetBtn=document.querySelector("#resetBtn");
let turnO = true;//playerO
let count =0;
const winnerPosition= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const startGame= ()=>{
    turnO=true;
    boxes.forEach((box)=>{
            box.innerText="";
            box.disabled=false;
    });
    hide.classList.add("hide");
}

const winner =(posVal1)=>{
    win.innerText=`Winner is Player -> ${posVal1}`;
    hide.classList.remove('hide');
    for(box of boxes){
        box.disabled=true;
    }
    newGameBtn.addEventListener("click", startGame);

}

const checkWinner=() =>{
    for(pattern of winnerPosition){
        let posVal1 = boxes[pattern[0]].innerText
        let posVal2 = boxes[pattern[1]].innerText
        let posVal3 = boxes[pattern[2]].innerText
        if(posVal1!="" && posVal2!= "" && posVal3!= ""){
            if(posVal1==posVal2 && posVal2==posVal3){
                winner(posVal1);
            }
           
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO==true){
            box.innerText= "O";
            turnO= false;
        }
        else{
            box.innerText="X";
            turnO= true;
        }
        box.disabled= true;
        resetBtn.addEventListener("click",()=>{
            turnO=true;
            boxes.forEach((box)=>{
                 box.innerText="";
                 box.disabled=false;
                 });
            hide.classList.add("hide");
        });
        checkWinner();
    })
})

