// 下拉選單

$(function(){

    $('.subList').hide();
    $('li.main').click(function(){
        $(this).siblings().children('.subList').slideUp();
        $(this).children('.subList').slideToggle();
        $(this).toggleClass('open');
    })
    $('.sublist > li').click(function(){
        return false;
    })

    $('ul.listMb').hide();
    $('div.list_img').click(function(){
        $(this).siblings('.listMb').slideToggle();
    })
    $('.list_img > li').click(function(){
        return false;
    })


});



// 換頁
$(function(){
  
    $('li.water1').click(function(){
        $('div.work').removeClass('-on');
        $('div.water1').addClass('-on');
        $('aside').css({
            'display':'inline-block',
        })
        
        $('main').addClass('content')

    })
  
    $('li.air1').click(function(){
        $('div.work').removeClass('-on');
        $('div.air1').addClass('-on');
        $('aside').css({
            'display':'inline-block',
        })
        $('main').addClass('content')

    })
    $('li.air2').click(function(){
        $('div.work').removeClass('-on');
        $('div.air2').addClass('-on');
        $('aside').css({
            'display':'inline-block',
        })
        $('main').addClass('content')

    })
    $('li.elec1').click(function(){
        $('div.work').removeClass('-on');
        $('div.elec1').addClass('-on');
        $('aside').css({
            'display':'inline-block',
        })
        $('main').addClass('content')

    })
    $('li.elec2').click(function(){
        $('div.work').removeClass('-on');
        $('div.elec2').addClass('-on');
        $('aside').css({
            'display':'inline-block',
        })
        $('main').addClass('content')

    })
    $('li.solar1').click(function(){
        $('div.work').removeClass('-on');
        $('div.solar1').addClass('-on');
        $('aside').css({
            'display':'inline-block',
        })
        $('main').addClass('content')

    })
    $('li.solar2').click(function(){
        $('div.work').removeClass('-on');
        $('div.solar2').addClass('-on');
        $('aside').css({
            'display':'inline-block',
        })
        $('main').addClass('content')


    })   
});



// workplace_pic
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    arrows: true,

    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
        }
        },
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,

        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,

        }
        }
        
    ]
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
});


          