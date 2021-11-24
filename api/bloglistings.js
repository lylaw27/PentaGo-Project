const express = require('express');
const request = require('request');
const ObjectId = require('mongodb').ObjectID;
const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const router = express.Router();
const Listings = require('../model/blogschema.js');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "pentagoproperty",
    api_key: "856789475668125",
    api_secret: "S2ggAr_6H5aUw5e9zq0LP5xqa2I",
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "BlogListings",
    },
});

const upload = multer({storage: storage});

router.post('/blogListings',upload.single('blogImage'),(req,res) => {
    let newBlog = JSON.parse(req.body.blogInfo);
    newBlog.imagefile = req.file.path;
    newBlog.image_id = req.file.filename;
    res.send(newBlog);
    const newlisting = new Listings(newBlog);
    newlisting.save()
    .then(() => {
        console.log('Data saved!',newBlog)
    })
    .catch((err) => {
        console.log(err);
    })
}
)

router.get('/blogListings',(req,res) =>{
    let page = req.query.page;
    let category = req.query.category;
    if(!category || category === 'null'){
        category = /.*/;
    }
    if(!page){page = 1}
    Listings.find({category: category}, (err, data)=>{
        if(err){
            console.log(err);
        }
        let recordPerPage = 4;
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

router.get('/blogListings/:blogId',(req,res) =>{
    let blogId = req.params.blogId
    let result;
    Listings.findById(blogId, (err, data) => {
        if(err){
            console.log(err)
            result = 'notfound'
        }
        else{
            result = data
        }
        res.json(result);
    })
}
)

router.delete('/blogListings/:blogId',(req,res) =>{
    let blogId = req.params.blogId
    Listings.findById(blogId, (err, data) => {
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
    Listings.findByIdAndRemove(blogId, (err, data) => {
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

router.put('/blogListings/:blogId',(req,res) => {
    let blogId = req.params.blogId
    console.log(req.body)
    Listings.findByIdAndUpdate(blogId, req.body, (err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Data Updated!',data)
            res.json(data);
        }
    })
})

router.get('/blogListingsCount',(req,res) =>{
    let category = req.query.category;
    if(!category || category === "null"){
        category = /.*/;
    }
    Listings.count({category: category}, (err, data)=>{
        if(err){
            console.log(err)
        }
        res.send(data.toString())
    });
}
)

router.get('/blogSuggestion/:blogId',(req,res) =>{
    let blogId = req.params.blogId
    Listings.aggregate([{$match: {_id: {$ne: ObjectId(blogId)}}},{ $sample: { size: 2 } }], (err,data)=>{
        if(err){
            console.log(err)
        }
        res.json(data)
    })
}
)

router.post('/blogSubscription',(req,res) =>{
    const email = req.body.email;
    console.log(email)
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed'
            }
        ]
    }
    const postData = JSON.stringify(data)
    console.log(postData)
    const options = {
        url: 'https://us20.api.mailchimp.com/3.0/lists/80fd31cb68',
        method : 'post',
        headers:{
            Authorization: 'auth 4338db2c23548f76ef1bf94cd69d6f1c-us20'
        },
        body: postData
    }
    request(options, (err ,response, body)=>{
        if(err){
            console.log(err)
        }
        if(response.statusCode === 200){
            res.send("Subscribed!")
            console.log('ok')
        }
    })
}    
)

module.exports = router;