var Navigation = (function() {

    var container = $('.article'),
        nav = null,
        isBe = true,
        busy = true,
        scrollPos = null,
        items = [],
        link = null,

        init = function() {
            var item;
            if (container.length == 0) return false;
            item = parse();
            if (item === false) return false;
            set(item);
            addclickHandler();
            addscrollHandler();
        },

        parse = function() {
            var item = [];
            items = container.find('h3, h2, h1');
            if (items.length == 0) return false;
            items.each(function(i, e) {
              var tmp = {};
              if (e.getAttribute('id') !== null){
                tmp.id = e.getAttribute('id');
                tmp.title = e.innerHTML;
                item[i] = tmp;
              }
            });
            return item;
        },

        set = function(item) {
            var block = nav = container.find('div#navigation');
            $(block).css({
                display: 'block'
            });
            setPosition($(block), 0);
            container.find('div.content-wrap').removeClass('def');
            block = block.find('ul.list');
            item.forEach(function(e, i) {
                block.append('<li class="nw-item"><a href="#' + e.id + '" data-id="' + e.id + '">' + e.title + '</a></li>');
            });
            link = container.find('ul.list li a');
        },

        setActive = function(scrollPos) {
            items.each(function(i, e) {
                if ($(items[0]).offset().top >= scrollPos) {
                    switchClass(link[0]);
                } else if ($(e).offset().top - 20 <= scrollPos) {
                    switchClass(link[i]);
                } else if ($(items[items.length - 1]).offset().top < scrollPos) {
                    switchClass(link[link.length]);
                }
            });
        },

        switchClass = function(el) {
            link.parent().removeClass('active');
            $(el).parent().addClass('active');
        },

        setPosition = function(el, pos) {
            $(el).css({
                'padding-top': pos + 'px'
            });
        },

        updatePosition = function() {
            if (!busy) return false;
            var minLimit = $('.article').offset().top,
                //maxLimit = minLimit - 300 + $('.article').height();
                maxLimit = nav.height() < 300 ? minLimit - 300 + $('.article').height() : minLimit - 150 - nav.height() + $('.article').height();
            scrollPos = window.pageYOffset;
            if (scrollPos > minLimit && scrollPos < maxLimit) {
                isBe = true;
                setActive(scrollPos);
                setTimeout(function() {
                    if (isBe) setPosition(nav, scrollPos - minLimit);
                }, 400);
            } else if (scrollPos < minLimit) {
                setTimeout(function() {
                    setPosition(nav, 0);
                    setActive(scrollPos);
                }, 400);
                isBe = false;
            } else if (scrollPos > maxLimit) {
                setActive(scrollPos);
                setPosition(nav, maxLimit - minLimit);
                isBe = false;
            }
        },

        addscrollHandler = function() {
            updatePosition();
            $(window).scroll(updatePosition);
        },
				
        addclickHandler = function() {
            link.on('click', function(e) {
                e.preventDefault();
                var elementClick = $(this).attr("href");
                if (elementClick) {
                    var destination = $(elementClick).offset().top;
                    busy = false;
                    setTimeout(function() {
                        busy = true;
                        updatePosition();
                    }, 800);
                    switchClass($(this));
                    $('html, body').animate({
                        scrollTop: destination
                    }, 800);
                }
                return false;
            });
        };	

    init();

});