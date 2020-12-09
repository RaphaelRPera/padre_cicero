import styled from 'styled-components'


export const MainContainer = styled.header`
    background-color: white;
    display: grid;
    grid-template-columns: minmax(15%, 400px) auto;
    justify-content: start;

    display: flex;
    justify-content: flex-start;

    border-bottom: 1px solid rgba(220,220,220, 0.50);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    box-shadow: 0 0px 6px rgba(230,230,230,0.95);
`


export const Logo = styled.div`
    background-color: #19A871;
    color: whitesmoke;
    text-align: left;
    font-size: 26px;
    font-weight: bold;
    padding: 20px;
    min-width: 200px;
    margin-right: 40px;

    cursor: pointer;
`

export const LogoSub = styled.div`
    padding: 0;
    font-size: 14px;
    font-weight: normal;
`




export const MenuContainer = styled.div`
    /* background-color: #00A868;
    background-color: #01A868; */
    /* background-color: lightgoldenrodyellow; */
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    max-width: 600px;

    display: flex;
    justify-content: space-evenly;
`



export const MenuButton = styled.div`
    /* background-color: lightcoral; */
    /* border: thin solid black;  */
    background-color: ${props => props.active ? '#80EDC1' : 'none'};
    border-radius: 25px;

    margin-right: 10px;

    padding: 8px 5px;
    display: grid;
    place-items: center;
    font-size: 18px;
    font-weight: bold;
    min-width: 180px;
    cursor: pointer;
    transition: 0.2s;
    :hover{background-color: #C0F7E1;};
    :active{background-color: #80EDC1;};
`
