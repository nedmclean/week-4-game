$( document ).ready(function(){
  var Random=Math.floor(Math.random()*82+10)

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
      Random=Math.floor(Math.random()*82+10);
      console.log(Random)
      $('#randomNumber').text(Random);
      numberOne= Math.floor(Math.random()*9+1);
      numberTwo= Math.floor(Math.random()*9+1);
      numberThree= Math.floor(Math.random()*9+1);
      numberFour= Math.floor(Math.random()*9+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } );
