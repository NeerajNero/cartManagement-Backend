import express from 'express'
import dotenv from 'dotenv'
import initializeDatabase from './db/db.connect.js'
import productRoutes from './routes/product.route.js'
import cartRoutes from './routes/cart.route.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

dotenv.config()
initializeDatabase()

const PORT = process.env.PORT

app.use('/product', productRoutes)
app.use('/cart', cartRoutes)

app.listen(PORT, ()=> {
    console.log("Server is running on PORT: ", PORT)
})

