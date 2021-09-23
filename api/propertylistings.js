const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const router = express.Router();
const Listings = require('../model/propertyschema.js');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "pentagoproperty",
    api_key: "856789475668125",
    api_secret: "S2ggAr_6H5aUw5e9zq0LP5xqa2I",
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "PropertyListings",
    },
});

const upload = multer({storage: storage});

router.post('/propertyListings',upload.single('propertyImage'),(req,res) => {
    let newProperty = JSON.parse(req.body.propertyInfo);
    newProperty.imagefile = req.file.path;
    newProperty.image_id = req.file.filename;
    res.send(newProperty);
    const newlisting = new Listings(newProperty);
    newlisting.save()
    .then(() => {
        console.log('Data saved!',newProperty)
    })
    .catch((err) => {
        console.log(err);
    })
}
)

router.get('/propertyListings',(req,res) =>{
    Listings.find({}, function(err, data){
        res.json(data);
    });
}
)

router.get('/propertyListings/:propertyId',(req,res) =>{
    let propertyId = req.params.propertyId
    Listings.findById(propertyId, (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data);
        }
    })
}
)

router.delete('/propertyListings/:propertyId',(req,res) =>{
    let propertyId = req.params.propertyId
    Listings.findById(propertyId, (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            cloudinary.uploader.destroy(data.image_id, (err,result)=> {
                if(err){
                    console.log(err)
                }
                else{
                    console.log(result)
                }
            });
        }
    })
    Listings.findByIdAndRemove(propertyId, (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            console.log('Data Deleted!',data)
            res.json(data);
        }
    })
}
)

router.put('/propertyListings/:propertyId',(req,res) => {
    let propertyId = req.params.propertyId
    Listings.findByIdAndUpdate(propertyId, req.body, (err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Data Updated!',data)
            res.json(data);
        }
    })
})


module.exports = router;