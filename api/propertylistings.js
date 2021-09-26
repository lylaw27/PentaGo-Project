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

router.get('/propertyListings/homepage',(req,res) =>{
    Listings.find({}, (err, data)=>{
        if(err){
            console.log(err);
        }
        let featuredList = [data[0],data[1],data[2],data[3]]
        res.json(featuredList)
    }
    )
})

router.get('/propertyListings',(req,res) =>{
    let page = req.query.page;
    if(!page){page = 1}
    Listings.find({}, (err, data)=>{
        if(err){
            console.log(err);
        }
        let recordPerPage = 2;
        let start = (page-1) * recordPerPage;
        let end = page * recordPerPage - 1;
        let filteredList = [];
        if(!data[start]){
            filteredList = 'notfound'
        }
        else{
            if(!data[end]){
                end = data.length-1
            }
            for(let i=start;i<=end;i++){
                filteredList.push(data[i])
            }
        }
        res.json(filteredList);
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

router.get('/propertyListingsCount',(req,res) =>{
    Listings.count({}, (err, data)=>{
        res.send(data.toString())
    });
}
)

module.exports = router;