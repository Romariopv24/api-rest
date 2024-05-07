import express from "express"
import morgan from "morgan"
import connectDB from "./database"
import productsRoutes from "./routes/products.routes"
const app = express()

const server = () => {
  app.use(morgan("dev"))
  app.use(express.json())

  app.get("/", (req, res) => {
    res.json({
      name: app.get("pkg").name,
      author: app.get("pkg").author,
      description: app.get("pkg").description,
      version: app.get("pkg").version
    })
  })

  app.listen(3010)
  console.log("Server on port", 3010)
  connectDB()
    .then(() => {
      console.log("Database connected")
    })
    .catch((error) => console.log("Error connecting to database", error))

  app.use("/products", productsRoutes)
}

export default server
