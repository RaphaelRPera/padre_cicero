import { saleData } from "../data/SaleData"
import { CustomError } from '../errors/CustomError'
import { services } from "../services/services"


export class SaleBusiness {
    public getSale = async ():Promise<any> => {
        try {
            const sales = await saleData.getSales()
            return sales
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    } 


    public addSale = async (data: any):Promise<any> => {
        try {
            const {product, qtt, client} = data

            const prodId = product._id

            if (!product._id) {throw new CustomError(400, 'Product ID is required')}
            if (!product.photo) {throw new CustomError(400, 'Product photo is required')}
            if (!product.name) {throw new CustomError(400, 'Product name is required')}
            if (!product.price) {throw new CustomError(400, 'Product price is required')}
            
            if (!qtt) {throw new CustomError(400, 'Sale quantity is required')}

            if (!client._id) {throw new CustomError(400, 'Client ID is required')}
            if (!client.name) {throw new CustomError(400, 'Client name is required')}
            
            const totalPrice = product.price * qtt
            const _id: String = services.generateId()
            const timeStamp = Date.now()

            const sale = {
                _id,
                timeStamp,
                product: {
                    _id: product._id,
                    photo: product.photo,
                    name: product.name,
                    price: product.price,
                },
                client: {
                    _id: client._id,
                    name: client.name,
                },
                qtt,
                totalPrice
            }
            
            await saleData.addSale(sale)
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    }
}


export const saleBusiness: SaleBusiness = new SaleBusiness()
