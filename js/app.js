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
// var myvar = setInterval(time,10);
//        function time(){
        
//         var b = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//         if(b < 867){
//             document.getElementById("owl-2").classList = "ss";
            
//         }
//        }