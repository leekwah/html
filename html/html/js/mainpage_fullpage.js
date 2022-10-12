$(function(){

    $('#fullpage').fullpage({
        anchors:['1week', '2week', '3week', '4week', '5week', '6week','footer' ],
        navigation:true,
        controlArrows: true,
        navigationPosition:'right',
        sectionsColor : ['#ffffff','#EE324E','#FEBE10','#00529F','#ffffff','#EE324E','#FEBE10','#00529F'],
        loopTop: true,
        loopBottom: true,
        keyboardScrolling: true,
        // afterLoad: function(anchorLink, index){
        //     console.log("현재 섹션 번호는 " + index);
        //     if(index == 7) {
        //         alert('곧 추가하겠습니다.')
        //     }
        // },
	});
});