# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
	$('.page-scroll').on 'click', (e) ->
	  tujuan = $(this).attr('href')
	  elemenTujuan = $(tujuan)
	  $('body').animate { scrollTop: elemenTujuan.offset().top - 50 }, 1250, 'easeInOutExpo'
	  e.preventDefault()
	  return