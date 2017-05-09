var skills = _.sortBy(_.uniq(_.flatten(_.map(data, 'skills'))));
console.log('Skills', skills);

var names = _.flatten(_.map(_.sortBy(data, 'friends.length'), 'name'));
console.log('Names', names);

var friends = _.uniq(_.map(_.flatten(_.map(data, 'friends')), 'name'));
console.log('Friends', friends);