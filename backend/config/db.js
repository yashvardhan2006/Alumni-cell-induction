import mongoose from 'mongoose'
 export const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://yvardhansolanki:Zs0tu4sFgG7IdTjk@cluster0.s3nyr.mongodb.net/").then(()=>{
            console.log("Connected to MongoDB")
        })
    }
    catch (error){
        console.log(error)
    }
}
