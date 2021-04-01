jQuery(document).ready(function($) {
     // Statistics
    if ($(window).width() <= 768){
        $('.round').removeClass('rotate');
    }
    var texts = $('.stats-item');
    var point = 0;
    function changeText(){
      $('.round').empty().html(
        '<div class="stats-item">' + 
          texts.eq(point).html() + 
        '</div>'
        );
      if(point < texts.length - 1){
        point ++;
      }else{
        point = 0;
      }
      setTimeout(changeText, 5000)
    }
    changeText();

    // Services
    $('.svc a').on('click', function(){

        // Show slected service
        var i;
        var x = $(".service-description");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
         }
        $(".service-description." +  $(this).data('svc') ).css("display", "block"); 

        // Scroll to selected service
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function(){
                window.location.hash = hash;
            });
        } 
    });

    // Mobile menu
    function openNav(x) {
        $('body').toggleClass('noscroll');
        $(x).toggleClass("change");
        $('.mob-menu-container div').toggleClass('white');
        $(x).toggleClass("overlay-height");
        $("#mob-nav").toggleClass("overlay-height");
    }
    // on click open mobile navigation
    $('.mob-menu-container').on('click', function(){
        openNav(this);
    });

    $('.overlay-content a').on('click', function(){
      $('body').removeClass('noscroll');
      $('.mob-menu-container').removeClass('change')
      $('.mob-menu-container div').removeClass('white');
      $("#mob-nav").removeClass("overlay-height");
    });

    // Pricelist

    // Show slected service
    $('.pricelist-services a').on('click', function(){
      var i;
      var x = $(".table-wrapper table");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      $('.'+ $(this).data('pricelist')).css("display", "inline-table");  
    });

    if ($(window).width() <= 768) {
        $('.active-pricelist').next().css({'border-left': '6px solid #1C1D1E !important'});
        $('.active-pricelist').prev().css({'border-right': '6px solid #1C1D1E !important'});
    }
    else{
        $('.active-pricelist').next().css('border-left', 'none');
        $('.active-pricelist').prev().css('border-right', 'none');
    }

    // Pricelist Tabs
    $('.pricelist-services a').on('click', function(){
        $('.pricelist-services a').removeClass('active-pricelist').css({'border': '3px solid #1C1D1E', 'border-top': '6px solid #1C1D1E', 'border-bottom': 'none'});
        $('.pricelist-services a:first-child').css('border-left','6px solid #1C1D1E');
        $('.pricelist-services a:last-child').css('border-right','6px solid #1C1D1E');

        if ($(window).width() <= 768) {
             $('.pricelist-services a').removeClass('active-pricelist').css({'border': '6px solid #1C1D1E', 'border-bottom': 'none'});   
        }

        $(this).addClass('active-pricelist');
        if ($(window).width() <= 768) {
            $(this).next().css({'border-left': '3px solid #1C1D1E !important'});
            $(this).prev().css({'border-right': '3px solid #1C1D1E !important'});
        }
        else{
            $(this).next().css('border-left', 'none');
            $(this).prev().css('border-right', 'none');
        }
    });

    // Gallery 

    // selected title
    $('.gal-item').on('click', function(){
        $('.gallery-modal .gal-title h2').text( $(this).find('.work-wrapper .work p').text() );
    });

    // scroll
    $('.gal-img-container').overlayScrollbars({className: "os-theme-round-dark",resize: "vertical",
    sizeAutoCapable : true,
    paddingAbsolute : true}); 


    // Main slider / slick slider
    var $slickElement = $('.cons-slider');
    $slickElement.slick({
       arrows: true,
       slidesToShow: 1,
       prevArrow:  $('.prev-apt'),
       nextArrow:  $('.next-apt'),
       dots: true,
       dotsClass: 'cons-dots',
       appendDots: $('.cons-dots-wrapper'),
       autoplay: true,
       responsive: [
            {
              breakpoint: 480,
              settings: {
                autoplay: false
              }
            },
          ]
    });


    // Application form (Agree)
    $('#agree-chk').on('change', function(){
        if($(this).is(':checked')){
            $('.apl-checked').css('display','block')
        }
        else{
            $('.apl-checked').css('display','none')
        }
    });

    // Comment form (Agree)
    $('#cmt-agree-chk').on('change', function(){
        if($(this).is(':checked')){
            $('.cmt-apl-checked').css('display','block')
        }
        else{
            $('.cmt-apl-checked').css('display','none')
        }
    });
});


