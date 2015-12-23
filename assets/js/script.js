$( document ).ready(function() {
  $('.graphic').load( document.location.href + 'img/basic.svg', function(){

    var controller = new ScrollMagic.Controller();

    var car1 = $("#car_x5F_first");
    var tween = TweenMax.to(car1, 0.5, {
      y: '+=400',
      ease: Elastic
    });

    new ScrollMagic.Scene({
      duration: 1000,
      offset: 50
    })
    .setTween(tween)
    // .addIndicators()
    .addTo(controller);


    var car2 = $("#car_x5F_second");
    var tween = TweenMax.to(car2, 0.5, {
      y: '+=300',
      ease: Elastic
    });

    new ScrollMagic.Scene({
      duration: 550,
      offset: 1250
    })
    .setTween(tween)
    // .addIndicators()
    .addTo(controller);

  })
});
