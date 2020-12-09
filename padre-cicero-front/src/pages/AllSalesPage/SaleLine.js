import React from 'react'
import { LineImg } from './styleLine'
import { LineColumn, LineContainer } from './styleLine'


export const SaleLine = (props) => {
    const {client, product, qtt, timeStamp, totalPrice} = props.sale

    const cliName = client.name
    const prodName = product.name
    const prodPhoto = product.photo
    const prodPrice = product.price

    const date = new Date(Number(timeStamp)).toLocaleDateString("pt-BR")

    return (
        <LineContainer visible={true} >
            <LineColumn> {props.num} </LineColumn>
            <LineColumn> <LineImg src={prodPhoto} /> </LineColumn>
            <LineColumn> {prodName} </LineColumn>
            <LineColumn> {date} </LineColumn>
            <LineColumn> {cliName} </LineColumn>
            <LineColumn> {prodPrice.toFixed(2).replace('.', ',')} </LineColumn>
            <LineColumn> {qtt} </LineColumn>
            <LineColumn> {totalPrice ? totalPrice.toFixed(2).replace('.', ',') : 0} </LineColumn>
        </LineContainer>
    )
}