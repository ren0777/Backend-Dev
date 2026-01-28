const fs = require('fs');

const path = require('path');
const mainfolder = "./mainfolder";
const a = path.join(mainfolder, "a");
const b = path.join(mainfolder, "b");
const filepath = path.join(a, "file.txt");
fs.mkdirSync(mainfolder,{ recursive: true});
fs.mkdirSync(a, { recursive: true });
fs.mkdirSync(b, { recursive: true });
fs.writeFileSync(filepath, "This is a file inside folder a");