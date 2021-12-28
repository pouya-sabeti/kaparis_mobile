function open_nav(){
    document.querySelector('.ul-menu').classList.add("open-nav");
    document.querySelector('.black-page').classList.add("visibility-show");
    document.querySelector('.ss').classList.add('visibility-hidden');
}
function close_nav(){
    document.querySelector('.ul-menu').classList.remove("open-nav");
    document.querySelector('.black-page').classList.remove("visibility-show");
    document.querySelector('.ss').classList.remove('visibility-hidden');
}
function open_login(){
    document.querySelector('.pop-up-panel').classList.add("show-pop-up");
    document.querySelector('.black-page-2').classList.add("visibility-show");
}
function close_pop_up(){
    document.querySelector('.pop-up-panel').classList.remove("show-pop-up");
    document.querySelector('.black-page-2').classList.remove("visibility-show");
}
// var myvar = setInterval(time,10);
//        function time(){
        
//         var b = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//         if(b < 867){
//             document.getElementById("owl-2").classList = "ss";
            
//         }
//        }