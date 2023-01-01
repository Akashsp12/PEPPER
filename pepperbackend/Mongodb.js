const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://PEPPER:pepper9818406@pepper.vf2bdmf.mongodb.net/Pepper', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log(' MongoDB  Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});
module.exports={mongoose}