import React, { useEffect } from 'react'
import { SaleLine } from './SaleLine'
import { HeaderColumn, PageContainer, SalesContainer, SalesHeader, Title} from './style'
import { useStoreActions, useStoreState } from 'easy-peasy'



export const AllSalesPage = () => {
    const getAllSales = useStoreActions(actions => actions.sale.getSales)
    const allSales = useStoreState(state => {return state.sale.sales})

    const sales = allSales.length > 0 &&
        allSales.map((sale, index) => {
            return <SaleLine key={index + 1} num={index + 1} sale={sale} />    
        })


    useEffect(() => {
        getAllSales()
    }, [])

    return (
        <PageContainer>
            <Title> Relatório de Vendas </Title>
            <SalesContainer>
                <SalesHeader>
                    <HeaderColumn> Produto </HeaderColumn>
                    <HeaderColumn> Data </HeaderColumn>
                    <HeaderColumn> Cliente </HeaderColumn>
                    <HeaderColumn> Preço </HeaderColumn>
                    <HeaderColumn> Qtde </HeaderColumn>
                    <HeaderColumn> Total </HeaderColumn>
                </SalesHeader>

                {sales}
            </SalesContainer>
        </PageContainer>
    )
}