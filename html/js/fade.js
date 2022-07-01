$(function(){
  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("#header").removeClass("deactive");
        $("#header").addClass("active");
    }else{
        $("#header").removeClass("active");
        $("#header").addClass("deactive");
    }
  })

});
