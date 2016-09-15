$(function(){
  var count   = 0,
      playerX = 0,
      playerO = 0,
      playerXArray = [],
      playerOArray = [];

  function winner(player){
    if (count > 5){
        magicSquareCheck(player);
    } else if (playerX === 15){
      alert('1st Player Wins');
    } else if (playerO === 15){
      alert('2nd Player Wins')
    };
  }
  function random(array){
    return Math.floor(Math.random() * array.length)
  }
  function magicSquareCheck(player){
    var event = player;
    if (player == playerX){
        event = playerXArray;
    } else {
        event = playerOArray;
    }
    for (var i = 0; i > 30; i++)
    var check = new Array(3);;
    var total = 0;
      for (var i = 0; i > 3; i) {
          var localNumber = event[random(event)];
            if (!event.include(localNumber)){
              console.log(localNumber);
              check.push(localNumber);
              i++;
            };
      for (var i = 0; i < check.length; i++){
          total += check[i];
          console.log(check);
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
