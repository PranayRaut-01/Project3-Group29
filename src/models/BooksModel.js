const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "title is required",
      unique: true,
      trim: true,
    },
    bookCover:{type:String},
    excerpt: { type: String, required: "excerpt is required", trim: true },
    userId: { type: ObjectId, required: "userId is required", ref: "User" },
    ISBN: { type: String, required: "ISBN is required", unique: true },
    category: { type: String, required: "category is required" },
    subcategory: { type: [String], required: "subcategory is required" ,trim:true},
    reviews: {
      type: Number,
      default: 0,
    },
    deletedAt: {type:Date },
    isDeleted: { type: Boolean, default: false },
    releasedAt: { type: Date, required: "releasedAt is required" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema); //books
