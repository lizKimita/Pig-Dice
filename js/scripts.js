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

    player1 = new RollDice;
    player2 = new RollDice;

  });
  $("#roll1").click(function() {
    this.dieScore = rollDice();
    $("#dieScore1").text(this.dieScore);

  });

  $("#roll2").click(function(){
    this.dieScore = rollDice();
    $("#dieScore2").text(this.dieScore);
});
});

//BUSINESS LOGIC
