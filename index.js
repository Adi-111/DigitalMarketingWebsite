
$($(document).ready(function () {
    console.log('document was created');
    
    $(document).ready(function() {
        $.fn.slide = function() {
            var slidesToDisplay = 3.6;
            var slider = $(this).children().children();
            var sliderOuter = $(this).children();
            var sliderOuterWidth = parseInt(sliderOuter.css('width'));
            var eachSlideWidth = sliderOuterWidth / slidesToDisplay;
            var dots = $('.dots .dot');
    
            $(slider).children().css('width', eachSlideWidth);
    
            var currentSlide = 0;
            var totalSlides = slider.children().length - 2;
    
            function updateDots() {
                dots.removeClass('active');
                dots.eq(currentSlide).addClass('active');
            }
    
            function slideToNext() {
                if (currentSlide < totalSlides - 3.6) {
                    currentSlide++;
                } else {
                    currentSlide = 0;
                }
                slider.animate(
                    { right: currentSlide * eachSlideWidth },
                    {
                        duration: 2000,  // duration in milliseconds
                        easing: 'swing', // easing function
                        step: function() {
                            updateDots();
                        },
                        complete: function() {
                            updateDots();
                        }
                    }
                );
            }
    
            updateDots();
            setInterval(slideToNext, 3000);
        };
        
        // Initial state setting
        $('.hover-s').hide();
        $('.slide-image').show();
    
        $('.slider-overflow').slide();
    
        $('.slide-content').hover(
            function() {
                $(this).find('img').hide();
                $(this).find('.hover-s').show();
            },
            function() {
                $(this).find('.hover-s').hide();
                $(this).find('img').show();
            }
        );

    });
       
    
    
    
    
    // card hover function 
    $('.card').hover(
        function () {
            // over
            $(this).addClass('hovered');
            
            
        }, 
        function () {
            // out
            $(this).removeClass('hovered');
        }
    );
    
    
    $('.p-div-div-div').hover(
        function(){
            $(this).addClass('hovered-project');
            
        },
        function () {
            // out

            $(this).removeClass('hovered-project');
            
        }
    
    );
    
    $('#img1').hover(function () {
            // over
            $('.p-div-img').attr('src', './assets/projects/img1.jpg');
            
        }, function () {
            $('.p-div-img').attr('src', './assets/projects/img.jpg');
            // out
        }
    );
    $('#img2').hover(function () {
        // over
        $('.p-div-img').attr('src', './assets/projects/img2.jpg');
        
    }, 
        function () {
            $('.p-div-img').attr('src', './assets/projects/img.jpg');
        // out
        }
    );
    $('#img3').hover(function () {
        // over
        $('.p-div-img').attr('src', './assets/projects/img3.jpg');
        
    }, function () {
        $('.p-div-img').attr('src', './assets/projects/img.jpg');
        // out
    }
);
    console.log('jquery was executed sucessfully');
    
    
}));