const mongoose = require('mongoose')
import { CustomError } from "../errors/CustomError";
import { BaseDataBase } from "./BaseDataBase";


export class ProductData extends BaseDataBase {
    public getProducts = async():Promise<any> => {
        try {
            const productModel = mongoose.model('products', this.ProductSchema)
            return productModel.find({ })
                .then((data: any) => {
                    // console.log('[Product Data]:', data)
                    return data
                })
                .catch((error: any) => {
                    throw new CustomError(400, error.message)
                })
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    }

    public addProduct = async(data: any):Promise<any> => {
        try {
            const productModel = mongoose.model('products', this.ProductSchema)
            const newProduct = new productModel(data)
            newProduct.save((error: any) => {
                if(error) {
                    // console.log('[product error]: Ooops, something happend')
                    const {statusCode, message} = error
                    throw new CustomError(statusCode, message)
                } else {
                    console.log('Product data has been saved!!', data)
                }
            })
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    }
}

export const productData: ProductData = new ProductData()