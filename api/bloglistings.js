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

const deleteImage = (image_id) => {
    image_id.map((image_id)=>{
        cloudinary.uploader.destroy(image_id, (err,result)=> {
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    });
    })
}

const upload = multer({storage: storage});

const dateProcessor = (newBlog) => {
    let nowTime = new Date(newBlog.timestamp);
    let chineseMonth = ['一','二','三','四','五','六','七','八','九','十','十一','十二']
    let nowMonth = chineseMonth[nowTime.getMonth()];
    let nowDate = nowTime.getDate();
    let nowYear = nowTime.getFullYear();
    newBlog.uploadDate = nowMonth + "月 " + nowDate + ", " + nowYear
    return newBlog
}

router.post('/blogListings',upload.array('blogImage'),(req,res) => {
    let newBlog = JSON.parse(req.body.blogInfo);
    let imageproperty = {
        filename: [],
        path: []
    }
    req.files.map((imagelist)=>{
        imageproperty.path.push(imagelist.path);
        imageproperty.filename.push(imagelist.filename);
    })
    newBlog.image_id = imageproperty.filename;
    newBlog.imagefile = imageproperty.path;
    newBlog = dateProcessor(newBlog);
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
    Listings.find({category: category}).sort({timestamp: -1}).exec((err, data)=>{
        if(err){
            console.log(err);
        }
        let recordPerPage = 8;
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
                let modifiedData = data[i]
                modifiedData.imagefile = modifiedData.imagefile[0]
                modifiedData.image_id = modifiedData.image_id[0]
                filteredList.push(modifiedData)
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
            result = data;
            console.log(result)
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
            deleteImage(data.image_id)
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

router.put('/blogListings/:blogId',upload.array('blogImage'),(req,res) => {
    let updateBlog = JSON.parse(req.body.blogInfo);
    let blogId = req.params.blogId;
    updateBlog = dateProcessor(updateBlog)
    console.log(req.files)
    if(req.files != ""){
        let imageproperty = {
        filename: [],
        path: []
        }
        deleteImage(updateBlog.image_id)
        req.files.map((imagelist)=>{
            imageproperty.path.push(imagelist.path);
            imageproperty.filename.push(imagelist.filename);
        })
        updateBlog.image_id = imageproperty.filename;
        updateBlog.imagefile = imageproperty.path;
    }
    Listings.findByIdAndUpdate(blogId, updateBlog, (err,data)=>{
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