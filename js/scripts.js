//USER INTERFACE (FRONT-END);

function RollDice(name, score1, score2, score3) {
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

    player1 = new RollDice;
    player2 = new RollDice;

  });
  $("#roll1").click(function() {
    this.dieScore = rollDice();
    $("#dieScore1").text(this.dieScore);
    score1(this.dieScore);

  });
  $("#roll2").click(function(){
    this.dieScore = rollDice();
    $("#dieScore2").text(this.dieScore);
});

  $("#Hold1").click(function(){
    $(document.getElementById("Hold1").disabled = true);
    $(document.getElementById("roll1").disabled = true);
  });

  $("#Hold2").click(function(){
    $(document.getElementById("Hold2").disabled = true);
    $(document.getElementById("roll2").disabled = true);
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
    $("#turnScore1").text(this.dieScore);
    $("#totalScore1").text(this.dieScore);
    }
    else {
    $("#comment") .text("You rolled " + ans + ". Play again or hold!");
    }
  };
