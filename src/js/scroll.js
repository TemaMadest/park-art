var Scroll = (function () {
  
  var w = $(window),
      wH = w.height(),
      wScrollPos = w.scrollTop(),
      viewPos = wScrollPos + (wH*0.75),
      $els = $('.js-scroll-animate'),
  
  updateValues = function () {
    wH = w.height();
    wScrollPos = w.scrollTop();
    viewPos = wScrollPos + (wH*0.75);
  },
  
  scroll = function () {
    
    updateValues();
    
    $els.each(function () {
      var t = $(this),
          offset = t.offset().top;
      if ((viewPos >= offset) && (offset >= wScrollPos)) {
        t.removeClass('js-scroll-animate').addClass('js-scroll-done');
      }
    });
  },
  
  
  init = function () {
    w.on('scroll', $.throttle(100, scroll));
  };
  
  return { init: init };
  
}());