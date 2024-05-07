import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'
import connectDB from './database'

const app = express()
app.use(morgan('dev'))
app.use(express.json())



app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

connectDB().then(() => {
    console.log('Database connected');
}).catch(error => console.log('Error connecting to database', error))

app.use('/products',productsRoutes)

export default app
