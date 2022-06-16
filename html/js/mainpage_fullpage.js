$(function(){

    $('#fullpage').fullpage({
        anchors:['1week', '2week', '3week', '4week', '5week', 'footer' ],
        navigation:true,
        navigationPosition:'right',
        sectionsColor : ['#ffffff','#EE324E','#FEBE10','#00529F','#ffffff','#EE324E','#FEBE10','#00529F'],
        afterLoad: function(anchorLink, index){
            console.log("현재 섹션 번호는 " + index);
            if(index == 6) {
                alert('마지막입니다.')
            }
        },
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        //     console.log("현재 슬라이드 번호는" + slideIndex);
        //     if(slideIndex == 2) {
        //         alert('마지막입니다.')
        //     }
        // }

	});
});