import React, { useEffect, useState } from 'react'
import { SaleLine } from './SaleLine'
import { HeaderColumn, Label, PageContainer, ProductContainer, ProductHeader, SearchContainer, Input, TotalBar, TotalColumn, TotalContainer, Select, Title } from './style'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { SaleClients } from './SaleClients'
import { SaleButton } from './SaleButton'




export const SaleAdd = () => {
    const [form, setForm] = useState({})

    const getAllProducts = useStoreActions(actions => actions.product.getProducts)
    const allProducts = useStoreState(state => {return state.product.products})

    const client = useStoreState(state => {return state.client.client})

    const setSale = useStoreActions(actions => actions.sale.setSale)
    const sale = useStoreState(state => {return state.sale.sale})


    const handleSaleData = (product) => {
        if (Object.keys(sale).length === 0) {
            const newSale = {client, products: [product]}
            setSale(newSale)
        } else {
            const {_id, qtt, totalPrice} = product

            let newProducts = sale.products.map(product => {
                return product._id === _id ? {...product, qtt, totalPrice} : product
            })

            const filterNewProducts = newProducts.length &&
            newProducts.filter(product => product._id === _id )

            if (!filterNewProducts.length) {newProducts.push(product)}

            const newSale = {...sale, products: newProducts}

            setSale(newSale)
        }
    }


    const qttTotal = sale.products ? sale.products.reduce((total, product) => total + product.qtt,0) : ''
    const priceTotal = sale.products ? sale.products.reduce((total, product) => total + product.totalPrice,0) : ''


    const handleInput = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }


    const products = (allProducts.length > 0 && form.searchName) ? 
        allProducts.map((product, index) => {
            const visible = product.name.toLowerCase().includes(form.searchName.toLowerCase())
            return <SaleLine key={index + 1} num={index + 1} product={product} visible={visible} handleSaleData={handleSaleData} />    
        })
        :
        allProducts.map((product, index) => {
            return <SaleLine key={index + 1} num={index + 1} product={product} visible={true} handleSaleData={handleSaleData} />    
        })


    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <PageContainer>
            <Title> Formulário de Venda </Title>
            <SearchContainer>
                <Label htmlFor='searchName'>
                    Busque pelo nome
                    <Input
                        id='searchName'
                        name='searchName'
                        value={form.searchName}
                        onChange={handleInput}
                    />
                </Label>

                <Label>
                    Selecione o cliente
                    <Select
                        name='selectClient'
                        value={form.selectClient}
                    >
                        <SaleClients/>
                    </Select>
                </Label>
            </SearchContainer>

            <ProductContainer>
                <TotalContainer>
                    <TotalBar>
                        <TotalColumn> Total do Pedido </TotalColumn>
                        <TotalColumn> {qttTotal && `${qttTotal}`} </TotalColumn>
                        <TotalColumn> {priceTotal && `${priceTotal.toFixed(2).replace('.', ',')}`} </TotalColumn>
                    </TotalBar>
                    <SaleButton/>
                </TotalContainer>

                <ProductHeader>
                    <HeaderColumn> Produto </HeaderColumn>
                    <HeaderColumn> Preço </HeaderColumn>
                    <HeaderColumn> Qtde </HeaderColumn>
                    <HeaderColumn> Total </HeaderColumn>
                </ProductHeader>

                {products}
            </ProductContainer>
        </PageContainer>
    )
}