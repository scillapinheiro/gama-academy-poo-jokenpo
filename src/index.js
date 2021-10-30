const options = require('./data');
const User = require('./controller/class/user');

let start = new User({ opt: options }).game()

start