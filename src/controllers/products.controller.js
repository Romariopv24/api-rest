import Products from '../models/Product'

export const createProduct = async (req, res) => {
    const {name, category, price, imgURL} = req.body    


        const newProsduct =  new Products({name, category, price, imgURL})
        const productSave = await newProduct.save()
        res.status(201).json(productSave)
}

export const getProducts = async (req, res) => {
    const products =  await Products.find()
    res.json(products)
}


export const getProductById = async(req, res) => {
    const product = await Products.findById(req.params.productId)
    res.status(200).json(product)
}


export const updateProductById = async(req, res) => {
const updatedProduct = await Products.findByIdAndUpdate(req.params.productId, req.body, {
    new:true
})

    res.status(200).json(updatedProduct)
}


export const deleteProductById = async(req, res) => {
    const {productId} = req.params
    await Products.findByIdAndDelete(productId)
    res.status(204).json()
}