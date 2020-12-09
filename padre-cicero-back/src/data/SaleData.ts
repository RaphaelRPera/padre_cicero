const mongoose = require('mongoose')
import { CustomError } from "../errors/CustomError";
import { BaseDataBase } from "./BaseDataBase";


export class SaleData extends BaseDataBase {
    public getSales = async ():Promise<any> => {
        try {
            const saleModel = mongoose.model('sales', this.SaleSchema)
            return saleModel.find({ })
                .then((data: any) => {
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


    public addSale = async (data: any):Promise<any> => {
        try {
            const saleModel = mongoose.model('sales', this.SaleSchema)
            const newSale = new saleModel(data)
            newSale.save((error: any) => {
                if(error) {
                    const {statusCode, message} = error
                    throw new CustomError(statusCode, message)
                } else {
                    console.log('Sale data has been saved!!', data)
                }
            })
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    }
}

export const saleData: SaleData = new SaleData()