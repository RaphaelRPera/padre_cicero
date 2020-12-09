import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { EasyPeasyApp } from './pages/EasyPeasyTests/ReactAPP'
import { Router } from './router/Router'
import { StoreProvider } from 'easy-peasy'
import store from './stores/index'
import { AppBar } from './components/AppBar/AppBar'
import styled from 'styled-components'


const PageContainer = styled.div`
    min-height: 100vh;
    /* background-color: lightgoldenrodyellow; */
    display: grid;

`


export const AppContainer = () => {
    return (
        <>
            <PageContainer>
                <StoreProvider store={store}>
                    <BrowserRouter>
                        <AppBar/>
                        <Router/>
                    </BrowserRouter>
                </StoreProvider>
            </PageContainer>
        </>
    )
}