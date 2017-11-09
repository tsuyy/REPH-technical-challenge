$(document).ready(function(){
  $('#blog-hover').hover(function(){
    $('#add-class').addClass('fade-left');
  }, function() {
    $('#add-class').removeClass('fade-left');
  });
});
