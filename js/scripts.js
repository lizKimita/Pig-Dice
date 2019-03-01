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


var player1 = "";
var player2 = "";

$(document).ready(function(){
  $("form#players").submit(function(event){
    event.preventDefault();
    $("#gamebody").slideDown();

    player1 = new RollDice;
    player2 = new RollDice;

    this.playerName = $("input#player1").val();
    this.playerName = $("input#player2").val();

    $("#first").text(player1);
    $("#second").text(player2);


  });
  $("#roll").click(function() {
    player1 = new RollDice;
    this.dieScore = rollDice();
    $("#dieScore1").text(this.dieScore);
  });

});

//BUSINESS LOGIC
