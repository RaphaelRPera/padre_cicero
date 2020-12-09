import React from 'react'
import { LineContainer, LineColumn, LineImg, LineIndex, LineName, LineImgContainer } from './styleLine'
// import { LineClient, LineDate, LineQtt, LineValueTotal, LineValueUnit } from './styleLine'
// import caipiraImg from '../../img/caipira.jpg'

export const ProductLine = (props) => {
    const {index, photo, name, date, quantity, client, valueUnit} = props.product
    // const index = props.key
    const valueTotal = Number(quantity) * Number(valueUnit)
    
    return (
        <LineContainer>
            {/* Imagem, Nome, Data, Quantidade, Cliente */}
            <LineIndex> {(index + 1) < 10 ? `0${index + 1}` : index + 1} </LineIndex>
            <LineImgContainer> <LineImg src={photo} /> </LineImgContainer>
            <LineName> {name} </LineName>
            {/* <LineClient> {client} </LineClient>
            <LineDate> {date} </LineDate>
            <LineQtt> {quantity < 10 ? `0${quantity}` : quantity} </LineQtt>
            <LineValueUnit> {String(valueUnit).replace('.', ',')} </LineValueUnit>
            <LineValueTotal> {String(valueTotal).replace('.', ',')} </LineValueTotal> */}
            <LineColumn> {client} </LineColumn>
            <LineColumn> {date} </LineColumn>
            <LineColumn> {quantity < 10 ? `0${quantity}` : quantity} </LineColumn>
            <LineColumn> {String(valueUnit).replace('.', ',')} </LineColumn>
            <LineColumn> {String(valueTotal).replace('.', ',')} </LineColumn>
        </LineContainer>
    )
}