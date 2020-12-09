import { productData } from "../data/ProductData"
import { CustomError } from '../errors/CustomError'
import { services } from "../services/services"


export class ProductBusiness {
    public getProducts = async() => {
        try {
            const products = await productData.getProducts()
            return products
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    }

    public addProduct = async(data: any):Promise<any> => {
        try {
            const {photo, name, price} = data
            if (!photo) {throw new CustomError(400, `A photo URL is required`)}
            if (!name) {throw new CustomError(400, `A name is required`)}
            if (!price) {throw new CustomError(400, `A price is required`)}

            const _id: String = services.generateId()
            const product = {_id, photo, name, price}

            await productData.addProduct(product)
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    } 
}

export const productBusiness: ProductBusiness = new ProductBusiness()
