var userName = []

for ( i = 0; i < 5 ; i++) {
	var k = i + 1;
	var name = prompt( 'Введите 5 имен по порядку, имя №' + k );
	if (name.length == 0 || typeof(name)=='undefined' || name=='null' ) {
		alert(  'неправильное имя');
		break;
	}
	userName.push( name );	
}


var logName = prompt( 'введите  свое имя' );

if (logName.length == 0 || typeof(logName)=='undefined' || logName=='null' ) {
		alert( 'Ошибка ввода');
	}

for ( i = 0; i < 5 ; i++) {
		if ( userName[i] == logName ) {
		var logUserName = 1;
		break;		
		}else{
		var logUserName = 0;
		}
	}

if ( logUserName )  {
	alert( 'Поздравлем, '+ logName +', вы успешно вошли');
	}else{
	alert( 'К сажалению, ' + logName + ', Вашего имени нет в списке');
}