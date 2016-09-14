$(function(){
  var count = 0;
  $('.square').on('click', function(){
    var event = $(this);
    if (event.text("")){
      if ( count % 2 === 0 ){
        event.text("X");
      } else {
        event.text("O");
      };
    count++;
  } else {
    $('status').text('Sorry that square is taken');
  };
  })
})
