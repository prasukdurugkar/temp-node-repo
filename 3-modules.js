// CommanJS, every file is a module (by default)
// Modules - encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utilis")
const data = require("./6-alternative-flavor")
require('./7-mind-grenade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)