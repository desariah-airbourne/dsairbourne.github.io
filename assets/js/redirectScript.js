function checkwidth() { 
    if($(window).width() > 950) {
        window.location = "https://www.airbourne.xyz/d/index.html";
    } else if ($(window).width() < 950) {
        window.location = "https://www.airbourne.xyz/m/index.html";
    };

};


window.onload = checkwidth();


$(window).on('load resize',function(){
    if($(window).width() < 950){
        window.location = "https://www.airbourne.xyz/m/index.html"
    }
});

$(window).on('load resize',function(){
    if($(window).width() > 950){
        window.location = "https://www.airbourne.xyz/d/index.html"
    }
});