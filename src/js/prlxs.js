var Prlxs = (function () {
  
  var w = $(window),
      wW = w.width(),
      wH = w.height(),
      rows = $('.js-prlxs'),
      scrollPos = w.scrollTop() + wH,
      
  onScroll = function () {
    
    scrollPos = w.scrollTop() + wH;
    
    rows.each(function () {
      var $this = $(this),
          $list = $this.find('.col.list'),
          listScrollPos = $list.offset().top;
      
      //console.log($img, $list);
      
      if (scrollPos >= listScrollPos) {
        var $img = $this.find('.col.img'),
            listHeight = parseInt($list.css('height')),
            offset = (listHeight*0.25) - (scrollPos - listScrollPos)*0.25;
        
        $img.css('transform', 'translateY('+offset+'px)');
      }
      
    });
    
    //console.log(scrollPos); 
  },
  
  setDefaults = function () {
    rows.each(function () {
      var $this = $(this),
          $img = $this.find('.col.img'),
          $list = $this.find('.col.list'),
          listHeight = parseInt($list.css('height')),
          listScrollPos = $list.offset().top,
          offset = (listHeight*0.25) - (scrollPos - listScrollPos)*0.25;
          //console.log('height: ', listHeight);
      $img.css('transform', 'translateY('+offset+'px)');
    });
  },
  
  init = function () {
    if ((wW >= 768) && (rows.length)) {
      setDefaults();
      w.on('scroll', onScroll);
    }
  };
  
  return { init: init };
  
}());