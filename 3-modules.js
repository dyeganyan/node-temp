// CommonJs, evry file is module (by default)
// Modules - Encapsuleted Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-granade')
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

