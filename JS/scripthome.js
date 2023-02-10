window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
      return window.scrollY
  })

  // Add animation bindings to elements
  lax.addElements('.selector', {
      scrollY: {
          translateX: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 'pageWidth/2', 'pageWidth'],
          ]
      }
  })

//   lax.addElements('.selector2', {
//     scrollY: {
//         translateX: [
//             [ "elOutY", "elCenterY", "elInY"],
//             ['screenWidth','screenWidth/2',0],
//         ]
//     }
// })

}