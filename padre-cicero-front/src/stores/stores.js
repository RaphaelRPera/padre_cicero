import { action, thunk } from 'easy-peasy'
import axios from 'axios'

// const baseUrl = 'http://localhost:3003'
const baseUrl = 'https://padre-cicero.herokuapp.com'

export const productStore = {
    product: {},
    products: [],

    setProducts: action((state, payload) => {
        state.products = payload
    }),

    getProducts: thunk(async (actions, product) => {
        const {data} = await axios.get(`${baseUrl}/products/all`)
        actions.setProducts(data)
    }),

    postProduct: thunk(async (actions, body) => {
        await axios.post(`${baseUrl}/products/add`, body)
    }),
}


export const clientStore = {
    client: {},
    clients: [],

    setClients: action((state, payload) => {
        state.clients = payload
    }),

    setClient: action((state, payload) => {
        state.client = payload
    }),

    getClients: thunk(async (actions) => {
        const {data} = await axios.get(`${baseUrl}/clients/all`)
        actions.setClients(data)
    }),
}


export const saleStore = {
    sale: {},
    sales: [],

    setSales: action((state, payload) => {
        state.sales = payload
    }),

    setSale: action((state, payload) => {
        state.sale = payload
    }),

    getSales: thunk(async (actions) => {
        const {data} = await axios.get(`${baseUrl}/sales/all`)
        actions.setSales(data)
    }),

    postSale: thunk(async (actions, body) => {
        await axios.post(`${baseUrl}/sales/add`, body)
    }),
}


