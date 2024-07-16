import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name:{type:String, required:true},
        email:{type:String, unique:true, required:true},
        contact:{type:Number, unique:true},
        password:{type:String},
        dob:{type:Date},
        gender:{type:String},
        location: {
            type: {
              type: String,
              enum: ["Point"],
              required: true,
              default: "Point",
            },
            coordinates: {
              type: [Number],
              required: true,
              default: [0, 0],
            },
          },
          role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user',
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    },{timestamps:true}
);

const User = mongoose.models.User  || mongoose.model("User", userSchema);

export default User;