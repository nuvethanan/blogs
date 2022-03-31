const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog.js');

const dbURI = 'mongodb+srv://mike:Nuve1312@nodeDB.ckn3m.mongodb.net/node-DB?retryWrites=true&w=majority';

mongoose.connect(dbURI).then((result)=>app.listen('3000')).catch((err)=>console.log(err));

app.set('view engine','ejs');


app.use(express.static('public'));

app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title : "nuve's night-mare",
        snippet : "he wud find or not",
        body : 'lets find out dummy'
    });
    blog.save().then((result)=>{
        res.send(result);
    }).catch((err)=>console.log(err));
})

app.get('/all-blogs',(req,res)=>{
    Blog.find().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('61f7947eb3125a3776da5977').then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });
})

app.get('/',(req,res)=>{
    const blogs = [
        {title:'nuve fixed the goal',snippet:'he is gonna achieve it'},
        {title:'nuve arranged a meeting',snippet:'he will reach on time'},
        {title:'nuve want to celebrate', snippet:'its his treat'}
    ];
    res.render('index',{title :'home',blogs});
});

app.get('/about',(req,res)=>{
    res.render('about',{title: 'About'});
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'Create a new blog'});
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});