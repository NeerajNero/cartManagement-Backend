import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
        cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
        }
})

export const Cart = mongoose.model('Cart', cartSchema)