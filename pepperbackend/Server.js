const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser=require('body-parser')

const {ContactDb}=require('./ContactMongoDb')
const {mongoose}=require('./Mongodb')
const {RegAndLog}=require('./RegAndLogDB')


const AddmenuControl=require('./controller/AddMenuController');
const Contactapp = require('./controller/ContactController');
const  userController=require('./controller/RegAndLogContoller')



app.use(cors({origin:'http://localhost:3000'}))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())




app.listen(4000, ()=>{
    console.log('App running in port: '+4000)
})

app.use('/',AddmenuControl)
app.use('/',Contactapp)
app.use('/',userController)