const mongoose = require('mongoose')
import { CustomError } from "../errors/CustomError";
import { BaseDataBase } from "./BaseDataBase";


export class ClientData extends BaseDataBase {
    public getClients = async ():Promise<any> => {
        try {
            const clientModel = mongoose.model('clients', this.ClientSchema)
            return clientModel.find({ })
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


    public addClient = async (data: any):Promise<any> => {
        try {
            const clientModel = mongoose.model('clients', this.ClientSchema)
            const newClient = new clientModel(data)
            newClient.save((error: any) => {
                if(error) {
                    const {statusCode, message} = error
                    throw new CustomError(statusCode, message)
                } else {
                    console.log('Client data has been saved!!', data)
                }
            })
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    }
}

export const clientData: ClientData = new ClientData()