const express               = require("express");
const app                   = express();
const bodyParser            = require("body-parser");
const mongoose              = require("mongoose");
const flash                 = require("connect-flash");
const passport              = require("passport");
const LocalStrategy         = require("passport-local");
const methodOverride        = require("method-override");   
const Campground            = require("./models/campground");
const Comment               = require("./models/comment");
const User                  = require("./models/user");
// const seedDB                = require("./seeds");
// const { seedItem }          = require("./seeds");
const path = require('path');
//requiring routes
const commentRoutes = require("./routes/comments");
const campgroundRoutes = require("./routes/campgrounds");
const itemRoutes = require("./routes/items");
const indexRoutes = require("./routes/index");

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.IP || '0.0.0.0';

// mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect("mongodb://shiyun:ZSYqq490562824@ds239940.mlab.com:39940/yelpcamp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); 
// seedItem(); 

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Pika is the cutest cat in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//currentUser setup, message set up
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/api/", indexRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/campgrounds", campgroundRoutes);
app.use("/api/campgrounds/:id/comments", commentRoutes);

app.listen(PORT, HOST, function(){
    console.log("The YelpCamp Server has started!");
});



// 'use strict';

// const express = require('express');
// const path = require('path');

// // Constants
// const PORT = process.env.PORT || 8080;
// const HOST = '0.0.0.0';

// const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// // App
// const app = express();

// // Static files
// app.use(express.static(CLIENT_BUILD_PATH));

// // API
// app.get('/api', (req, res) => {
//   res.set('Content-Type', 'application/json');
//   let data = {
//     message: 'Hello world, Woooooeeeee!!!!'
//   };
//   res.send(JSON.stringify(data, null, 2));
// });

// // All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
//   response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
// });

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);
