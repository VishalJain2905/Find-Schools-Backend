import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  comment: {type:String},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Review = mongoose.models.Review  || mongoose.model("Review", reviewSchema);

export default Review;
