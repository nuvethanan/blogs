const express = require('express');
const app = express();

app.listen('3000');

app.get('/',(req,res)=>{
    // res.send('<p>hello from mathew</p>');
    res.sendFile('../nodeBasics/source/index1.html',{root : __dirname});
});

app.get('/signUp',(req,res)=>{
    res.sendFile('../nodeBasics/source/signUp.html',{root : __dirname});
});

app.get('/signUp-me',(req,res)=>{
    res.redirect('/signUp');
});

app.use((req,res)=>{
    res.status(404).sendFile('../nodeBasics/source/404.html',{root : __dirname});
});