import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { AddSaleButton } from './style'
import { useForm } from '../../hooks/useForm'


export const SaleButton = () => {
    const sale = useStoreState(state => {return state.sale.sale})
    const postSale = useStoreActions(actions => actions.sale.postSale)

    const handleClick = () => {
        const qttTotal = sale.products ? sale.products.reduce((total, product) => total + product.qtt,0) : 0
        if (!qttTotal) {
            alert('Pelo menos 1 produto deve ser adicionado a lista')
            return
        }

        const {client, products} = sale

        const newProducts = products.filter(product => product.qtt > 0)
        
        const sales = newProducts.map(product => {
            const {_id, photo, name, price, qtt} = product
            const newProduct = {_id, photo, name, price}
            return {product: newProduct, qtt, client}
        })

        sales.map(sale => { postSale(sale) })

        setTimeout(()  => {
            window.alert('Pedido cadastrado com sucesso')
            window.location.reload(false)
        }, 600)
    }

    return (
        <AddSaleButton
            onClick={handleClick}
        >
            Finalizar Pedido
        </AddSaleButton>
    )
}
