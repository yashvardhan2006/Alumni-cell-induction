import mongoose from "mongoose";
const formsend = new mongoose.Schema({
Fname:{ type:String, required:true},
Lname:{ type:String, required:true},
Email:{ type:String, required:true},
Contact:{ type:String, required:true},
Describe:{ type:String}

});
const senderuser = mongoose.models.Queries|| mongoose.model('Queries', formsend)
export default senderuser;