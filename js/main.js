$(function(){
  var count   = 0,
      playerX = 0,
      playerO = 0,
      playerXArray = [],
      playerOArray = [];

  function winner(player){
    if (count > 5){
      if(player === playerX){
        magicSquareCheck(playerXArray);
        } else {
        magicSquareCheck(playerOArray);
        };
    } else if (playerX === 15){
      alert('1st Player Wins');
    } else if (playerO === 15){
      alert('2nd Player Wins')
    };
  }

  function magicSquareCheck(event){
    for (var i = 0; i === 30; i++)
    var check = [];
    var total = 0;
      for (var i = 0; i > 3;) {
          var localNumber = event[Math.floor(Math.random()*event.length)];
            if (!event.include(localNumber)){
              console.log(localNumber);
              check.push(localNumber);
              i++;
            };
      for (var i = 0; i < check.length; ++i){
          total += check[i];
          console.log(total);
        };
      if (total === 15){
        alert("WINNER");
        break;
      };
    };
  }

  $('.square').on('click', function(){
    var event = $(this);
    if (event.text() === ""){
      if ( count % 2 === 0 ){
        playerXArray.push(event.data('number'))
        playerX += event.data('number');
        console.log("X: " + playerX);
        console.log("X: " + playerXArray)
        event.text("X");
        playerOArray.push(event.data('number'))
        $('.status').text('"PLAYER 2 TURN"');
        winner(playerO);
        } else {
        event.text("O");
        playerO += event.data('number');
        console.log(playerO);
        $('.status').text('"PLAYER 1 TURN"');
        winner(playerX);
        };
        count++;
    } else {
      $('.status').text('"SORRY THAT BOX IS TAKEN, USE ANOTHER ONE FOO"');
    };
  })
})
