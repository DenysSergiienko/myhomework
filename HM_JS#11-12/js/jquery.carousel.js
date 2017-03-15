(function($){

var $body = $('body');

	
	$.fn.carousel = function(){
		

	var leftBtn = $('.carousel_left_arrow');
    var rightUIEl = $('.carousel_right_arrow');
    var elementsList = $('.carousel');
    var itemid = $('.carousele_article')

    console.log('itemid', itemid)

    var pixelsOffset = 250;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('.carousele_article').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 2385;

    console.log('elementsCount', elementsCount)

	leftBtn.click(function() {
		if (currentLeftValue != maximumOffset) {
            currentLeftValue += 265;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        } 
    });
 
    rightUIEl.click(function() {
    	if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 265;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        } 
    });


		return this;
	};






})(jQuery);


