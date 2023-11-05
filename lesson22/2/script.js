$(function(){
    $('.ball').on('click',function(){
        let wid = Math.round(Math.random()*400);
        let hei = Math.round(Math.random()*400);
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        $('.ball').animate({
            width: `${wid}px`,
            height: `${hei}px`,
            backgroundColor: `rgb( ${r}, ${g} ,${b})`,
            left: `${Math.random()* (window.innerWidth - wid)}px`,
            top: `${Math.random()* (window.innerHeight - hei)}px`
        },3000 , 'easeInOutElastic');
    })





})