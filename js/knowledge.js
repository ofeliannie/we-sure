$('div.blog').masonry({
    fitWidth: true,
});

$(window).resize(function(){
    $('div.blog').masonry();
});


$('div.blog').hide();
$('button.tab:first').addClass('-on').show();
$('div.water').show();

$('button.tab').click(function(){   
    $('button.tab').removeClass('-on');
    $(this).addClass('-on');
    

});
$('button.water').click(function(){
    $('div.elec').hide();
    $('div.water').show();
    $('div.blog').masonry();
});
$('button.elec').click(function(){
    $('div.water').hide();
    $('div.elec').show();
    $('div.blog').masonry();
});



$(function(){
    $(window).scroll(function(){
        windowH = $(this).scrollTop();
        headerH = $('header').height();
        width = $(this).width() 
        if(width < 768){
            if(218 - headerH < windowH){
                $('.btn').css({
                    'position':'fixed',
                    'top':'85px',
                    'width':'100%',
                    'z-index':'100',
                    'background-color':'white',
                    
                    
                })
            }else{
                $('.btn').css({
                    'position':'static',
                })
            }
        }else{
            $('.btn').css({
                    'position':'static',
                })
        }
    })
})