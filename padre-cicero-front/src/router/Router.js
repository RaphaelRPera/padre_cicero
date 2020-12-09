import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProductAdd } from '../pages/ProductAdd/ProductAdd'
import { SaleAdd } from '../pages/SaleAdd/SaleAdd'
import { AllSalesPage } from '../pages/AllSalesPage/AllSalesPage'


export const Router = () => {
    return (
        <Switch>
            <Route exact path={['/', '/home']} >
                <AllSalesPage/>
            </Route>

            <Route exact path={'/products/add'} >
                <ProductAdd/>
            </Route>

            <Route exact path={'/sales/all'} >
                <AllSalesPage/>
            </Route>

            <Route exact path={'/sales/add'} >
                <SaleAdd/>
            </Route>
        </Switch>
    )
}