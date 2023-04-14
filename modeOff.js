alert("modeee off")
(function (){

    document.querySelector("html").style.filter ="invert(0) hue-rotate(0deg)";
    
    let media = document.querySelectorAll("img, text ,picture, video");
    
    media.forEach((mediaItem) => {
        mediaItem.style.filter ="invert(0) hue-rotate(0deg) ";
    })
    })();