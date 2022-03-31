const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'mongodb+srv://mike:Nuve1312@nodeDB.ckn3m.mongodb.net/node-DB?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result)=>app.listen('3000')).catch((err)=>console.log(err));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about',{title: 'About'});
});

app.use('/blogs',blogRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});