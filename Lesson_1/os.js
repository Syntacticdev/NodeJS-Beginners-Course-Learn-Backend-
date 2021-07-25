const { networkInterfaces } = require("os");
const { platform } = require("os");
const { totalmem } = require("os");
const os = require("os");

// Converted into bytes
console.log(os.freemem());

// totalmem
console.log(os.totalmem());

// homedir
console.log(os.homedir());

// hostname
console.log(os.hostname());

// networkInterfaces
console.log(os.networkInterfaces());

// platform
console.log(os.platform());

// type
console.log(os.type());

// tempdir
console.log(os.tmpdir());

// uptime
console.log(os.uptime());

// version
console.log(os.version());
