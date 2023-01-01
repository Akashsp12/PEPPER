const express = require('express')
const app2 = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10;
const objectId = require('mongoose').Types.ObjectId
const { UserInfo } = require('../Model/RegAndLogModel')

app2.post('/User', (req, res) => {
    
        bcrypt.hash(req.body.Userpassword, saltRounds, (err, hash) => {
            
            const User = new UserInfo({
                UserName: req.body.UserName,
                UserEmail: req.body.UserEmail,
                Userpassword: hash
            })
            User.save((err, docs) => {
                if (!err) {
                    console.log("User Added")
                    res.status(201).send(docs)
                    console.log(docs);
                }
                else {
                    res.status(501).send(err.message)
                }
            })
        
        })
       
    })

   module.exports=app2
    