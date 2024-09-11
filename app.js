let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");



const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        msg.innerText=`You Win !! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore.innerText=userScore;

    }
    else{
        compScore++;
        msg.innerText=`You Lost !! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compscore.innerText=compScore;
    }
}
const drawGame=()=>{
    msg.innerText="It's a Draw !!";
    msg.style.backgroundColor="#081b31";
}
const randChoice=()=>{
    const options=["rock","paper","scissors"]
    const rndint=Math.floor(Math.random()*3);
    return options[rndint];
}

const playGame=(userchoice)=>{
    let compchoice=randChoice();

    if(userchoice===compchoice){
        drawGame();   
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper"){
            userWin=compchoice==="scissors" ? false:true;
        }
        else{
            userWin=compchoice==="rock" ? false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
    

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("User-Choice ",userchoice);
        playGame(userchoice);
    })
})

