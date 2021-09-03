var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lylaw:lylaw@pentago-db.3rvcu.mongodb.net/Properties?retryWrites=true&w=majority";

MongoClient.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(client => {
            const db = client.db('Properties');
            const listings = db.collection('listings');
            router.get('/', (req,res) => {
                listings.find().toArray()
                .then(result => {
                    res.json(result);
                    console.log(result);
                })
            .catch(error => console.error(error))
            })
            })
        .catch(error => console.error(error))

module.exports = router;