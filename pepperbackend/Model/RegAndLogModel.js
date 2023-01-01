const mongodb=require('mongoose')


const UserInfo=mongodb.model('Users',{
   
    UserName:String,
    UserEmail:String,
    Userpassword:String,
   
   
  
   

})
module.exports={UserInfo}