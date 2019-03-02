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

    $("#turnScore1").text (this.turnScore);

  });

  $("#roll2").click(function(){
    this.dieScore = rollDice();
    $("#dieScore2").text(this.dieScore);
});
});

//BUSINESS LOGIC
