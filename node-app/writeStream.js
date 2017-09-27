/**
 * Write Stream
 *  1.Source is array
 *  2.Des is disk file
 */
const fs = require('fs');
const grains = ['wheat', 'rice', 'oats'];
const options = {
    encoding: 'utf8',
    flag: 'w'
};
const arr = [{
    name: 'inayat',
    empId: 1234
},
{
    name: 'amit',
    empId: 2345
}];
var fileWriteStream = fs.createWriteStream("./grains1.txt",
    options);
fileWriteStream.on("close", function () {
    console.log("File Closed.");
});
while (grains.length) {
    var data = grains.pop() + " ";
    fileWriteStream.write(data);
    console.log("Wrote: %s", data);
}
fileWriteStream.end();
//why should i close

var fileReadStreamJson = fs.createReadStream("./fetcharray.txt"),
fileWriteStreamJson = fs.createWriteStream("./empJson.txt",
options),
data;

fileReadStreamJson.on('data',(chunk)=> {
    data+=chunk
})

fileReadStreamJson.on('end', ()=> {
    fileWriteStreamJson.write(JSON.stringify(data.toString()));
})


//for(let i=0;i<arr.length;i++) {

//}


