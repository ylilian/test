var express = require('express');
var app = express();
var router = require('./router.js');
var bodyParser = require('body-parser');

//设置post请求的数据传输格式
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.use('/api', router);




app.listen(3001, function(){
    console.log('3001');
})