import styled from 'styled-components'


export const PageContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: sans-serif;
    padding: 120px 0;
`

export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    padding-top: 0;
`

export const SalesContainer = styled.div`
    /* border: thin solid rgb(220,220,220);
    border-top: none;
    border-radius: 0 0 5px 5px; */
    width: 87%;
    padding: 15px;
`

export const TotalContainer = styled.div`
    /* background-color: lightblue; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const TotalBar = styled.div`
    background-color: whitesmoke;
    border: thin solid whitesmoke;
    border-left: thin solid rgb(220,220,220);
    border-right: thin solid rgb(220,220,220);
    display: grid;
    align-items: center;
    /* grid-template-columns: 1fr repeat(2, minmax(auto, 80px)); */
    grid-template-columns: minmax(100px, 200px) repeat(2, minmax(auto, 90px));
    min-width: 300px;
    max-width: 500px;
    margin-right: 10px;
    padding: 3px 0;

    box-shadow: 0 1px 3px rgb(220,220,220);
`

export const TotalColumn = styled.div`
    height: 100%;
    padding: 10px 10px;
    border-right: thin solid rgb(220,220,220);
    :nth-child(3) {border-right: none;};
`

export const AddSaleButton = styled.div`
    background-color: #19A871;
    color: white;
    display: grid;
    place-items: center;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
    :hover{background-color: #2AC98C;};
    font-weight: bold;
`

export const SalesHeader = styled.div`
    background-color: whitesmoke;
    border: thin solid whitesmoke;
    border-left: thin solid rgb(220,220,220);
    border-right: thin solid rgb(220,220,220);
    display: grid;
    /* grid-template-columns: minmax(auto, 30px) minmax(auto, 60px) 1fr repeat(3, minmax(auto, 80px)); */
    /* grid-template-columns: 1fr repeat(3, minmax(auto, 80px)); */
    /* grid-template-columns: minmax(auto, 30px) minmax(auto, 90px) 1fr repeat(2, minmax(auto, 100px)) repeat(3, minmax(auto, 80px)); */
    grid-template-columns: 1fr repeat(2, minmax(auto, 100px)) repeat(3, minmax(auto, 80px));

    box-shadow: 0 1px 3px rgb(220,220,220);
`

export const HeaderColumn = styled.div`
    padding: 10px 10px;
    border-right: thin solid rgb(220,220,220);
    :last-child {border-right: none;};
`

