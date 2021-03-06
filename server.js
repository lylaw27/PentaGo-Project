const express = require('express');
const path = require('path');
const app = express();
const blogListings = require('./api/bloglistings.js');
const igPostListings = require('./api/igpostlistings.js');
const loginApi = require('./api/login.js');
const adminPanel = require('./api/adminpanel.js');
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://lylaw:lylaw@pentago-db.3rvcu.mongodb.net/Post?retryWrites=true&w=majority";

app.use(express.json());       
app.use(express.urlencoded({extended: false}));


mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Database connected!"))
.catch(error => console.error(error));

app.use('/api',blogListings);
app.use('/api',igPostListings);
app.use('/api',adminPanel);
app.use('/api',loginApi);


if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('/*', function(req,res) {
		res.sendFile(path.resolve(__dirname +'/client/build/index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));