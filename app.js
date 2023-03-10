const express = require('express');
const mongoose = require('mongoose');
const authRoute =  require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./controllers/middleware/authMiddleware');


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
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoute);

//cookies
//These are used to store user's data in the browser
// and also used to track internet activities


