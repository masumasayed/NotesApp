require('dotenv').config();

const express = require('express');
const  expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')
const session = require('express-session');
const passport =  require('passport')
const MongoStore = require('connect-mongo')
  // store session data in a MongoDB database.


const app = express();
const port =  process.env.PORT || 8080

app.use(session({
   secret:'keyword masuma',
   resave:false,
   saveUninitialized:true,
   store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
   })

}))

app.use(passport.initialize());
app.use(passport.session())
// handle both form data and JSON data 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static file( files like images, stylesheets, and scripts in the 'public' folder directly accessible )
app.use(express.static('public'))
// templating engine
app.use(expressLayouts)
app.set('view engine' ,'ejs')
app.set('layout', './layouts/main') // Adjust the path to the layout file

connectDB();
//routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

// ...

//handle 404
app.get('*', function(req, res) {
   //res.status(404).send('404 Page Not Found.')
   res.status(404).render('404');
 })

app.listen(port,()=>{
   console.log(`App listening on port ${port}`);
})

