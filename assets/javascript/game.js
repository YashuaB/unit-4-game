

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

  for(var i = 0; i< gemChoice.length;++1){
    gemValue.push(gem);

    gemDiv = $("<img>");

    gemDiv.attr(scr ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48mcPy21FDJkOGJrqUZBX6IthRPGTWF3nN2aO_FzH36iRXaO1")

    gemDiv.attr("gem-property", gemValue[i]);

    $(".gem").append(gemDiv);

   }
     
 
  $(".gem-icon").click(function(){
    
    var gemProperty = ($(this).attr("gem-property"));
    gemProperty = parseInt(gemProperty);

    playerGuess += gemProperty;
    // take gem value and pass it to the player guess


    if(cpuPick === playerGuess/*compare to what the player click and the value*/){
      this.wins++;
    } 
    
    
    else if( cpuPick !== playerGuess/*player pick greater than cpu pick*/ ){
      this.loses++;
    }
  


  })

  function gameReset(){
    gemValue = [];
    cpuPick;

  }

  // gameReset()

  

  


























})