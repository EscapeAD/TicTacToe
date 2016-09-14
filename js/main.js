$(function(){
  var count = 0;
  $('.square').on('click', function(){
    var call = $(this);
    if ( count % 2 === 0 ){
      call.text("X");
    } else {
      call.text("O");
    };
    count++;
  })
})
