// send req to localhost 8081
// print res sent by the server

// var http = require('http')
// var options={
//     host:'localhost:8081',
//     path:'/.serverCall.js'
// };
// function callback(response){
//   var str = '';
//   response.on('end',function(){
//     console.log(str)
//   })
// }
// http.request(options,callback).end();


var http = require('http');
http.get(host:"localhost", function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
var http = require('http');
const { hostname } = require('os');

