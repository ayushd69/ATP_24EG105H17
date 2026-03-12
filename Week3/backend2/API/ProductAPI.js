import exp from 'express'
import { ProductModel } from '../modules/ProductModel.js'
export const productApp = exp.Router()
//Define Product REST API routes
//Create new Product
productApp.post("/products", async (req, res) => {

    //Get new user object from req
    const newProduct = req.body;

    //Create new user document
    const newUserDocument = new ProductModel(newProduct)

    //Save
    const result = await newUserDocument.save()
    console.log("Result: ", result)

    //Send response
    res.status(201).json({ message: "Product created" })
})

productApp.get("/products", async (req, res) => {
    let productsList = await ProductModel.find()
    res.status(200).json({ message: "products", payload: productsList })
})

productApp.get("/products/:id", async (req, res) => {
    const pid = req.params.id
    const productObj = await ProductModel.findById(pid)
    res.status(200).json({ message: "product", payload: productObj })
})
productApp.put("/products/:id", async (req, res) => {
    const modifiedProduct = req.body;
    const pid = req.params.id
    //find product by id and update
    const updatedProduct = await ProductModel.findByIdAndUpdate(pid, { $set:{ ...modifiedProduct } }, { new:true,runValidators: true })
    res.status(200).json({ message: "product", payload:updatedProduct })
})
productApp.delete("/products/:id", async (req, res) => {
    let pid = req.params.id
    let deletedProduct = await ProductModel.findByIdAndDelete(pid)
    res.status(200).json({ message: "product deleted", payload: deletedProduct })
})