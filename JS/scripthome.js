window.onload = function () {
    lax.init();

    lax.addDriver('scrollY', function () {
        return window.scrollY;
    },);

    lax.addElements('.About_Me', {
        scrollY: {
            scale: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 2, 0],
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
                [0, 2, 0],
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
                [0, 2, 0],
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



}