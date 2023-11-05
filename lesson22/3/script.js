$(function(){

        
    setInterval(function(){
        let wid = Math.round(Math.random()*400);
        let hei = Math.round(Math.random()*400);
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        $('.ball').animate({
            width: `${wid}px`,
            height: `${hei}px`,
            left: `${Math.random()* (window.innerWidth - wid )}px`,
            top: `${Math.random()* (window.innerHeight - hei )}px`,
            
        },1000, 'easeOutQuart');
        $('.ball').css('box-shadow',  `0 1px 50px 5px rgb( ${r}, ${g} ,${b})`);
        $('.ball').css('background-color',  `rgb( ${r}, ${g} ,${b})`);
        $('.ball').css('border' , `3px solid rgb( ${Math.random()*255}, ${Math.random()*255} ,${Math.random()*255})`);
    },500);



})