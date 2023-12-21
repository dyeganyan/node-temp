const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const firstFile = readFileSync("./content/subfolder/first.txt", "utf8");
const secondFile = readFileSync("./content/subfolder/second.txt", "utf8");

writeFileSync(
  "./content/subfolder/result-sync.txt",
  `Here is the result:${firstFile}, ${secondFile}`,
  { flag: "a" }
);

console.log('done with this task');
console.log('starting the nex one');
