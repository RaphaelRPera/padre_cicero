import React from 'react'
import { LineImg } from './styleLine'
import { LineColumn, LineContainer, QttInput } from './styleLine'
import { useForm } from '../../hooks/useForm'


export const SaleLine = (props) => {
    const {_id, name, price, photo} = props.product
    const [form, handleInputChange, setFormData] = useForm({qttInput: '', totalPrice:''})
    
    const handleInput = (event) => {
        const {name, value} = event.target
        if ( !isNaN(Number(value.replace(',','.'))) ) {
            const totalPrice = Number(value.replace(',','.')) * price
            setFormData({[name]: value, totalPrice})
            
            const qtt = Number(value.replace(',','.'))
            const product = {...props.product, qtt, totalPrice}
            props.handleSaleData(product)
        }
    }


    return (
        <LineContainer visible={props.visible} >
            <LineColumn> {props.num} </LineColumn>
            <LineColumn> <LineImg src={photo} /> </LineColumn>
            <LineColumn> {name} </LineColumn>
            <LineColumn> {price.toFixed(2).replace('.', ',')} </LineColumn>

            <LineColumn>
                <QttInput
                    name='qttInput'
                    value={form.qttInput}
                    onChange={handleInput}
                />
            </LineColumn>

            <LineColumn> {form.totalPrice ? form.totalPrice.toFixed(2).replace('.', ',') : 0} </LineColumn>
        </LineContainer>
    )
}