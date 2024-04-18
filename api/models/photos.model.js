import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
   
    imageUrls: {
      type: Array,
      required: true,
    },
   
  },
  { timestamps: true }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;