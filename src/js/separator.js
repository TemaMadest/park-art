var Separator = (function(){
    
    var 
		
		reviews = $('.reviews'), reviews_child = [], sep = $('#line'), 
		h,d,t,hW = null,
    
    init = function(){
        reviews.children('.row').each(function(i,el){
            reviews_child[i] = $(el);
        });
        sep.css({transform: 'translateY(0px)', height: '25%', transition: 'top 0.5s ease'});
    },
    
    move = function(){
        for(var i = 0; i < reviews_child.length; i++){
            d = $(document).scrollTop(), h = reviews_child[i].height(), t = reviews_child[i].offset().top, hW = $(window).height();
            var offset = t - reviews.offset().top + h/4;
            if ( d > t - hW/2  && d < t + h - hW/2){
                sep.css({top: offset+'px'});
            }
        }
    };
    
    $(document).scroll(function(e){
        move();
    });
    
		init();
});