import styled from 'styled-components'

export const LineContainer = styled.div`
    /* border: thin solid rgb(200,200,200); */
    border: thin solid rgb(240,240,240);
    /* border-top: none; */
    display: grid;
    grid-template-columns: minmax(auto, 30px) minmax(auto, 90px) 1fr repeat(3, minmax(auto, 80px));

    border-radius: 3px;
    margin-top: 10px;

    display: ${props => !props.visible && 'none'};
`

export const LineColumn = styled.div`
    /* background-color: lightgreen; */
    padding: 10px 10px;
    border-right: thin solid rgb(230,230,230);
    text-align: center;
    
    display: grid;
    place-items: center;

    :nth-child(1) {border-right: none; font-size: 12px; color: rgb(100,100,100)};
    :nth-child(2) {border-right: none; padding: 5px;};
    :nth-child(3) {justify-content: start};
    :nth-child(4) {font-size: 14px};
    :last-child {border-right: none; font-size: 14px};

`

export const LineImg = styled.img`
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgb(245,245,245);
    display: flex;
    align-items: center;
`

export const QttInput = styled.input`
    width: 100%;
    height: 100%;
    border: thin solid rgb(220,220,220);
    border-radius: 3px;
    padding: 5px;
    font-size: 16px;
    font-family: sans-serif;
`
