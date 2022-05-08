const mongoose = require('mongoose')








var mongourl = "mongodb+srv://admin:admin123@cluster0.ix9ou.mongodb.net/mern-pizza?retryWrites=true&w=majority"


mongoose.connect(mongourl,{
    useUnifiedTopology:true,
    useNewUrlParser: true
})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('mongoDB connected :]')
})

db.on('error' ,()=>{
    console.log("mongoDB connection failed")
})

module.exports = mongoose