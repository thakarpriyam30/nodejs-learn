var fs = require('fs');
var WriteStream = fs.createWriteStream('write.txt')
WriteStream.write('HI,Write a file\nthank you');
WriteStream.end()
