$(window).on('scroll',function(){
  var scrolled = $(this).scrollTop();
  $('.efecto1').css({
    'transform':'translate3d(0, ' + (scrolled * .20) + 'px,0)',
    'opacity':1 - scrolled / 400
  });
  var descubrir = document.getElementById('descubrir');
  d = descubrir.getBoundingClientRect().top - 300;
  $('.efecto2').css({
    'transform':'translate3d(0, ' + (-d * .20) + 'px,0)',
    'opacity':1 - d / 400
  });
  var cartagena = document.getElementById('cartagena');
  d = cartagena.getBoundingClientRect().top - 300;
  $('.efectocartagena').css({
    'transform':'translate3d(0, ' + (-d * .20) + 'px,0)',
    'opacity':1 - d / 400
  });

  var cocora = document.getElementById('cocora');
  d = cocora.getBoundingClientRect().top - 300;
  $('.efectococora').css({
    'transform':'translate3d(0, ' + (-d * .20) + 'px,0)',
    'opacity':1 - d / 400
  });
  var barichara = document.getElementById('barichara');
  d = barichara.getBoundingClientRect().top - 300;
  $('.efectobarichara').css({
    'transform':'translate3d(0, ' + (-d * .20) + 'px,0)',
    'opacity':1 - d / 400
  });
  var esahora = document.getElementById('esahora');
  d = esahora.getBoundingClientRect().top - 100;
  $('.efecto4').css({
    'transform':'translate3d(0, ' + (d * .30) + 'px,0)',
    'opacity':1 - d / 900
  });



})

