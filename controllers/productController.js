import { Product } from "../models/products.model.js"
export const addProduct = async(req,res) => {
    try{
        const {name,price,description,productImageUrl} = req.body
        if(!name && !price && !description && !productImageUrl){
            return res.status(400).json("all fields are required")
        }
        const newProduct = {name,price,description,productImageUrl}
        const addProduct = new Product(newProduct)
        const saveProduct = await addProduct.save()
        if(!saveProduct){
            return res.status(400).json({error: "unable to save Product details"})
        }
        res.status(201).json({message: "product added successfully", product: saveProduct})
    }catch(error){
        console.log("error occured while adding product",error.message)
        res.status(500).json("unable to add product",error.message)
    }
}

export const getProducts = async(req,res) => {
    try{
        const products = await Product.find()
        if(products.length === 0){
            return res.status({message: "there are no products available"})
        }
        res.status(200).json({message: "products Found", products})
    }catch(error){
        console.log("error occured while get product",error.message)
        res.status(500).json("unable to get product",error.message)
    }
}

export const product = async(req,res) => {
    res.status(200).json("welcome")
}