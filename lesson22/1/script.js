$(function(){
let t , l , ind;
    $('.box').on('click', function(){
        l = $(this).css('left');
        t = $(this).css('top');
        ind = $(this).attr('id');
        $('.modal').css({
            top: (window.innerHeight - 400)/2,
            left: (window.innerWidth - 400)/2,
            zIndex: '99'
        })
        $('.modal-container').css({
            backgroundColor: '#000000c7',
            zIndex: 3
        });
        $(this).css( 'zIndex' , '98');
        $(this).animate({
            width: '400px',
            height: '400px',
            top: (window.innerHeight - 400)/2,
            left: (window.innerWidth - 400)/2,
        },1000);
        $('.modal').on('click',function(){
            $('.box').eq(ind-1).animate({
                width: '200px',
                height: '200px',
                top: t,
                left: l,
                zIndex: '2',
            },1000);
            $('.modal-container').css({
                backgroundColor: '#fff',
                zIndex: -1
            });
        })
        
    })




})