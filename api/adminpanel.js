const express = require('express');
const router = express.Router();
const blogListings = require('../model/blogschema.js');
const igpostListings = require('../model/igpostschema.js');

router.get('/adminDashboard',(req,res) =>{
    let result = {
        igCount: '0',
        blogCount: '0'
    }
    igpostListings.count({}, (err, igdata)=>{
        if(err){
            console.log(err)
        }
        blogListings.count({}, (error, blogdata)=>{
            if(err){
                console.log(error)
            }
            let result = {
                igCount: igdata.toString(),
                blogCount: blogdata.toString()
            }
            res.send(result)
        });
    });
    
    
}
)

module.exports = router;