import mongoose from 'mongoose';
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    photo: {
        type: String
    },
    description: {
        type: String
    },
    logo: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);