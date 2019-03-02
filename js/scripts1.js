function RollDice(name, score1, score2, score3) {
  this.playerName = name;
  this.dieScore = score1;
  this.perTurnScore = score2;
  this.totalScore = score3;
}

function rollDice(){
  return (Math.floor(Math.random()*6)+1);
  if (rollDice === 1) {
    return ("Oh no! You just rolled a 1, Your total score is back to zero!")
    return totalScore === 0;
    // also give turn to the next person
  }
  else {
    return ("You rolled" + rollDice + "Play again!")
    return perTurnScore = new perTurnScore + rollDice
    //roll button and the hold button are active for this player
    return totalScore = new totalScore + perTurnScore
  }
}
