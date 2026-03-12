import {Schema,model,Types} from "mongoose"
//create cart schema(product,count)
 const cartSchema = new Schema({
  product: {
     type: Types.ObjectId,
     ref: "product"   // name of the Product model
   },
   count: {
    type: Number,
     default: 1
   }
 });
//Create User Schema(username,password,email,age)
const userSchema=new Schema({
    //structure of User resource
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length of username is 4 chars"],
        maxLength:[6,"Username size exceeds 6 chars"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"email already exists"],
    },
    age:{
        type:Number,
    },
     cart:[cartSchema]
},
{
    versionKey:false,
    timestamps:true,
}//By this extra object, we can eliminate version key and enable timestamps
)
//Generate UserModel
export const UserModel=model("user",userSchema)