let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");

const uSc=document.querySelector("#user");
const cSc=document.querySelector("#Comp");

const choices=document.querySelectorAll(".choice");

const drawGame=()=>{
    msg.innerText="Draw Game";
    msg.style.backgroundColor="black";
}

const genCompChoice=()=>{
    const opt=["rock","paper","scissors"];
    const rand= Math.floor(Math.random() * 3);
    return opt[rand];
}

const showWinner=(uWin , userChoice , comChoice)=>{
    if(uWin)
    {
        userScore++;
        msg.innerText=`You Win! ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
        uSc.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`You Lose! ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        cSc.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    console.log("User choice= ",userChoice);
    const comChoice=genCompChoice();
    console.log("Computer choice= ",comChoice);
    if(userChoice === comChoice){
        drawGame();
    }
    else{
        let uWin=true;
        if(userChoice === "rock")
        {
            uWin= comChoice==="paper" ? false : true ;
        }
        else if(userChoice === "paper")
        {
            uWin= comChoice==="scissors" ? false : true;
        }
        else{
            uWin = comChoice === "rock" ? false : true;
        }
        showWinner(uWin,userChoice,comChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const ucid=choice.getAttribute("id");
        playGame(ucid);
    })
})