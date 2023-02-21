const getS = selector => document.querySelector(selector);
let r, g, b, w, h, mt, ml, n,c;
$('.circle').on('click', function () { r = Math.round(Math.random() * 255);
            g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        w = Math.round(Math.random() * 400);
        h = Math.round(Math.random() * 400);
        mt= Math.round(Math.random() * 600);
        ml= Math.round(Math.random() * 600);
        c="rgb(" + r + "," + g + "," + b + ")";
    $('.circle').animate({
       
        width : w ,
        height : h ,
        backgroundColor : c,
        marginTop : mt ,
        marginLeft : ml ,
    }, 1000, 'swing');
});
