let box = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
winner.style.display = "none";
let resetButton = document.querySelector(".resetButton");
resetButton.style.display = "none";
let newBox = Array.from(box);
let currentPlayer = 'X';
let arr = Array(9).fill(null);

newBox.forEach((el)=>{
el.addEventListener("click",(el)=>{
let element = el.target;
element.innerText = `${currentPlayer}`;
let id = Number(element.id);
arr[id-1] = currentPlayer;
checkWinner();
checkDraw();
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
if(element.innerText!==null) {
element.disabled =true;
}
})
})
function checkWinner(){
if(
     (arr[0]!==null&&arr[0]===arr[1]&&arr[0]===arr[2])
  || (arr[3]!==null&&arr[3]===arr[4]&&arr[3]===arr[5])
  || (arr[6]!==null&&arr[6]===arr[7]&&arr[6]===arr[8])
  || (arr[0]!==null&&arr[0]===arr[3]&&arr[0]===arr[6])
  || (arr[1]!==null&&arr[1]===arr[4]&&arr[1]===arr[7])
  || (arr[2]!==null&&arr[2]===arr[5]&&arr[2]===arr[8])
  || (arr[0]!==null&&arr[0]===arr[4]&&arr[0]===arr[8])
  || (arr[2]!==null&&arr[2]===arr[4]&&arr[2]===arr[6])
){
    winner.innerHTML = `${currentPlayer} is the winner`;
    winner.style.display = "block";
    resetButton.style.display = "block";
    disbleBoxes();
}
}
function checkDraw(){
    if(arr[0]!==null&&arr[1]!==null&&arr[2]!==null&&arr[3]!==null&&arr[4]!==null&&arr[5]!==null&&arr[6]!==null&&arr[7]!==null&&arr[8]!==null){
        winner.innerHTML = "Its a Draw!";
        winner.style.display = "block";
        resetButton.style.display = "block";
        disbleBoxes();
    }
}
 function disbleBoxes(){
    newBox.forEach((el)=>{
        el.disabled = true;
        
       })
}
    resetButton.addEventListener("click",()=>{
        newBox.forEach((el)=>{
            el.disabled = false;
            el.innerHTML = "";
        arr[el.id-1] = null;
        winner.style.display = "none";
        resetButton.style.display = "none";
        })
    })

