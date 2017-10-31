$( document ).ready(function(){
  var Random=Math.floor(Math.random()*50+12)

  //
  $('#randomNumber').text(Random);
  var numberOne= Math.floor(Math.random()*11+1)
  var numberTwo= Math.floor(Math.random()*11+1)
  var numberThree= Math.floor(Math.random()*11+1)
  var numberFour= Math.floor(Math.random()*11+1)

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
      Random=Math.floor(Math.random()*82+12);
      console.log(Random)
      $('#randomNumber').text(Random);
      numberOne= Math.floor(Math.random()*9+1);
      numberTwo= Math.floor(Math.random()*9+1);
      numberThree= Math.floor(Math.random()*9+1);
      numberFour= Math.floor(Math.random()*9+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

function success(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

function tryAgain(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

  $("#one").on ("click", function(){
    userTotal = userTotal + numberOne;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        
        if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
          tryAgain();
        }   
  })  
  $("#two").on ("click", function(){
    userTotal = userTotal + numberTwo;
   
    console.log("New userTotal= " + userTotal);
    
    $("#finalTotal").text(userTotal); 
        
    if (userTotal == Random){
          success();
       
     }

     else if ( userTotal > Random){
      
      tryAgain();
      
        } 
  })  
  $("#three").on ("click", function(){
    userTotal = userTotal + numberThree;
    
    console.log("New userTotal= " + userTotal);
    
    $("#finalTotal").text(userTotal);

          if (userTotal == Random){
          success();
        }
        else if ( userTotal > Random){
         tryAgain();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + numberFour;
    
    console.log("New userTotal= " + userTotal);
    
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
        success();
        }
        
      else if ( userTotal > Random){
        tryAgain();
        }

  });   
}); 
