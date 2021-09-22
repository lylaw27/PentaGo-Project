const express = require('express');
const path = require('path');
const app = express();
const propertyListings = require('./api/PropertyListings.js');
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://lylaw:lylaw@pentago-db.3rvcu.mongodb.net/Properties?retryWrites=true&w=majority";

app.use(express.json());       
app.use(express.urlencoded({extended: false})); 

mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Database connected!"))
.catch(error => console.error(error));

app.use('/api',propertyListings);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));