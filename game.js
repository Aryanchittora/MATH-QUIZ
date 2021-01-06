var player1_name = localStorage.getItem("Player_1");
var player2_name = localStorage.getItem("Player_2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("Player_1_name").innerHTML = player1_name + " : ";
document.getElementById("Player_2_name").innerHTML = player2_name + " : ";

document.getElementById("Player_1_score").innerHTML = player1_score;
document.getElementById("Player_2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


var question_turn = "Player_1";
var answer_turn = "Player_2";

function send() { 
    Number_1 = document.getElementById("number_1").value;
    Number_2 = document.getElementById("number_2").value;
    get_answer = parseInt(Number_1) * parseInt(Number_2);
    console.log(get_answer);
    
    var Question = "<h4>Q. " + Number_1 + " X " + Number_2 + "</h4>";
    var input = "<br>Answer : <input type='text' id='answer_box' placeholder='Your Answer'>";
    var button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var column = Question + input + button;

    document.getElementById("output").innerHTML = column;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

function check() {
     var ans = document.getElementById("answer_box").value;

     if (ans == get_answer) {
         window.alert("CONGRATS !! YOUR ANSWER IS CORRECT");
         if (answer_turn == "Player_1") {
             player1_score = player1_score + 1;
             document.getElementById("Player_1_score").innerHTML = player1_score;
         }
         else {
             player2_score = player2_score + 1;
             document.getElementById("Player_2_score").innerHTML = player2_score;
         }
     }

     if (ans != get_answer) {
         window.alert("OOPS !! YOUR ANSWER IS WRONG");
     }

     if (question_turn == "Player_1") {
        question_turn = "Player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
       question_turn = "Player_1";
       document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }  

     if (answer_turn == "Player_1") {
         answer_turn = "Player_2";
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
     }
     else {
         answer_turn = "Player_1";
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
     } 

     document.getElementById("output").innerHTML = "";
}