$(function(){
    $( window ).scroll( function () {
     
        // 當視窗滾動到“區塊名稱”  
        if ( $(this).scrollTop() >= $('a.workplace_mbL').offset().top) {
            alert();
          $('a.workplace_mbL').addClass('animation');
    
        }  
     } );    
    
        
})