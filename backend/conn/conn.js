const mongoose=require("mongoose");
const conn =async()=>
  {
    try{
      await mongoose.connect('mongodb://localhost:27017');
      console.log("Connected to database");
    }
    catch(err)
    {
      console.log(err);
    }
  }
 
  conn();