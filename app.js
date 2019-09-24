let userScore=0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!)";
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 400);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
result_p.innerHTML =` ${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord} . You lost!(`;
document.getElementById(userChoice).classList.add('red-glow');   
setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 400); 
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord(userChoice) + " equal to " + convertToWord(computerChoice) + ". It's a draw!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 400);    
}


function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
case "rs":
case "pr":
case "sp":
win(userChoice, computerChoice);
break;
case "rp":
case "sr":
case "ps":
lose(userChoice, computerChoice);
break;
case "rr":
case "ss":
case "pp":
draw(userChoice, computerChoice);
break;
}
}


//game("c");

window.onload=function(){
function main(){
const rock_div = document.getElementById("r");
rock_div.addEventListener('click', function() {
    game("r");
})
const paper_div = document.getElementById("p");
paper_div.addEventListener('click', function() {
    game("p");
})


const scissors_div = document.getElementById("s");
scissors_div.addEventListener('click', function() {
    game("s");
})
}
main();

}



