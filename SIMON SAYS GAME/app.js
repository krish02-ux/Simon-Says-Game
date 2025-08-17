// all are decleard functions
let gameSeq=[];
let userSeq=[];
let btns =["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

// step1:starting the game by preesing any key on keyboard
document.addEventListener("keypress", function () {
   if(started == false) {
     console.log("game is started");
     started = true;
     
    levelUp();
   }
});

//step2:creating a random color and flash it

//used for getting input flash from game
function gameFlash(btn) {
  btn.classList.add("flash");
     setTimeout(function ()  {
      btn.classList.remove("flash");  
    }, 250 );
}

//used for getting the flash from user
function userFlash(btn) {
    btn.classList.add("userflash");
       setTimeout(function ()  {
        btn.classList.remove("userflash");  
      }, 250 );
  }

  //these is used for levling up function
function levelUp() {
  userSeq= [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() *3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

//step3: for cheaking the ans taken from user
function checkAns (idx) {
   if (userSeq[idx] === gameSeq[idx] ) {
    if (userSeq.length==gameSeq.length){
        setTimeout(levelUp, 1000);
  }
}
  else{
    h2.innerHTML = `<h1>Game Over!!</h1><br>Your score was <b>${level}</b><br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor ="red";
    
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor ="white";
    }, 200);
    reset();

  } 
}

//step3:cheaking the ans from user and sending output
function btnPress(){
 let btn = this;
 userFlash(btn);


 userColor = btn.getAttribute("id");
 userSeq.push(userColor);

 checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

// reset for game by preessing any key
function reset(){
started = false;
gameSeq =[];
userSeq =[];
level = 0;
}