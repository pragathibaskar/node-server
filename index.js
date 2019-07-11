var express = require('express');
var read = require('readline');
var bodyParser = require('body-parser'); 
var app = express();
app.set('view engine','pug');
app.use(bodyParser.json()); 
var multer = require('multer'); 
app.use(multer({ inMemory: true }).single('image'));
app.use(bodyParser.urlencoded({ extended: true })); 

//var r = read.createInterface(process.stdin,process.stdout);
// var name = '';
// r.question('Please enter your name:',(answer) =>{name=answer;});
// app.get('/',function(req,res)
// {
//   res.render('template',{title:'welcome page',message:'hello ',name:name});
// });

app.get('/getform',function(req,res){
    res.render('form');
    
})

app.post('/info',(req,res)=>{
    console.log(req.body);
    res.json(req.body).end();
})
app.listen(8089);
