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