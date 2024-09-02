import mongoose from 'mongoose'
 export const connectDB = async ()=>{
    try{
        await mongoose.connect("").then(()=>{
            console.log("Connected to MongoDB")
        })
    }
    catch (error){
        console.log(error)
    }
}
