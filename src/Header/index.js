import React,{useState} from 'react'
import styled from "styled-components/macro";
import {BsSearch} from 'react-icons/bs'

const Header=styled.div`
    width: 100%;
    height: 80px;
    padding: 2px 100px;
    background-color:#010d1b;
    position: fixed;
    z-index: 22;
    @media (max-width: 500px) {
        padding: 2px 20px;
    }
`
const Title=styled.div`
    color: #e50914;
    font-size: 2rem;
    font-weight: 900;
    display: inline-block;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    margin-right: auto;
    width: 95%;
    margin-top: 20px;
    @media (max-width: 500px) {
        width: 82%;
    }

`
const SearchBar=styled.div`
    color: #fff;
    display: inline-block;
    margin-left: auto;
    width: 50px;
    font-size: 2rem;
    height: 50px;
    margin-top: 20px;
    text-align: center;

    input{
        width: 20%;
        position: absolute;
        z-index: 33;
        top:25px;
        right:10px;
        background-color:transparent;
        border: none;
        border-bottom:1px solid #fff;
        outline: none;
        color: #fff;
        font-size: 1.5rem;
    }
    @media (max-width: 500px) {
        font-size: 1.5rem;
        margin-top: 0px;
        input{
        width: 40%;
        font-size: 1rem;
        margin-top:10px
    }
    }
`

const Header1 = () => {
    const [search, setsearch] = useState(false)
    return (
        <>
        
            <Header>
                <Title>NETFLIX</Title>
                <SearchBar>
                    {search===false ? 
                    <BsSearch onClick={()=>setsearch(true)}/>
                    :<input type="text" placeholder="Search" />
                    }
                </SearchBar>
            </Header>
        </>
    )
}

export default Header1
