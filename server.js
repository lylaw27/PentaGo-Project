const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const propertyRoute = require('./routes/api/properties');
var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lylaw:lylaw@pentago-db.3rvcu.mongodb.net/Properties?retryWrites=true&w=majority";

MongoClient.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(client => {
            console.log('Database successfully created!');
            const db = client.db('Properties');
            const listings = db.collection('listings');
            
            app.post('/upload',upload.single('listimg'), (req, res,next) => {
                const file = req.file;
                if(!file){
                    const error = new Error('Please upload a file');
                    error.httpStatusCode = 400;
                    return next(error);
                }
                    res.send('Upload Complete');
                    const regex = /\s/g;
                    const propertyDatabase = {
                        imagepath: '\\listimg\\' + file.filename,
                        title: req.body.title,
                        address: req.body.address,
                        bedroom: req.body.bedroom,
                        bathroom: req.body.bathroom,
                        area: req.body.area,
                        price: req.body.price,
                        features: req.body.features,
                        description: req.body.description,
                        url: req.body.title.replace(regex,'-') + '-' + Date.now()
                    };
                    listings.insertOne(propertyDatabase)
                    .then(result => {
                            console.log(result);
                        })
                    .catch(error => console.error(error))
                }
            )
            })
        .catch(error => console.error(error))
app.use('/api/propertyList',propertyRoute)
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });
}

app.use(bodyParser.json());       

app.use(bodyParser.urlencoded({    
  extended: true
})); 



const storage = multer.diskStorage({
    destination: './client/public/listimg/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));