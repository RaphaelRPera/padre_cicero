import styled from 'styled-components'

export const LineContainer = styled.div`
    display: grid;
    justify-content: start;
    /* align-items: center; */
    align-content: center;
    /* grid-template-columns: auto auto 2fr 1fr 1fr auto auto auto; */
    grid-template-columns: auto minmax(60px, 110px) 2fr 1fr 1fr minmax(30px, 7%) minmax(30px, 7%) minmax(30px, 7%);
    column-gap: 10px;

    max-height: 150px;

    margin-bottom: 10px;
    border: 1px solid rgb(230,230,230);
    border-radius: 5px;
    box-shadow: 0 1px 2px rgb(240,240,240);
    padding: 5px 15px 5px 10px;
`

export const LineIndex = styled.div`
    /* border: 1px solid rgb(245,245,245); */
    padding: 0 3px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: rgb(150,150,150);
    font-size: 12px;
`

export const LineImgContainer = styled.div`
    display: flex;
    align-items: center;
`

export const LineImg = styled.img`
    /* height: 100%;
    min-height: 70px; */

    width: 100%;

    border-radius: 5px;
    border: 1px solid rgb(245,245,245);
    display: flex;
    align-items: center;
`

export const LineName = styled.div`
    border: 1px solid rgb(245,245,245);
    text-align: left;
    padding-left: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
`

export const LineDate = styled.div`
    border: 1px solid rgb(180,180,180);
    display: flex;
    align-items: center;
`

export const LineQtt = styled.div`
    border: 1px solid rgb(180,180,180);
    display: flex;
    align-items: center;
`


export const LineClient = styled.div`
    border: 1px solid rgb(180,180,180);
    display: flex;
    align-items: center;
`

export const LineValueUnit = styled.div`
    border: 1px solid rgb(180,180,180);
    display: flex;
    align-items: center;
`

export const LineValueTotal = styled.div`
    border: 1px solid rgb(180,180,180);
    display: flex;
    align-items: center;
`

export const LineColumn = styled.div`
    border: 1px solid rgb(245,245,245);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`
