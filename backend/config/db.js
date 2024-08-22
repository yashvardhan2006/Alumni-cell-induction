import mongoose from 'mongoose'
 export const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017").then(()=>{
            console.log("Connected to MongoDB")
        })
    }
    catch (error){
        console.log(error)
    }
}