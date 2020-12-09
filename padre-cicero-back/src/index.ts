/**************************** IMPORTS ******************************/
import express, { Express } from "express"
import cors from "cors"
import { productRouter, clientRouter, saleRouter } from './router/router'



/**************************** CONFIG ******************************/
const app: Express = express()
app.use(express.json())
app.use(cors())


/**************************** ENDPOINTS ******************************/
app.use('/products', productRouter)
app.use('/clients', clientRouter)
app.use('/sales', saleRouter)


/**************************** SERVER INIT ******************************/
app.listen(3003, () => {
   console.log("Server running on port 3003")
})