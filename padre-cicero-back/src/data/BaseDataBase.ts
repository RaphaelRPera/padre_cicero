import dotenv from 'dotenv'
dotenv.config()

const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI


export class BaseDataBase {
    connection = mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    Schema = mongoose.Schema

    ProductSchema = new this.Schema({
        _id: String,
        photo: String,
        name: String,
        price: Number,
    })

    ClientSchema = new this.Schema({
        _id: String,
        name: String,
    })

    SaleSchema = new this.Schema({
        _id: String,
        timeStamp: String,
        product: {
            _id: String,
            photo: String,
            name: String,
            price: Number,
        },
        client: {
            _id: String,
            name: String,
        },
        qtt: Number,
        totalPrice: Number
    })

    // Product = mongoose.model('products', this.ProductSchema)
}

export default new BaseDataBase()

