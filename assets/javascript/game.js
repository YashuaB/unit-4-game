

$(document).ready(function() {

  var cpuRandomNum = 0;
  var gemRandomNum = 0;
  var wins = 0;
  var loses = 0;
  var playerGuess = 0
  var gemValue = []
  var gemChoice = [1,2,3,4]

  /*This for loop is for generating four random number
  and pushing to the gems
  
  for(var i = 0; i< gemChoice.length;++1){
    gemValue.push(gem)
  }*/

  gem = gemRandomNum[Math.floor(Math.random() * 12) + 1]
  cpuPick = cpuRandomNum[Math.floor(Math.random() * 120) + 19]

  $(".cpu-random-guess").text(cpuPick)
  $(".player-guess").text(gem)
  console.log(gem)
  console.log(cpuPick)
  $(".gem-icon").click(function(){
    for(var i = 0; i< gemChoice.length;++1)
      gemValue.push(gem);
    console.log(gemValue);
    // take gem value and pass it to the player guess
  })

  function gameReset(){
    gemValue = [];
    cpuPick;

  }

  if(cpuPick === /*compare to what the player click and the value*/){
    wins++;
  } else if( /*player pick greater than cpu pick*/ ){
    loses++;
  }


  

  


























})