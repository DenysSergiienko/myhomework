$(function (){

/*Привязываем плагин*/

$('div.carousel').carousel({

});


/*Шаблонизатор*/
	var articleTemplate = $('#items_tmpl').html();
	var articles = [
	{
		title: 'Article 1',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img1.jpg" alt="">',
		button: '<a href="">Button 1</a>'
	},
	{
		title: 'Article 2',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img2.jpg" alt="">',
		button: '<a href="">Button 2</a>'
	},
	{
		title: 'Article 3',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img3.jpg" alt="">',
		button: '<a href="">Button 3</a>'
	},
	{
		title: 'Article 4',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img4.jpg" alt="">',
		button: '<a href="">Button 4</a>'
	},
	{
		title: 'Article 5',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img5.jpg" alt="">',
		button: '<a href="">Button 5</a>'
	},
	{
		title: 'Article 6',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img6.jpg" alt="">',
		button: '<a href="">Button 6</a>'
	},
	{
		title: 'Article 7',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img1.jpg" alt="">',
		button: '<a href="">Button 7</a>'
	},
	{
		title: 'Article 8',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img2.jpg" alt="">',
		button: '<a href="">Button 8</a>'
	},
	{
		title: 'Article 9',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium porro similique aperiam exercitationem illum itaque quo, sunt eum, quis aspernatur, perspiciatis, ut. Sapiente omnis consequatur excepturi, iusto blanditiis qui?',
		image: '<img src="img/img3.jpg" alt="">',
		button: '<a href="">Button 9</a>'
	}
	]
	var content = tmpl(articleTemplate, {
		data: articles
	});
	$('.carousel').append(content);
});



