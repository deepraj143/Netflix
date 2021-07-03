import React from 'react'
import styled from 'styled-components'

const DateBox=styled.div`
    color: #fff;
    height: 50px;
    width: 120px;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px 10px;
    outline: 1px solid #fff;
    outline-offset: -5px;
    font-size: 12px;
    margin: 10px;
    text-align: center;
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2px;
    }
    @media (max-width: 500px) {
        height: 40px;
        width: 100px;
        padding: 3px 8px;
        outline-offset: -4px;
        font-size: 10px;
        margin: 10px;
        text-align: center;
    }
   

`


const index = ({children,onClick}) => {
    return (
        <DateBox onClick={onClick}>
             {children} 
        </DateBox>
    )
}

export default index
