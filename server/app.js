var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
require("dotenv").config();
// require("./configs/cloudinary");
require("./configs/mongo");
// require("./configs/passport");
// const passport = require("passport"); // A remettre si utilisation de passport
const cors = require('cors')

// A METTRE EN PLACE LORS DE LA CREATION DES ROUTES
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var profileRouter = require("./routes/profile");


const _DEVMODE = false;

var app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/build")));



app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true, // usefull when dealing with authentication
    optionsSuccessStatus: 200,
  })
);

// app.use(passport.initialize()); // A remettre si utilisation de passport


app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge:  1000* 60*60 * 4
  },
  resave: true,
  saveUninitialized: true
}))

// app.use(passport.session());
// Initialisation d'un user permanent son id doit être modifié quand on seed à nouveau
// app.use((req, res, next) => {
//   req.session.currentUser = {
//     _id : "61967029042d717b00ab24bd",
//     profilePic: "http://images6.fanpop.com/image/photos/39000000/Cool-Dog-animals-39056074-1600-900.jpg",
//     isFollowing : [],
//     username: "Croustie",
//     email :"croustie@croustie.com",
//     password: "azerty",
//   }
//   next()
// })


// PREFIXAGE  
// app.use('/auth', authRouter);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// app.use("/journey", journeyRouter);
app.use("/api/*", (req, res, next) => {  
  const error = new Error("Ressource not found.");
  error.status = 404;
  next(error);
});
if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(path.join(__dirname, "public/build/index.html"));
  });
}


module.exports = app;

