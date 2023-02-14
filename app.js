const express = require('express');
const mongoose = require('mongoose');
const authRoute =  require('./routes/authRoute');
const cookieParser = require('cookie-parser');


const app = express();


// middleware for the styling
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());   

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://kwawkumi:Miezah%40%31@nodeauth.qsp68lf.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoute);

//cookies
//These are used to store user's data in the browser
// and also used to track internet activities

app.get('/set-cookies', (req, res) => {
  res.cookie('newUser', false);
  res.cookie('isEmployer', true, {
    maxAge: 1000*60*60*24, httpOnly: true
  });
  // res.setHeader('Set-Cookie', 'newUser=true');
  res.send('you set cookies')
  
});

app.get('read-cookies', (req, res) => {
 
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies)
});

