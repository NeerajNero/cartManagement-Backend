import express from 'express'
import { addProduct, getProducts,product } from '../controllers/productController.js'
const router = express.Router()

router.get('/products', getProducts)
router.post('/addProduct', addProduct)
router.get('/prod', product)

export default router