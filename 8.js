const box1=document.querySelector("[data-box1]");
const box2=document.querySelector("[data-box2]");
const box3=document.querySelector("[data-box3]");
const box4=document.querySelector("[data-box4]");
const box5=document.querySelector("[data-box5]");
const box6=document.querySelector("[data-box6]");
const box7=document.querySelector("[data-box7]");
const box8=document.querySelector("[data-box8]");
const box9=document.querySelector("[data-box9]");
const allboxes=document.querySelectorAll(".smbox");
const move=document.querySelector("[data-move]");
let currmove='X';
let nextmove='O';
let k=0;
let gameover=false;
function updatecurrplayer(z){
    move.innerText="currentPlayer - " + z ;
}
function updateWin(updatedvalue){
    move.innerText=""+updatedvalue;
}

function checkgameover(){
    if(k==9){
       updateWin("draw!"); 
       setTimeout(()=>{
        allboxes.forEach(element => {
            element.innerText="";
            currmove="X";
            nextmove="O";
            updatecurrplayer(currmove);
        });
         gameover=false;
       },1500);
        k=0; 
    }
}
function checkwinningpos() {
    const b1 = box1.innerText;
    const b2 = box2.innerText;
    const b3 = box3.innerText;
    const b4 = box4.innerText;
    const b5 = box5.innerText;
    const b6 = box6.innerText;
    const b7 = box7.innerText;
    const b8 = box8.innerText;
    const b9 = box9.innerText;

    const winCombos=[
        [b1,b2,b3],
        [b1,b5,b9],
        [b1,b4,b7],
        [b2,b5,b8],
        [b3,b6,b9],
        [b4,b5,b6],
        [b7,b8,b9],
        [b3,b5,b7],
    ]

    for (let combo of winCombos) {
        if (combo[0] !== "" && combo[0] === combo[1] && combo[1] === combo[2]) {
            updateWin(`${combo[0]} wins!`);
            gameover=true;
            resetBoard();
            return;
        }
    }
}

function resetBoard() {
    setTimeout(()=>{
    allboxes.forEach(element => {
        element.innerText = "";
    });
    k = 0;
    currmove = 'X';
    nextmove = 'O';
    updatecurrplayer(currmove);
    gameover=false;
    },2000);

}



box1.addEventListener('click',
    function(){
        if(box1.innerText==="" && gameover===false){
            box1.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();
        
    }
    }
);
box2.addEventListener('click',
    function(){
        if(box2.innerText=="" && gameover===false){box2.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();
       
    }
    }
);
box3.addEventListener('click',
    function(){
        if(box3.innerText=="" && gameover===false){box3.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();
       
    }
    }
);
box4.addEventListener('click',
    function(){
        if(box4.innerText=="" && gameover===false){box4.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();
       
        }
    }
);
box5.addEventListener('click',
    function(){
        if(box5.innerText=="" && gameover===false){box5.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();
       
    }
    }
);
box6.addEventListener('click',
    function(){
        if(box6.innerText=="" && gameover===false){box6.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();
   
    }
    }
);
box7.addEventListener('click',
    function(){
        if(box7.innerText=="" && gameover===false){box7.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();

    }
    }
);
box8.addEventListener('click',
    function(){
        if(box8.innerText=="" && gameover===false){box8.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();
        
    }
    }
);
box9.addEventListener('click',
    function(){
        if(box9.innerText=="" && gameover===false){box9.innerText=currmove;
        let temp=currmove;
        currmove=nextmove;
        nextmove=temp;
        k++;
        updatecurrplayer(currmove);
        checkwinningpos();
        checkgameover();
      
    }
    }
);



