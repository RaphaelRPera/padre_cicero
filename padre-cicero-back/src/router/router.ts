import express from 'express'
import { clientController } from '../controller/ClientController'
import { productController } from '../controller/ProductController'
import { saleController } from '../controller/SaleController'

//  Product Router
export const productRouter = express.Router()
productRouter.get('/all', productController.getProducts)
productRouter.post('/add', productController.addProduct)


//  Client Router
export const clientRouter = express.Router()
clientRouter.get('/all', clientController.getClients)
clientRouter.post('/add', clientController.addClient)


//  Sale Router
export const saleRouter = express.Router()
saleRouter.get('/all', saleController.getSales)
saleRouter.post('/add', saleController.addSale)