import mongoose from "mongoose"

const dbUri = "mongodb://127.0.0.1:27017/api-rest"

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri)
  } catch (error) {
    console.log(error)
    throw new Error("Error connecting to database")
  }
}

export default connectDB
