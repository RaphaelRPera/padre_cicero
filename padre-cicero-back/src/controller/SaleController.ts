import { Request, Response } from 'express'
import { saleBusiness } from '../business/SaleBusiness'


export class SaleController {
    public getSales = async (req: Request, res: Response):Promise<void> => {
        try {
            const sales = await saleBusiness.getSale()
            res.status(200).send(sales)
        } catch (error) {
            const {statusCode, message} = error
            res.status(statusCode || 400).send({message})
        }
    }

    public addSale = async (req: Request, res: Response):Promise<void> => {
        try {
            const {product, qtt, client} = req.body
            const sale = {product, qtt, client}
            await saleBusiness.addSale(sale)
            res.status(200).send({message: `Sale successfully added`})
        } catch (error) {
            const {statusCode, message} = error
            res.status(statusCode || 400).send({message})
        }
    }
}


export const saleController: SaleController = new SaleController()
