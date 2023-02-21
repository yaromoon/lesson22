let f = 0;
$(function () {
 let t1, l1, w1, h1;
    $('.box').on('click', function () {
       
        if (f == 0) {
            f = 1;
            t1 = $(this).css('top');
            l1 = $(this).css('left');
            w1 = $(this).width();
            h1 = $(this).height();
            console.log(t1);
console.log(l1);
console.log(w1);
console.log(h1);
            $('.modal-container').css({
                backgroundColor: '#000000c7',
                zIndex: 3
            });
           /* $('.wrapper').css({
                zIndex: -2,

            });*/
            
            $(this).animate({

                zIndex: 4,
                position: 'absolute',
                top: (window.innerHeight - $(this).height()) / 3,
                left: (window.innerWidth - $(this).width()) / 4,
                width: (window.innerWidth - $(this).width()) / 2,
                height: (window.innerWidth - $(this).height()) / 3

            }, 1500)
console.log(f);
console.log(11);

} else {
            f = 0;
            $('.modal-container').css({
                backgroundColor: '#fff',
                zIndex: -1

            });
            $('.wrapper').css({
                zIndex: 1,

            });
            $(this).animate({

                zIndex: 3,
                position: 'relative',
                top: t1 ,
                left: l1 ,
                width: w1 ,
                height: h1 

            }, 1500)
            console.log(f);
            console.log(22);
            console.log(t1);
console.log(l1);
console.log(w1);
console.log(h1);
        }
    })

})