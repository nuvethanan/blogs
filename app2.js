const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }
// app.listen(port);

const dbURI = 'mongodb+srv://mike:1234@nodeDB.ckn3m.mongodb.net/node-DB?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result)=>app.listen(3000)).catch((err)=>console.log(err));
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
