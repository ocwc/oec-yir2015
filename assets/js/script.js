$( document ).ready(function() {
  $('.graphic').load( document.location.href + 'img/basic.svg', function(){
    // var controller = new ScrollMagic.Controller();
    //
    // var car = $("#car_x5F_first");
    // var tween = new TimelineMax()
    //     .add(TweenMax.to(car, 2, {
    //       css: {
    //         transformOrigin: "50% 50%",
    //         bezier: {
    //           curviness: 0.10,
    //           autoRotate:  ["x", "y", "rotation", 270, false],
    //           values: [
    //             {y: 900,  x: 710, opacity: 1, scaleX:   1, scaleY:   -1},
    //             {y: 2420, x: 705, opacity: 1, scaleX:   1, scaleY:   -1},
    //             {y: 2670, x: 340, opacity: 1, scaleX:   1, scaleY:   -1},
    //             {y: 2850, x: 930, opacity: 1, scaleX:   1, scaleY:   -1},
    //             {y: 2900, x: 900, opacity: 1, scaleX:   1, scaleY:   -1},
    //             {y: 3000, x: 720, opacity: 1, scaleX: 0.5, scaleY: -0.5},
    //             {y: 3500, x: 718, opacity: 1, scaleX: 0.5, scaleY: -0.5},
    //             {y: 3800, x: 720, opacity: 1, scaleX: 0.5, scaleY: -0.5},
    //             {y: 5900, x: 720, opacity: 1, scaleX: 0.5, scaleY: -0.5},
    //           ]
    //         }
    //       },
    //       ease: Power0.easeNone
    //     }))
    //
    // new ScrollMagic.Scene({
    //   duration: 5500,
    //   // offset: -150
    // })
    // .setTween(tween)
    // .addIndicators()
    // .addTo(controller);
  })
});
