const os = require('os');

// info anout current user
const user = os.userInfo();
console.log(user);

// method returnes the system iptime in seconds

console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS);