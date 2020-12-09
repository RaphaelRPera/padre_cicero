import { Request, Response } from 'express'
import { clientBusiness } from '../business/ClientBusiness'


export class ClientController {
    public getClients = async (req: Request, res: Response):Promise<void> => {
        try {
            const clients = await clientBusiness.getClients()
            res.status(200).send(clients)
        } catch (error) {
            const {statusCode, message} = error
            res.status(statusCode || 400).send({message})
        }
    }

    public addClient = async (req: Request, res: Response):Promise<void> => {
        try {
            const {name} = req.body
            const client = {name}
            await clientBusiness.addClient(client)
            res.status(200).send({message: `Client successfully added`})
        } catch (error) {
            const {statusCode, message} = error
            res.status(statusCode || 400).send({message})
        }
    }
}


export const clientController: ClientController = new ClientController()
