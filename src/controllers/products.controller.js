import Products from '../models/Product'

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body    


        const newProduct =  new Products({name, category, price, imgURL})
        const productSave = await newProduct.save()
        // res.status(201).json(productSave)
        console.log(productSave)
        res.json(productSave)
}

export const getProducts = (req, res) => {
    res.json('getProducts')
}


export const getProductById = (req, res) => {}


export const updateProductById = (req, res) => {}

export const deleteProductById = (req, res) => {}