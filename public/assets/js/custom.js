function typeAnimation(){
    var slides = $('.slides');
    images = slides.find('img');

    images.each(function(i) {
        $(this).attr('data-id', i+1);
    });

    var typed = new Typed('.typed-words', {
        strings: ['<b>Catalog</b>', '<b> Catalog</b>','<b>Catalog</b> '],
            typeSpeed: 100,
        backSpeed: 100,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        onStringTyped: (arrayPos,self) => {
            arrayPos++;
            // console.log(arrayPos);
            $('.slides img').removeClass('active');
            $('.slides img[data-id="'+arrayPos+'"]').addClass('active');
        }

    });       
}
