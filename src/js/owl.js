var Owl = (function () {
  
  var $empl = $('.employers').find('ul'),
  
  init = function () {
    if ($empl.length) {
      $empl.bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 3,
        slideMargin: 10
      });
    }
  };
  
  return { init: init };
  
}());