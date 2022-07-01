$(function() {
  $('.hamburger-butto').on('click', function(event){
      event.preventDefault();
      
      $(this).toggleClass('active');
      $('.overlay').toggleClass('visible');

  });
});
