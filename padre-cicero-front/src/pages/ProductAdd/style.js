import styled from 'styled-components'


export const PageContainer = styled.main`
    /* background-color: lightblue; */
    display: grid;
    place-items: center;
    /* min-height: 100vh; */
    font-family: sans-serif;
    /* margin-top: 50px; */
    /* padding: 100px 0; */
    height: 100%;
`

export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 50px;
    padding-top: 0;
`

export const Form = styled.form`
    /* background-color: lightcyan; */
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 90%;
    min-width: 160px;
    max-width: 600px;
`

export const Label = styled.label`
    /* background-color: lightcoral; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    margin-bottom: 20px;
    color: ${props => props.isValid === false && "red"};
`

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 3px;
    border: thin solid rgb(200,200,200);
    font-family: sans-serif;
    border: ${props => props.isValid === false && "1px solid red"};
    border-radius: ${props => props.isValid === false && "3px"};
    padding: ${props => props.isValid === false && "11px 10px"};
    color: ${props => props.isValid === false && "red"};
    box-shadow: ${props => props.isValid === false && "0 0 2px red"};
`

export const NotValidBox = styled.span`
    display: ${props => props.isValid === false ? 'inline' : 'none'};
    color: red;
    font-size: 14px;
    padding: 0 5px;
`


export const Button = styled.div`
    padding: 10px 25px;
    /* background-color: #1e90ff; */
    background-color: #19A871;
    border-radius: 5px;
    color: white;
    align-self: flex-start;
    font-weight: bold;

    cursor: pointer;
    transition: 0.2s;
    :hover{background-color: #2AC98C;}
`
