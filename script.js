const comChoice = document.getElementById("computer-choice");
const userPlay=document.getElementById('user-choice');
const scorDisply = document.getElementById("result");
//button onclick
const rock = document.getElementById("rock").onclick=playRock;
const paper = document.getElementById("paper").onclick=playPapr;
const scissor = document.getElementById("scissors").onclick=playSissr;

//assign each button to valuE
function playRock() {
  compareChoices("rock")
}
function playPapr() {
 compareChoices("paper")
}
function playSissr () {
  compareChoices("scissors")
}

// computer choice random:local
function computerChooses(){
 var choices=["rock","paper","scissor"];
var randomNum =choices[Math.floor(Math.random() *choices.length )];// *choices.length 
return randomNum;
};
//result

function compareChoices(userPlay) {
  computerPlay = computerChooses();
  document.getElementById('computer-choice').innerHTML = "<p> Computer picked: " + computerPlay + ".</p>";
 
 ///condition for rock vs choice
 if (userPlay === 'rock') {
   document.getElementById('user-choice').innerHTML = "<p>You picked: " + userPlay + ".</p>";
    if(computerPlay === 'rock') {
      document.getElementById('result').innerHTML = "<p>You tied.</p>";
    } else if (computerPlay === 'paper') {
      document.getElementById('result').innerHTML = "<p>You lose.</p>";
    } else if (computerPlay === 'scissors') {
      document.getElementById('result').innerHTML = "<p>You win!</p>";
    }
   //condition for paper vs choice
  }
  else if (userPlay === 'paper') {
      document.getElementById('user-choice').innerHTML = "<p>You picked: " + userPlay + ".</p>";
    if(computerPlay === 'rock') {
      document.getElementById('result').innerHTML = "<p>You win!</p>";
    } else if (computerPlay === 'paper') {
      document.getElementById('result').innerHTML = "<p>You tied.</p>";
    } else if (computerPlay === 'scissors') {
      document.getElementById('result').innerHTML = "<p>You lose.</p>";
    }  
    //condition for scissor vs choice
  } else if (userPlay === 'scissors') {
      document.getElementById('user-choice').innerHTML = "<p>You picked: " + userPlay + ".</p>";
    if(computerPlay === 'rock') {
      document.getElementById('result').innerHTML = "<p>You lose.</p>";
    } else if (computerPlay === 'paper') {
      document.getElementById('result').innerHTML = "<p>You win!</p>";
    } else if (computerPlay === 'scissors') {
      document.getElementById('result').innerHTML = "<p>You tied.</p>";
    }  
  }

}
//reset button
document.getElementById("reset").onclick = function() {
  comChoice.innerHTML = "";
  scorDisply.innerHTML = "";
  userPlay.innerHTML = "";
};