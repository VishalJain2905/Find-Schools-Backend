import mongoose from 'mongoose';
const { Schema } = mongoose;

const schoolSchema = new Schema({
    name:{type:String,required:true},
    contact:{type:Number, required:true},
    location:{
        type:{
        type:String,
        enum:["Point"],
        required:true,
        default:"Point"
        },
        coordinates: {
            type:[Number],
            required:true,
            default:[0,0],
        },
    },
    address: {
        street: {type:String} ,
        city: {type:String},
        state: {type:String},
        postalCode: {type:String},
      },
      email: {type:String},
      website: {type:String},
      ratings: {
        type: Number,
        min: 0,
        max: 5,
      },
      reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
      }],
    
})

const School = mongoose.models.School  || mongoose.model("School", schoolSchema);

export default School;