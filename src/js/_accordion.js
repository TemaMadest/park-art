var Accordion = (function () {
  
  var
  
  hasAttr = function (attr) {
    if (typeof attr !== typeof undefined && attr !== false) {
      return true;
    }
    else return false;
  },
  
  init = function () {
    var accordion;
    $('.accordion').each(function () {
      if ($(this).attr('data-open') != "Y") {
      
        if ($(this).attr('data-bottom') == "Y") {
          if ($(this).prev('div').length)
            $(this).prev('div').slideUp(0)
          else
            $(this).parent().prev('div').slideUp(0)
        } else {
          if ($(this).next('div').length)
            $(this).next('div').slideUp(0)
          else
            $(this).parent().next('div').slideUp(0)
        }
      }
    });
    $('.accordion').click(function () {
      if (hasAttr($(this).attr('alt'))) {
        var text = $(this).text();
        var alt_text = $(this).attr('alt');
        $(this).text(alt_text);
        $(this).attr('alt', text);
      }
    
      if ($(this).attr('data-bottom') == "Y") {
        if ($(this).prev('div').length)
          accordion = $(this)
        else
          accordion = $(this).parent();
        accordion.prev('div').stop(true, true).slideToggle(300);
        $('.accordion').each(function () {
          if ($(this).prev('div').length)
            $(this).prev('div:not(:animated)').slideUp(300)
          else
            $(this).parent().prev('div:not(:animated)').slideUp(300)
        });
        if ($(this).hasClass('remove'))
          accordion.remove();
      } else {
        if ($(this).next('div').length)
          accordion = $(this)
        else
          accordion = $(this).parent()
        accordion.next('div').stop(true, true).slideToggle(300)
        $('.accordion').each(function () {
          if ($(this).next('div').length)
            $(this).next('div:not(:animated)').slideUp(300)
          else
            $(this).parent().next('div:not(:animated)').slideUp(300)
        })
        if ($(this).hasClass('remove'))
          accordion.remove()
      }
    });
  };
  
  return { init: init };
  
}());