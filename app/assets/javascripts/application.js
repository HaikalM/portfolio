// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.easing
//= require bootstrap
//= require bootstrap-sprockets
//= require bootstrap.min
// require_self
// require turbolinks
//= require_tree 

// $(document).ready(function(){
// 		// console.log('ok');
// 		alert('tes javascript');
// 	});

// Parallax

// about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});
// portfolio
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	// console.log('ok');
	// Jumbotron
	$('.jumbotron img').css({
		'transform': 'translate(0px,'+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px,'+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px,'+ wScroll/1.2 +'%)'
	});


	// portfolio
	if( wScroll > $('.portfolio').offset().top - 250) {
		// console.log('ok');
		
		// panggil semua thumbnail secara bergantian dengan each ditambah function
		// akan dipanggil 6 thumbnail
		$('.portfolio .thumbnail').each(function(index){
			setTimeout(function(){
				// console.log('ok');
				// tambah class untuk semua thumbnail
				// ditambah eq(index)untuk load satu satu berdasarkan indexnya + durasi ditambahkan dengan index

				$('.portfolio .thumbnail').eq(index).addClass('muncul')
			}, 300 * (index+1));
		});
	};
});
