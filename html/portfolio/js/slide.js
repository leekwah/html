        $(document).ready(function(){
            $('.open').click(function(){
                $('.sidebar').animate({'right' : 0}, 500);
            });
            $('.close').click(function(){
                $('.sidebar').animate({'right' : '-100%'}, 500);
            });
        });