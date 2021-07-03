import React from 'react'
import styled from "styled-components/macro";
// import {Container,Row,Col} from 'react-bootstrap'
import Bg from './netflix.jpg'

const HeroSection=styled.div`
    width: 100%;
    height: 80vh;
    box-shadow: -11px -9px 186px 39px rgba(0,0,0,1) inset;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    object-fit: contain;
`

const index = () => {
    return (
        <>  
        {/* <Container fluid>
            <Row>
                <Col sm={8} md={12}> */}
                    <HeroSection/>
                {/* </Col>
            </Row>
        </Container> */}
           
        </>
    )
}

export default index
