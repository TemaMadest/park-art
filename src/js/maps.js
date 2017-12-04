var Maps = (function() {

    var $marks = ($('.office').length) ? $('.office') : $('.col.adress').find('.item'),
        places = [
            [52.958041, 36.061953],
            [52.943455, 36.073343]
        ],
        centers = [
            [52.958041, 36.061953],
            [52.943455, 36.073343]
        ],


        initialize = function() {

            var mapOptions = {
                    zoom: 17,
                    center: new google.maps.LatLng(centers[0][0], centers[0][1]),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: true,
                    scrollwheel: false,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        position: google.maps.ControlPosition.LEFT_BOTTOM
                    },
                    zoomControl: false,
                    disableDefaultUI: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.LARGE,
                        position: google.maps.ControlPosition.RIGHT_BOTTOM
                    },
                    styles: [{
                        "hue": "#44ff00"
                    }, {
                        "saturation": 4
                    }, {
                        "gamma": 0.48
                    }]
                },
                map = new google.maps.Map(document.getElementById("map"), mapOptions),
                image = new google.maps.MarkerImage('../img/contacts/mark.png', new google.maps.Size(48, 68), new google.maps.Point(0, 0), new google.maps.Point(24, 68));

            window.map = map;
            for (var i = 0; i < places.length; i++) {
                var myLatlng = new google.maps.LatLng(places[i][0], places[i][1]);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: window.map,
                    icon: image,
                });
            }

        },

        setActive = function() {
            if (!$(this).hasClass('active')) {
                $marks.removeClass('active');
                $(this).addClass('active');
            }
            var i = parseInt($(this).attr('data-index')) || 1;
            window.map.setCenter(new google.maps.LatLng(centers[i - 1][0], centers[i - 1][1]));
            window.map.setZoom(17);

            if (i == 1) {
                $('#a2').fadeOut();
                $('#a1').fadeIn();
            } else {
                $('#a1').fadeOut();
                $('#a2').fadeIn();
            }
        },

        resize = function() {
            $one = $('.office')[0];
            $two = $('.office')[1];
            $('.col.m').css({
                height: $($one).height() + $($two).height() + "px"
            });
            $('.col.offices').css({
                height: 'auto'
            });
        },

        init = function() {
            if ($marks.length) {
                if ($('#a2').length) {
                    $('#a2').fadeOut();
                }
                initialize();
                $marks.click(setActive);

                var btn_map = document.getElementsByClassName('ups');
                for (var i = 0; i < btn_map.length; i++) {
                    btn_map[i].onclick = function(e) {
                        e.preventDefault();
                        var elementClick = this.getAttribute("href");
                        var destination = $(elementClick).offset().top;
                        if (destination) {
                            $('html, body').animate({
                                scrollTop: destination
                            }, 1100);
                            var i = parseInt($(this).attr('data-index')) || 1;
                            window.map.setCenter(new google.maps.LatLng(centers[i - 1][0], centers[i - 1][1]));
                            window.map.setZoom(17);
                        }
                        return false;
                    };
                };

                if (!isMobile.any) {
                    $(window).on('resize', $.throttle(500, resize));
                }
            }
					if(typeof map_page !== "undefined" || typeof main_page !== "undefined"){
						window.map.setCenter(new google.maps.LatLng(centers[1][0], centers[1][1]));
						window.map.setZoom(17);
					}	
        };

    return {
        init: init
    };

}());