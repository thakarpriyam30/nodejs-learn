var fs = require('fs');
var filename = 'input.txt'
if (!fs.existsSync(filename))  {
    console.log('file not exist')
    return 
}
//Refactor code
fs.readFile(filename, function (err, data) {
    //console.log(typeof(err))
    if (data.length == 0) {
        console.log(err)
        //return new Error('data not display')
    } else {
        console.log('Enter your name : ' + data.toString())
    }
})