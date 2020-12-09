import { createStore } from 'easy-peasy'
import { clientStore, productStore, saleStore } from './stores'

const store = createStore({
    client: clientStore,
    product: productStore,
    sale: saleStore
})

export default store