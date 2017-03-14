$(function (){

$('ul.tabs li').css('cursor', 'pointer');

$('ul.tabs.tabs1 li').click(function(){
  var thisClass = this.className.slice(0,4);
  $('div.t1').hide();
  $('div.t2').hide();
  $('div.t3').hide();
  $('div.t4').hide();
  $('div.' + thisClass).slideToggle('slow');
  $('ul.tabs.tabs1 li').removeClass('tab-current');
  $(this).addClass('tab-current');
  });

var $fname = $('.first_name');
var $sname = $('.last_name');
var $adr = $('.address');
var $btn = $('.button');


$fname.hover( 
  function(event) {
  var $helper = $('.helper_1');
  $helper.show()},
  function(event) {
  var $helper = $('.helper_1');
  $helper.hide();
});
$sname.hover( 
  function(event) {
  var $helper = $('.helper_2');
  $helper.show()},
  function(event) {
  var $helper = $('.helper_2');
  $helper.hide();
});
$adr.hover( 
  function(event) {
  var $helper = $('.helper_3');
  $helper.show()},
  function(event) {
  var $helper = $('.helper_3');
  $helper.hide();
});
$btn.on('click',
  function() {
  var $helper = $('.helper_1');
  var $helper2 = $('.helper_2');
  var $helper3 = $('.helper_3')
  $helper.toggle()
  $helper2.toggle();
  $helper3.toggle();
});

var $startbtn = $('.btn1');
var $stopbtn = $('.btn2');

$startbtn.click(startTrack);

$stopbtn.click(stopTrack);

function startTrack(){
track = setInterval(function (){
    s.innerHTML++
    if (s.innerHTML == 60){
        m.innerHTML++
        s.innerHTML = 0
        if (m.innerHTML == 60){
            h.innerHTML++
            m.innerHTML = 0
        }
      }
}, 1000);
};

function stopTrack (){
  clearInterval(track);
  s.innerHTML = '00';
  m.innerHTML = '00';
  h.innerHTML = '00';
};














});

