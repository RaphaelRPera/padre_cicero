import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToProductsAdd, goToSalesAdd, goToSalesAll } from '../../router/Coordinator'
import { MainContainer, Logo, LogoSub, MenuContainer, MenuButton } from './style'


export const AppBar = () => {
    const history = useHistory()
    const [active, setActive] = useState('')

    const handleClick = (id) => {
        switch (id) {
            case 'prod': goToProductsAdd(history); setActive('prod'); break;
            case 'addSale': goToSalesAdd(history); setActive('addSale'); break;
            case 'sale': goToSalesAll(history); setActive('sale'); break;
            case 'logo': goToSalesAll(history); setActive('logo'); break;
            default: setActive(''); break;
        }
    }

    return (
        <MainContainer>
            <Logo /*onClick={() => goToSalesAll(history)}*/ onClick={() => handleClick('logo')} >
                Padre Cícero
                <LogoSub>CONTROLE DE VENDAS</LogoSub>
            </Logo>
            <MenuContainer>
                <MenuButton
                    // onClick={() => goToProductsAdd(history)}
                    onClick={() => handleClick('prod')}
                    active={active === 'prod' ? true : false}
                >
                    cadastrar produto
                </MenuButton>

                <MenuButton
                    // onClick={() => goToSalesAdd(history)}
                    onClick={() => handleClick('addSale')}
                    active={active === 'addSale' ? true : false}
                >
                    realizar venda
                </MenuButton>

                <MenuButton
                    // onClick={() => goToSalesAll(history)}
                    onClick={() => handleClick('sale')}
                    active={active === 'sale' ? true : false}
                >
                    vendas
                </MenuButton>
            </MenuContainer>
        </MainContainer>
    )
}
