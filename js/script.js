// event pada saat link di klik
$('.ps').on('click', function(e){

	//ambil is href
	var tujuan = $(this).attr('href');
	//tangkap elemen
	var elementujuan = $(tujuan);

	//pindahkan scroll
	$('html, body').animate({
		scrollTop: elementujuan.offset().top -50
	}, 700, 'swing');

	e.preventDefault();
});

//about
$(window).on('load', function(){
	$('.pkiri').addClass('pMuncul');
	$('.pkanan').addClass('pMuncul');
});

// parallax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// portfolio
	if ( wScroll > $('.portofolio').offset().top - 300){
		$('.portofolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
		// 
	};
});