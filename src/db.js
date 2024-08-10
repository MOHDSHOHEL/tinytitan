const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
       });
       console.log("Connected to MONGODB...")
    }

    catch(err){
        console.log('Error connecting to database: ',err);

    }
}

module.exports=connectDB;