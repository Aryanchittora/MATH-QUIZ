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

function send() {
    var Number_1 = document.getElementById("number_1").value;
    var Number_2 = document.getElementById("number_2").value;
    var Answer = parseInt(Number_1) * parseInt(Number_2);

    var Question = "<h4>" + Number_1 + " X " + Number_2 + "</h4>";
    var input = "<br>Answer : <input type='text' id='answer_box' placeholder='Your Answer'>";
    var button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var column = Question + input + button;

    document.getElementById("output").innerHTML = column;
}