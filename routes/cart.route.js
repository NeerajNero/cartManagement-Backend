import express from 'express'
const router = express.Router()
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js'

router.get('/cart', getCart)
router.post('/addToCart', addToCart)
router.post('/removeFromCart', removeFromCart)

export default router