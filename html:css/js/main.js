
/* headnav scroll size */
$(function(){
    $('#headnav').data('size','big');
});

$(window).scroll(function(){
    var $nav = $('#headnav');
    if ($('body').scrollTop() > 0) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop().animate({
                height:'45px',
                opacity: 0.8
            }, 600);
            $("#headnav img").animate({
                height:'35px'
            }, 600);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop().animate({
                height:'90px',
                opacity: 1
            }, 600);
            $("#headnav img").animate({
                height:'80px'
            }, 600);
        }
    }
});
