const mongodb=require('mongoose')


const AddMenu=mongodb.model('MenuItems',{
   
       Addname:String,
       Price:Number,
       FoodType:String,
       ImageUploadURL:String,
       description:String,
  
   

})
module.exports={AddMenu}