const fs = require('fs');

//Blocking Api
const contents = fs.readFileSync('./dumpfile.txt');
console.log('starts') //1
console.log(contents.toString()); //2
console.log('Doing something else'); //3
console.log('ends'); //4

//Asyn

const config = {
    maxFiles: 20,
    maxConnections: 15,
    rootPath: "/webroot"
};
const configTxt = JSON.stringify(config);
const options = {
    encoding: 'utf8',
    flag: 'w'
};
const roptions = {
    encoding: 'utf8',
    flag: 'r'
};
//fs.writeFile('./config.json', configTxt, options, err => {
  //  if (err) {
  //      console.log("Config Write Failed.");
  //  } else {
 //       console.log("Config Saved.");
 //   }
//});

fs.readFile('./grains1.txt', roptions, (err,data) => {
    if (err) {
        console.log("Config Write Failed.");
    } else {
        console.log(data);
    }
});