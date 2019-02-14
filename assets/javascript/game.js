

$(document).ready(function() {


 
  var wins = 0;
  var loses = 0;
  var playerGuess;
  
  
  
  
  
  var cpuPick;
  
  $("#cpu-random-guess").append(cpuPick)
  
  
  
  var ruby;
  var saphire;
  var emerald;
  var amethyst;
  
  gameReset();
  
  $("img").click(function(){
    
    var gemProperty = ($(this).attr("gem-property"));
    gemProperty = parseInt(gemProperty);
  
    playerGuess += gemProperty;
   
  
    $("#player-guess").text(playerGuess);
    console.log(cpuPick);
    console.log(playerGuess);
    
  
    if (cpuPick === playerGuess) {
      wins++;
      $("#wins-scored").text(wins);
      gameReset()
    } 
    
    
    else if (playerGuess > cpuPick) {
      loses++;
      $("#loses-scored").text(loses);
      gameReset()
    }
  
  
  
  })
  
  function gameReset(){
    cpuPick = Math.floor(Math.random() * 120) + 19;
    $("#cpu-random-guess").text(cpuPick);
    playerGuess = 0;
  
    ruby = Math.floor(Math.random() * 12) + 1;
    saphire = Math.floor(Math.random() * 12) + 1;
    emerald = Math.floor(Math.random() * 12) + 1;
    amethyst = Math.floor(Math.random() * 12) + 1;
  
    $("#img1").attr("gem-property", ruby);
    $("#img2").attr("gem-property", saphire);
    $("#img3").attr("gem-property", emerald);
    $("#img4").attr("gem-property", amethyst);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  })
  