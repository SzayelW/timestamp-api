var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.sendfile('./index.html', {root: __dirname })
});

app.get('/:date', function (req, res) {
    var stringDate = setParamDate(req.params.date)
    res.send(JSON.stringify(stringDate))
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

function setParamDate(date){
    var nDate
    var nan = isNaN(date)
    !nan ? nDate = new Date(Number.parseInt(date)) : nDate= new Date(Date.parse(date))
    return getDateObject(nDate)
}

function getDateObject(date){
    if(date == "Invalid Date"){
      return {unix: "null", natural: "null"}  
    } 
    
    var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December']
    var unixD = date.getTime() 
    var month = date.getUTCMonth()
    var day = date.getDate()
    var year = date.getFullYear()
    
    return {unix: unixD,
        natural: Months[month] +' '+day+', '+year
    }
}