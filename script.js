$(function () {
    
    
  
    // NAVBAR MENU COLLAPSE AFTER CLICKING AN OPTION ON SMALL SCREENS
    $('.navbar-collapse ul li a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    
    //SMOOTH SCROLLING
    $(".navbar-nav li a[href^='#'], .cover-text a, .navbar-header a").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 90
        }, 800, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });
    });
  
  
    //ENTRANCE ON SCROLL ANIMATION 
    $(".entranceRight").css('opacity', 0);
    
    $(".entranceRight").waypoint(function(){
        $(".entranceRight").addClass('animated fadeInRight');
    }, { offset: '50%' });
    
    $(".entranceLeft").css('opacity', 0);
    
    $(".entranceLeft").waypoint(function(){
        $(".entranceLeft").addClass('animated fadeInLeft');
    }, { offset: '50%' });
    
    $(".entranceUp").css('opacity', 0);
    
    $(".entranceUp").waypoint(function(){
        $(".entranceUp").addClass('animated fadeInUp');
    }, { offset: '50%' });
    
    $(".entranceContactLeft").css('opacity', 0);
    
    $(".entranceContactLeft").waypoint(function(){
        $(".entranceContactLeft").addClass('animated fadeInLeft');
    }, { offset: '50%' });
    
    $(".entranceContactRight").css('opacity', 0);
    
    $(".entranceContactRight").waypoint(function(){
        $(".entranceContactRight").addClass('animated fadeInRight');
    }, { offset: '50%' });

    $('#sclr').css('height', $('#sclr').height());
            $('.sclr-childs').each(function() {
                $(this).css('width', $(this).width());
                var widths = 0,
                    heights = 0,
                    divheight = 0;
                $(this).prevAll().each(function() {
                    widths += $(this).width();
                    heights += -($(this).height());
                });
                $(this).css('transform', 'translate(' + widths + 'px,' + heights + 'px)');
                //console.log(widths + '-' + heights);
                // console.log($(this).css());
            });
            $('#sclr').each(function() {
                var child_count = $(this).children().children().length;
                $(this).children().width($(this).width() * child_count);
            });

            var settop = $('.sclr-wrapper').offset().top;
            $(window).scroll(function() {
                if ($(this).scrollTop() >= $('#sclr').offset().top) {
                    $('.sclr-wrapper').addClass('fixit');
                }else{
                    $('.sclr-wrapper').removeClass('fixit');
                };
                if ($(this).scrollTop() >= $('#sclr').offset().top && $(this).scrollTop() + $(this).height() <= $('#sclr').offset().top + $('#sclr').height()){
                    $('.sclr-wrapper').css('margin-left', -($(this).scrollTop() - settop)*$('.sclr-wrapper').width()/$('#sclr').height());
                };
                if($(this).scrollTop() + $(this).height() >= $('#sclr').offset().top + $('#sclr').height() ){
                    $('.sclr-wrapper').addClass('absit');
                }
                else{
                    $('.sclr-wrapper').removeClass('absit');   
                }
                //console.log(($(window).scrollTop() + $(window).height())+'-'+($('#sclr').offset().top + $('#sclr').height()));
            });

});