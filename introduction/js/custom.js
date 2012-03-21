var e;
$(document).ready(function() {
  $('#answer').on('click', function(){
    if ($("#1a").attr('checked')) {
      alert("correct");
    }
    else {
      alert("fail, try again");
    }
  });
});