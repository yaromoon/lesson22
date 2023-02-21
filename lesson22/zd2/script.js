const getS = selector => document.querySelector(selector);
let r, g, b, w, h, mt, ml, n, c,cb,sh;
//$('.circle').on('click', function () {
//$(document).ready(function () {
    setInterval(function () {
        r = Math.round(Math.random() * 255);
g = Math.round(Math.random() * 255);
b = Math.round(Math.random() * 255);
w = Math.round(Math.random() * 400);
h = Math.round(Math.random() * 400);
mt = Math.round(Math.random() * 600);
ml = Math.round(Math.random() * 600);
c = "rgb(" + r + "," + g + "," + b + ")";
r = Math.round(Math.random() * 255);
g = Math.round(Math.random() * 255);
b = Math.round(Math.random() * 255);
cb="rgb(" + r + "," + g + "," + b + ")";
sh=5+'px '+5+'px '+10+'px '+10+'px '+c; 
$('.circle').css( 'box-shadow',sh),

        $('.circle').animate({

            width: w,
            height: h,
            backgroundColor: c,
            borderColor : cb,
            marginTop: mt,
            marginLeft: ml,
        }, 1000, 'swing');
    }, 1500);
//});
//});
