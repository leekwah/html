$(function(){
  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("#navflex").removeClass("deactive");
        $("#navflex").addClass("active");
    }else{
        $("#navflex").removeClass("active");
        $("#navflex").addClass("deactive");
    }
  })

});
