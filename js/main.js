$(function(){
  var count = 0;
  $('.square').on('click', function(){
    var event = $(this);
    if (event.text() === ""){
      if ( count % 2 === 0 ){
        event.text("X");
        $('.status').text('"PLAYER 2 TURN"');

        } else {
        event.text("O");
        $('.status').text('"PLAYER 1 TURN"');

        };
      count++;
    } else {
      $('.status').text('"SORRY THAT BOX IS TAKEN, USE ANOTHER ONE FOO"');
    };
  })
})
