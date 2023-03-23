function typeAnimation(){
    // var catalog = ['catalog','catalog','catalog'];
    //         var catalogPush = [];
    //         for(var c = 0; c < catalog.length; c++) {
    //             catalogPush +=  catalog[c];
    //         }
    //         console.log(catalogPush);
    //         catalog.forEach((element, index, array) => {
    //             console.log(element);
    //             console.log(index);
    //             console.log(array);
    //             // catalogPush.push(Object.keys(element))
    //         });

    //         console.log((catalog)[0]);

            var slides = $('.slides');
			images = slides.find('img');

			images.each(function(i) {
				$(this).attr('data-id', i + 1);
			});

            const data = [
                { datavalue: 'Catalog' },
                { datavalue: 'Catalog' },
                { datavalue: 'Catalog' },
              ];
            const defaultSpeed = 100;
            
            // document.querySelectorAll('.typed-words').forEach(el => new Typed(el, {
            //         strings: data.map(row => row.datavalue),
            //         stringsElement: null,
            //         typeSpeed: defaultSpeed,
            //         backSpeed: 80,
            //         backDelay: 3000,
            //         startDelay: 1000,
            //         loop: true,
            //         showCursor: true,
            //     /** before each string gets typed, we set the "typeSpeed" to "20" when the string index is "1" otherwise we set it to "100" (the "defaultSpeed" variable) */
            //     // preStringTyped: (arrayPos, self) => self.typeSpeed = arrayPos == 1 ? 20 : defaultSpeed
            //     preStringTyped: (arrayPos, self) => {
            //         arrayPos++;
            //         self.typeSpeed = arrayPos == 1 ? 20 : defaultSpeed;
            //         console.log(arrayPos++);
            //         $('.slides img').removeClass('active');
            //         $('.slides img[data-id="'+arrayPos+'"]').addClass('active');
            //     }
            //   }));

            // console.log(images);
                var typed = new Typed('.typed-words', {
                    strings: ["Catalog", "Catalog", "Catalog"],
                    stringsElement: null,
                    typeSpeed: 80,
                    backSpeed: 80,
                    backDelay: 2000,
                    startDelay: 1000,
                    loop: true,
                    showCursor: true,
                    preStringTyped: (arrayPos, self) => {
                        arrayPos++;
                        // self++;
                        // console.log(arrayPos++);
                        $('.slides img').removeClass('active');
                        $('.slides img[data-id="'+arrayPos+'"]').addClass('active');
                    }
    
                });
			

            
}
