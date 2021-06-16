import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true,
        // required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    photo: {
        type: String
    },
    quantity: {
        type: Number
    },
    // sold: {
    //     type: Number,
    //     default: 0
    // },
    // shipping: {
    //     required: false,
    //     type: Boolean
    // }
    status: {
        type: Boolean
    }
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);