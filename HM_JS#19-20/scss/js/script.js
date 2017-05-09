$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + ' ' + '</a>';
        }
    });
    /*Шаблонизаторы*/
    /*Block*/
	var articleTemplate = $('#block_tmpl').html();
	var articles = [
	{
		number: '01',
		title: 'Power inside',
		text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique ',
		image: '<img src="img/settings_icon.png" alt="">',
		readmore: '<a class="article_readmore" href="#">Read more   <img src="img/arrow_right.png" alt="" /></a>'
	},
	{
		number: '02',
		title: 'New Technologies',
		text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique ',
		image: '<img src="img/params_icon.png" alt="">',
		readmore: '<a class="article_readmore" href="#">Read more   <img src="img/arrow_right.png" alt="" /></a>' 
	},
	{
		number: '03',
		title: 'Fast Support',
		text: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique ',
		image: '<img src="img/truck_icon.png" alt="">',
		readmore: '<a class="article_readmore" href="#">Read more   <img src="img/arrow_right.png" alt="" /></a>'
	}
	]
	var content = tmpl(articleTemplate, {
		data: articles
	});
	$('.block').append(content);

	/*Services*/

	var articleTemplate = $('#block_services_tmpl').html();
	var articles = [
	{
		number: '04',
		title: '<a href="">Schedule Services</a>',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<a class="block__services__article__image", href=""><img src="img/serv_1.png" alt=""></a>',
		readmore: '<a href="">Button 4</a>'
	},
	{
		number: '05',
		title: '<a href="">Preventive Maintaince</a>',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<a class="block__services__article__image", href=""><img src="img/serv_2.png" alt=""></a>',
		readmore: '<a href="">Button 5</a>'
	},
	{
		number: '06',
		title: '<a href="">Tire & Wheel Services</a>',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<a class="block__services__article__image", href=""><img src="img/serv_3.png" alt=""></a>',
		readmore: '<a href="">Button 6</a>'
	},
	{
		number: '07',
		title: '<a href="">Repair Services</a>',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<a class="block__services__article__image", href=""><img src="img/serv_4.png" alt=""></a>',
		readmore: '<a href="">Button 7</a>'
	}
	]
	var content = tmpl(articleTemplate, {
		data: articles
	});
	$('.block_services_articles').append(content);

	/*Latest*/

var articleTemplate = $('#block_late_tmpl').html();
	var articles = [
	{
		number: '01',
		title: '<a href="">Advanced Machinery Helps Improve Quality</a>',
		month: 'JAN',
		day: '23',
		author: '<a href="#">cmsmasters</a>',
		comments: '<a href="#">(6)</a>',
		text: 'Cum sociis natoque penatibus et magnis dis parturient ontesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.',
		image: '<a class="block__services__article__image", href=""><img src="img/ln_1.png" alt=""></a>',
		readmore: '<a href="">Button 4</a>'
	},
	{
		number: '02',
		title: '<a href="">Powerful Techniques for Advanced Service</a>',
		month: 'JAN',
		day: '21',
		author: '<a href="#">cmsmasters</a>',
		comments: '<a href="#">(3)</a>',
		text: 'Cum sociis natoque penatibus et magnis dis parturient ontesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.',
		image: '<a class="block__services__article__image", href=""><img src="img/ln_2.png" alt=""></a>',
		readmore: '<a href="">Button 5</a>'
	}
	]
	var content = tmpl(articleTemplate, {
		data: articles
	});
	$('.block_latest_articles').append(content);

});


