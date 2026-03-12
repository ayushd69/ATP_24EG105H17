import { Schema, model } from "mongoose"
//Create Product Schema(productId,productName,price,brand)
const productSchema = new Schema({
    //structure of Product resource
    productId: {
        type: String,
        required: [true, "ID is required"],
    },
    productName: {
        type: String,
        required: [true, "Product name is required"],
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        min: [10000, "price should be more than 10000"],
        max: [50000, "price should be less than 50000"],
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
    }
},
    {
        versionKey: false,
        timestamps: true,
    }//By this extra object, we can eliminate version key and enable timestamps
)
//Generate ProductModela
export const ProductModel = model("product", productSchema)