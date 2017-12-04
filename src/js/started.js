var Started = (function () {

  var d = $(window),
      b = $('body'),
      l = $('#started'),
      f = false,
      t, 
  loadImgs = function () {
    var path = '../img/';
		window.img = {ico:[],one:[],two:[],third:[]};
    for (var i = 1; i <= 25; i++) {
      window.img.ico[i] = new Image(225,225);
      window.img.ico[i].src = path+"cube/"+i+".png"; 
      //console.log(window.img.ico);
    };
    for (var i = 1; i <= 162; i++) {
			window.img.one[i] = new Image(100,100);
			window.img.two[i] = new Image(100,100);
			window.img.third[i] = new Image(100,100);
			window.img.one[i].src = path+"slider/1/img_"+i+".jpg";
			window.img.two[i].src = path+"slider/2/img_"+i+".jpg";
			window.img.third[i].src = path+"slider/3/img_"+i+".jpg";
      //console.log(img);
    };
		console.log(window.img,'------');
    f = true;
  },
  
  hide = function () {
    l.addClass('hide');
    b.addClass('cancelLoader');
  },
  
  init = function () {
    loadImgs();
    d.on('load', function () {
      t = setInterval(function () {
        if (f) {
          hide();
          clearInterval(t);
          Cube.start();
        }
      }, 500);
    });
  };
  
  return {init: init};
  
}());