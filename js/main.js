$(function(){
  var count   = 0,
      playerX = 0,
      playerO = 0,
      playerXArray = [],
      playerOArray = [];

  function winner(){
    if (playerX === 15){
      alert('Player 1 Wins!');
    } else if (playerO === 15){
      alert('Player 2 Wins');
    } else {

    }
  }

  function magicSquareCheck(event){
    var check = [];
      for (var i = 0; i > 3;) {
          var localNumber = event[Math.floor(Math.random()*event.length)];
            if (!event.include(localNumber)){
              check.push(localNumber);
              i++;
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
        winner();
        } else {
        event.text("O");
        playerO += event.data('number');
        console.log(playerO);
        $('.status').text('"PLAYER 1 TURN"');
        winner();
        };
        count++;
    } else {
      $('.status').text('"SORRY THAT BOX IS TAKEN, USE ANOTHER ONE FOO"');
    };
  })
})
