import { Request, Response } from 'express'
import { productBusiness } from '../business/ProductBusiness'



export class ProductController {
    public getProducts = async(req: Request, res: Response) => {
        try {
            const products = await productBusiness.getProducts()
            res.status(200).send(products)
        } catch (error) {
            const {statusCode, message} = error
            res.status(statusCode || 400).send({message})
        }
    }

    public addProduct = async(req: Request, res: Response) => {
        try {
            const {photo, name, price} = req.body
            const data = {photo, name, price}
            await productBusiness.addProduct(data)
            res.status(200).send({message: `Product successfully added`})
        } catch (error) {
            const {statusCode, message} = error
            res.status(statusCode || 400).send({message})
        }
    }
}

export const productController: ProductController = new ProductController()