window.onload = function () {
    lax.init();

    lax.addDriver('scrollY', function () {
        return window.scrollY;
    },);

    lax.addElements('.About_Me', {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                {
                    500: [0, 1, 0], // Screen width < 500
                    900: [0, 1.5, 0], // Screen width > 500 and < 900
                    1400: [0, 2, 0], // Screen width > 900
                },
            ],
            translateX: [
                ["elInY", "elOutY"],
                ['-screenWidth', 0],
                {
                    easing: 'easeInOutQuint'
                }
            ]
        }
    });

    lax.addElements('.Purpose_Page', {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                {
                    500: [0, 1, 0], // Screen width < 500
                    900: [0, 1.5, 0], // Screen width > 500 and < 900
                    1400: [0, 2, 0], // Screen width > 900
                },
            ],
            translateX: [
                ["elInY", "elOutY"],
                ['screenWidth', 0],
                {
                    easing: 'easeInOutQuint'
                }
            ]
        }
    });


    lax.addElements('.About_Site', {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                {
                    500: [0, 1, 0], // Screen width < 500
                    900: [0, 1, 0], // Screen width > 500 and < 900
                    1400: [0, 1.5, 0], // Screen width > 900
                },
            ]
        }
    });



    lax.addElements('.photography', {
        scrollY: {
            scale: [
                ["elInY", "elCenterY"],
                [0.5, 1],
            ]
        }
    });


    lax.addElements('.fiddling', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['-screenWidth', 0, 'screenWidth'],
                {
                    easing: 'easeInOutQuint'
                }
            ]
        }
    });


    lax.addElements('.cars', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['screenWidth', 0, '-screenWidth'],
                {
                    easing: 'easeInOutQuint'
                }
            ]
        }
    });


    lax.addElements('.WorkInProgress , .WorkInProgress1', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['screenWidth', 0, '-screenWidth'],
                {
                    easing: 'easeInOutQuint'
                }
            ]
        }
    });

    // lax.addElements('#thanks', {
    //     scrollY: {
    //         translateY: [
    //             ["elInY", "elOutY"],
    //             ['-screenWidth/2', 'screenWidth'],
    //         ],
    //         "rotate": [
    //             ["elInY", "elOutY"],
    //             ['screenWidth', '-screenWidth'],
    //         ]
    //     }
    // });



    window.addEventListener("load", function() {
        lax.setup(); // initialize Lax.js
        
        lax.addDriver("scrollY", function() {
          return window.scrollY;
        }); // define the scroll driver
        
        lax.addElements(".spinner", { // add the animation to the .spinner element
          translateY: [
            ["elInY", "elCenterY", "elOutY"], // animation stages
            [0, "screenHeight/2", 0] // corresponding translateY values
          ],
          opacity: [
            ["elInY", "elCenterY", "elOutY"], // animation stages
            [1, 0.5, 0] // corresponding opacity values
          ],
          rotate: [
            ["elInY", "elCenterY", "elOutY"], // animation stages
            [0, 360, 0] // corresponding rotate values
          ]
        });
      });




}