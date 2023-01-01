const express = require('express')
const app1 = express.Router()
const objectId = require('mongoose').Types.ObjectId
const { ContactInfo } = require('../Model/ContactModel')
app1.get('/contact', (req, res) => {
    res.send('Contact successfully')
})
app1.post('/ContactSubmitted', (req, res) => {
    const Contacts = new ContactInfo({
        ContactName: req.body.ContactName,
        ContactEmail: req.body.ContactEmail,
        ContactPhone: req.body.ContactPhone,
        ContactMsg: req.body.ContactMsg,

    })
    Contacts.save((err, docs) => {
        if (!err) {
            console.log("Added Contact Detials")
            res.status(201).send(docs)
            console.log(docs);
        }
        else {
            res.status(501).send(err.message)
        }
    })

})
app1.get('/ContactList', (req, res) => {
    ContactInfo.find((err, docs) => {
        if (docs) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})

app1.get('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        console.log('no record Found')
    }
     ContactInfo.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log('error in finding id')
        }
     })
})

app1.delete('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id))
     console.log('no record Found')
     ContactInfo.findByIdAndRemove(req.params.id,(err)=>{
        if(!err){
            res.send("succesfully deleted")
        }else{
            console.log('error in delete')
        }
     })
})
module.exports = app1