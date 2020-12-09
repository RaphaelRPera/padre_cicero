import React, { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'


export const SaleClients = () => {
    const getAllClients = useStoreActions(actions => actions.client.getClients)
    const allClients = useStoreState(state => {return state.client.clients})

    const setClient = useStoreActions(actions => actions.client.setClient)
    const client = useStoreState(state => {return state.client.client})

    const setSale = useStoreActions(actions => actions.sale.setSale)
    const sale = useStoreState(state => {return state.sale.sale})

    const handleSaleData = (selectClient) => {
        // console.log('handleSaleData', selectClient)
        const newSale = Object.keys(sale).length === 0 ?
            {client: selectClient, products: []} :
            {...sale, client: selectClient}
        
        setSale(newSale)
        setClient(selectClient)
    }

    const clients = allClients.length > 0 &&
        allClients.map((client, index) => {
            return <option key={index} value={client.name} onClick={() => handleSaleData(client)} > {client.name} </option>
        })
    

    const valid = (allClients.length > 0 && client._id === undefined)
    valid && setClient(allClients[0])


    useEffect(() => {
        getAllClients()
    }, [])

    return clients
}