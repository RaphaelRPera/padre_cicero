import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'
import { Button, Form, Input, Label, NotValidBox, PageContainer, Title } from './style'


export const ProductAdd = () => {
    const [form, setForm] = useState({})

    const postProduct = useStoreActions(actions => actions.product.postProduct)

    const handleInput = (event) => {
        const {value, name} = event.target
        if (name === 'price' && isNaN(Number(value.replace(',','.')))) {
            setForm({
                ...form,
                [name]: value,
                [`${name}IsValid`]: false,
                [`${name}ErrorMessage`]: '* somente números'
            })
        } else {
            setForm({...form, [name]: value, [`${name}IsValid`]: true, [`${name}ErrorMessage`]: '* preenchimento obrigatório'})
        }
    }


    const handleSubmit = async () => {
        if (!form.name) {setForm({...form, nameIsValid: false}); return}
        if (!form.photo) {setForm({...form, photoIsValid: false}); return}
        if (!form.price) {setForm({...form, priceIsValid: false}); return}
        
        const name = form.name
        const photo = form.photo
        const price = Number(form.price.replace(',','.'))
        if (isNaN(price)) {setForm({...form, priceIsValid: false}); return}

        postProduct({name, photo, price})

        setTimeout(()  => {
            setForm({name: '', photo: '', price: ''})
            window.alert('Produto cadastrado com sucesso')
        }, 600)
    }

    return (
        <PageContainer>
            
            <Form onSubmit={(e) => e.preventDefault()} >
                <Title> Cadastro de Produto </Title>
                <Label isValid={form.nameIsValid} >
                    Nome do produto
                    <Input
                        name='name'
                        value={form.name}
                        onChange={handleInput}
                        isValid={form.nameIsValid}
                    />
                    <NotValidBox isValid={form.nameIsValid} > {form.nameErrorMessage} </NotValidBox>
                </Label>

                <Label isValid={form.photoIsValid} >
                    Endereço da foto
                    <Input
                        name='photo'
                        value={form.photo}
                        onChange={handleInput}
                        isValid={form.photoIsValid}
                    />
                    <NotValidBox isValid={form.photoIsValid} > {form.photoErrorMessage} </NotValidBox>
                </Label>

                <Label isValid={form.priceIsValid} >
                    Preço
                    <Input
                        name='price'
                        value={form.price}
                        onChange={handleInput}
                        isValid={form.priceIsValid}
                    />
                    <NotValidBox isValid={form.priceIsValid} > {form.priceErrorMessage} </NotValidBox>
                </Label>

                <Button onClick={handleSubmit} > Cadastrar </Button>
            </Form>
        </PageContainer>
    )
}
