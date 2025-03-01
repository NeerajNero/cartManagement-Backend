import { Cart } from "../models/cart.model.js";

export const addToCart = async(req,res) => {
    try{
        const {productId} = req.body
        const cart = new Cart({cartId: productId})
        const saveCart = await cart.save()
        if(!saveCart){
            return res.status(400).json("unable to save cart")
        }
        const getCartItem = await Cart.findOne({cartId: productId}).populate('cartId')
        res.status(201).json({message: "product added to cart", cart: getCartItem})
    }catch(error){
        console.log("error occured while adding to Cart",error.message)
        res.status(500).json("unable to add cart",error.message)
    }
}
export const getCart = async(req,res) => {
    try{
        const cart = await Cart.find().populate('cartId')
        if(cart.length === 0){
            return res.status(400).json("no products found in cart")
        }
        res.status(200).json({messgae: "cart data found", cart})
    }catch(error){
        console.log("error occured while get Cart",error.message)
        res.status(500).json("unable to get Cart",error.message)
    }
}

export const removeFromCart = async(req,res) =>{
    try{
        const {cartId} = req.body
        const removeProductFromCart = await Cart.findOneAndDelete({cartId})
        if(!removeProductFromCart){
            return res.status("unable to delete from cart")
        }
        res.status(200).json("product removed from cart")
    }catch(error){
        console.log("error occured while get Cart",error.message)
        res.status(500).json("unable to get Cart",error.message)
    }
}