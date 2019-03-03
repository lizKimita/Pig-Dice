//USER INTERFACE (FRONT-END);
function Player(name, score1, score2, score3) {
  this.playerName = name;
  this.dieScore = score1;
  this.turnScore = score2;
  this.totalScore = score3;
}

function rollDice(){
  return (Math.floor(Math.random()*6)+1);
}

$(document).ready(function(){
  $("form#players").submit(function(event){
    event.preventDefault();
    $("#gamebody").slideDown();
    var player1Name = $("input#player1").val();
    var player2Name = $("input#player2").val();
    $("#first").text("Hello "+ player1Name);
    $("#second").text("Hello "+ player2Name);

  });

  $("#roll1").click(function() {
    this.dieScore = rollDice();
    $("#dieScore1").text(this.dieScore);
    score1(this.dieScore);

    var turnTotal = 0;
    var turns = document.getElementById('dieScore1');
    for (var i=0; i<=turns.length; i++)  {
      turnTotal =+ turns[i];
      $("#turnScore1").text(turnTotal);
    };

  });

  $("#roll2").click(function(){
    this.dieScore = rollDice();
    $("#dieScore2").text(this.dieScore);
    score2(this.dieScore)
});

  $("#reset").click(function(){
    $(document.getElementById("Hold1").disabled = false);
    $(document.getElementById("roll1").disabled = false);
    $(document.getElementById("Hold2").disabled = false);
    $(document.getElementById("roll2").disabled = false);
    $("#dieScore1").empty();
    $("#dieScore2").empty();
    $("#comment").empty();
    $("#comment2").empty();
    $("#turnScore1").empty();
    $("#turnScore2").empty();
    $("#totalScore1").empty();
    $("#totalScore2").empty();
  });

  $("#Hold1").click(function(){
    $(document.getElementById("Hold1").disabled = true);
    $(document.getElementById("roll1").disabled = true);
    $(document.getElementById("Hold2").disabled = false);
    $(document.getElementById("roll2").disabled = false);
  });

  $("#Hold2").click(function(){
    $(document.getElementById("Hold2").disabled = true);
    $(document.getElementById("roll2").disabled = true);
    $(document.getElementById("Hold1").disabled = false);
    $(document.getElementById("roll1").disabled = false);
  });
});

//BUSINESS LOGIC
function rollDice(){
  return (Math.floor(Math.random()*6)+1);
};

function score1 (ans) {
    if (ans === 1) {
      $("#comment") .text("Oh no! You just rolled a 1, Your total score goes back to zero!");
      $(document.getElementById("roll1").disabled = true);
      $(document.getElementById("roll2").disabled = false);
      $(document.getElementById("Hold2").disabled = false);
    }
    else {
      $("#comment") .text("You rolled " + ans + ". Play again or hold!");
    }
  };

  function score2 (ans2) {
      if (ans2 === 1) {
        $("#comment2") .text("Oh no! You just rolled a 1, Your total score goes back to zero!");
        $(document.getElementById("roll2").disabled = true);
        $(document.getElementById("roll1").disabled = false);
        $(document.getElementById("Hold1").disabled = false);
      }
      else {
        $("#comment2") .text("You rolled " + ans2 + ". Play again or hold!");
      }
    };
