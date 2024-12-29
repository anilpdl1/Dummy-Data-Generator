import mongoose from "mongoose";

let addDatas= new mongoose.Schema({
    name:{type:String, required:true},
    salary:{type:Number, required:true},
    language:{type:String,required:true},
    city:{type:String,required:true},
    isManager:{type:Boolean,required:true},
});
export const Data= mongoose.model('Data',addDatas);