const mongodb=require('mongoose')


const ContactInfo=mongodb.model('Contacts',{
   
    ContactName:String,
    ContactEmail:String,
    ContactPhone:Number,
    ContactMsg:String,
   
  
   

})
module.exports={ContactInfo}