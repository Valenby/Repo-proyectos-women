//definimos estructura de lo que necesitamos
import mongoose  from 'mongoose';

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    author: {type: String, required: false},
    category: {type: String, required: false},
    description: {type: String, required: false},
    pages: {type: Number, required: false},
    availlableUnits: {type: Number, required: false, default: 0},
    price: {type: Number, required: true},
});

const productModel =  mongoose.model("products", productSchema);

module.exports = {
    productModel
};