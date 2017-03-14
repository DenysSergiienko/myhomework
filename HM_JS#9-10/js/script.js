$(function (){

var $mainsub = $('.js_main_sub');
var $mainsubit = $('.submenu_item');
var $submenuit = $('.js_main_sub_sub');
var $subsubmenuit =$('.sub_submenu_item')




$mainsub.hover(
  function(event){
      $mainsubit.slideToggle()
  })

$submenuit.hover(
  function(event){
      $subsubmenuit.slideToggle()
  })


$('input, select').styler();



});

