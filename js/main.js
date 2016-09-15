$(function(){
  var count   = 0,
      playerX = 0,
      playerO = 0,
      playerXArray = [],
      playerOArray = [];

  function winner(player){
    if (count > 6){
      if(player === playerX){
        magicSquareCheck(playerXArray);
      } else {
        magicSquareCheck(playerOArray);
      }
    } else if (player === 15){
      alert('Winner');
    };
  }

  function magicSquareCheck(event){
    for (var i = 0; i === 30; i++)
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
