import mongoose from "mongoose";

const dbUri = "mongodb://localhost:27017/"

const connectDB = async () => {
  try {
   await mongoose.connect(dbUri, {dbName: 'products-api'})
    .then(() => {
      console.log('Database connected');
    }).catch((error) => {
      console.log('Error connecting to database', error)
    })
  } catch (error) {
    console.log(error)
  }
}

export default connectDB