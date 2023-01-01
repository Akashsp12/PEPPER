const express = require('express')
const app = express.Router()
const objectId = require('mongoose').Types.ObjectId
const { AddMenu } = require('../Model/AddMenuModel')

app.get('', (req, res) => {
    res.send('test successfully')
})
app.post('', (req, res) => {
    var Dishes = new AddMenu({
        Addname: req.body.Addname,
        Price: req.body.AddPrice,
        FoodType: req.body.FoodType,
        ImageUploadURL: req.body.ImageUploadURL,
        description: req.body.description,
    })
    Dishes.save((err, docs) => {
        if (!err) {
            console.log("Added Menu Products")
            res.status(201).send(docs)
            console.log(docs);

        }
        else {
            res.status(501).send(err.message)
        }
    })

})
app.get('/MenuList', (req, res) => {
    AddMenu.find((err, docs) => {
        if (docs) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})
app.get('/Edit/:id', (req, res) => {
    if (!objectId.isValid(req.params.id)) {
        console.log('no record found in database')
    }
    else {
        console.log('Record Found')
    }
    AddMenu.findById(req.params.id, (err, docs) => {
        if (!err) {
            console.log(docs)
            res.send(docs)
        }
        else {
            console.log('error')
        }
    })
}
)
app.put('/put/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        response.send('No record');

    const MenuUpdate = {
        Addname: req.body.Addname,
        Price: req.body.Price,
        FoodType: req.body.FoodType,
        ImageUploadURL: req.body.ImageUploadURL,
        description: req.body.description,
    }
    AddMenu.findByIdAndUpdate(req.params.id, { $set: MenuUpdate }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Update :' + JSON.stringify(err)); }
    });
});
app.delete('/del/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        res.send('No record');
    AddMenu.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in remove :' + JSON.stringify(err)); }
    })
})




module.exports = app