var scores=[computer_score,player_score]=[0,0];

var choices_obj={
    'rock' : {
        'rock': 'draw',
        'scissor':'win',
        'paper': 'loose',
    },
    'paper' : {
        'rock': 'win',
        'scissor':'loose',
        'paper': 'draw',
    },
    'scissors' : {
        'rock': 'loose',
        'scissor':'draw',
        'paper': 'win',
    }

}
function checker(input)
{
    var choices=['rock','paper','scissor'];
    var num=Math.floor(Math.random()*3);
    document.getElementById("computer_choice").innerHTML= `computer Choose <span>${choices[num].toUpperCase()}</span>`;
    document.getElementById("user_choice").innerHTML= `player Choose <span>${input.toUpperCase()}</span>`;

var computer_choice=choices[num];
switch(choices_obj[input][computer_choice]){
    case 'win':
        document.getElementById("result").style.cssText = "background-color: green";
        document.getElementById("result").innerHTML="YOU WIN!!";
        player_score++;
        break;
    case 'loose': 
    document.getElementById("result").style.cssText = "background-color: red";
    document.getElementById("result").innerHTML="SORRY YOU LOST!!";
        computer_score++;
        break;
    default:
        document.getElementById("result").style.cssText = "background-color: gray";
        document.getElementById("result").innerHTML="DRAW";
        break;
    }
    document.getElementById("computer_score").innerHTML=computer_score;
    document.getElementById("player_score").innerHTML=player_score;
}

