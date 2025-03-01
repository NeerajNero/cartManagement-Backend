import mongoose from "mongoose";

const initializeDatabase = async() => {
    const mongoUri = process.env.MONGO_DB_URI
    const connection = await mongoose.connect(mongoUri)
    if(!connection){
        return console.log("unable to connect to DB")
    }
    console.log("connected to DB")
}

export default initializeDatabase