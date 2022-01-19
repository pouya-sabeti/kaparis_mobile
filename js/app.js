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
const box_array = ["box_1" , "box_2" , "box_3" , "box_4" , "box_5" ];
const form_box = document.querySelectorAll(".form-box-product-filter");
function change_filter(){
    document.getElementById("form-filter").submit();
}
function open_filter(x){

    form_box[x].classList.add("open-filter");
    var ba = box_array[x];
    document.getElementById(ba).onclick = (function(){close_filter(x)});
    
}
function close_filter(x){
    form_box[x].classList.remove("open-filter");
    var ba = box_array[x];
    document.getElementById(ba).onclick = (function(){open_filter(x)});
}