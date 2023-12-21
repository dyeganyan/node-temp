// npm - global command, comes with node
// npm --version

// local dependemcy
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename>(mac)

// package.json - manifest file (store important info about our project/package)
// manual approach (create package,json in foot, create proparties etc)
// npm init(step by step, press enter to skip
// npm init -y (everything default)

const _ = require('lodash');

const items =[1,[2,[3,[4]]]];

const newItmes = _.flattenDeep(items)

console.log(newItmes);
