const express = require('express');
const router = express.Router();
const Users = require('../model/userschema.js');

router.post('/login',(req, res)=>{
  Users.exists({username: req.body.username, password: req.body.password})
  .then((result)=>{
    res.send(result)
    console.log(result)
  })
  .catch(
    console.log("Error!")
  )
})


module.exports = router;