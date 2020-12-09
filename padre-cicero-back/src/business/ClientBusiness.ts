import { clientData } from "../data/ClientData"
import { CustomError } from '../errors/CustomError'
import { services } from "../services/services"


export class ClientBusiness {
    public getClients = async ():Promise<any> => {
        try {
            const clients = await clientData.getClients()
            return clients
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    } 


    public addClient = async (data: any):Promise<any> => {
        try {
            const {name} = data
            if (!name) {throw new CustomError(400, 'A name is required')}

            const _id: String = services.generateId()
            const client = {_id, name}
            
            await clientData.addClient(client)
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    }
}


export const clientBusiness: ClientBusiness = new ClientBusiness()
