import React from 'react'
import { ProductLine } from './ProductLine'
import { productMock } from './ProductMock'
import { PageContainer } from './style'


export const SalesPage = () => {
    const products = productMock.map((product, index) => {
        return <ProductLine key={index} product={{...product, index}}/>
    })

    return (
        <PageContainer>
            {products}
        </PageContainer>
    )
}