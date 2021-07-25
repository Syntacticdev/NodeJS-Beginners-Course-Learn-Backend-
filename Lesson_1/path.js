const path = require("path");

// console.log(__filename);

// Extension
const htmfile = "index.html";
// console.log(path.extname(htmfile));

//basename
// console.log(path.basename(__filename));

//parse
//console.log(path.parse(__filename).name);

// normalize
// let linkPath = "/nodecourse//lesson1///path";
// console.log(path.normalize(linkPath));

// Delimeter
// console.log(path.delimiter);

// const linkDel = "nodecourse;lesson1;path";
// conver to an Array
// console.log(linkDel.split(path.delimiter)[0]);

//RELATIVE

// const path1 = "/data/course/lesson1/path";
// const path2 = "/data/course/node/tutorial";
// console.log(path.relative(path1, ""));

// ISABSOLUTE

const path1 = "/data/path";

console.log(path.isAbsolute(__dirname));
