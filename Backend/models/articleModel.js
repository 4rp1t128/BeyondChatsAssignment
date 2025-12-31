import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    sourceUrl: String,
    publishedDate: Date,
    isUpdated: { type: Boolean, default: false },
    references: [String],
}, { timestamps: true });

export default mongoose.model("Article", articleSchema);
