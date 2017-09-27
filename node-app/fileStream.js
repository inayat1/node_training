/**
 * File Reading: disk file reading:
-----------------------------------

 data is written inside stream as "binary"
 
 if you want to write text stream.

 stream.setEncoding("UTF-8");
 
//import file system streaming module

 * 
 */
var fs=require('fs');


//create Readable stream.
var fileName='dumpfile.txt';
var inputStream=fs.createReadStream(fileName);

//Set the character encoding type.
inputStream.setEncoding('UTF8');

//Add events to read Stream
var data='';
inputStream.on('data',function(chunk){
     data += chunk;
}); 
inputStream.on('end',function(){
   console.log('data :',data.toString());
});

inputStream.on('error',function(err){
   console.log(err.stack);
})