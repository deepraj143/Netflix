import React,{useContext} from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import styled from 'styled-components'
import {stateContext}  from  '../ContextApi/index'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const BookingContainer=styled.div`
    width: 70%;
    border: 1px solid #fff;
    border-radius:6px;
    padding: 10px;
    @media (max-width: 500px) {
        width: 90%;
    }

`
const BookingHeader=styled.div`
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: 1.7rem;
    padding-left: 25px;
    margin:10px auto;
    @media (max-width: 500px) {
        font-size: 1.3rem;
    }
`
const MovieImg=styled.div`
    width:100%;
    display: flex;
`
const MovieFirstDiv=styled.div`
    width: 183px;
    height:250px;
    margin: 0px 20px;
    img{
       width: inherit;
       height: inherit;
       border-radius: 4px;
   }
   @media (max-width: 500px) {
        width: 150px;
        height:210px;
        margin: 0px 20px;
    }
`
const MovieSecDiv=styled.div`
   color:#fff;
   margin:10px;
   @media (max-width: 500px) {
       font-size: 0.8rem;
       svg{
           margin-right: 10px;
       }
    }

`
const Date=styled.div`
   color: #fff;
   margin-left:20px;
   margin-top: 8px;
   @media (max-width: 500px) {
       font-size: 0.8rem;
    }
`
const Time=styled.div`
   color: #fff;
   margin-left:20px;
   margin-top: 8px;
   @media (max-width: 500px) {
       font-size: 0.8rem;
    }
`
const NoofTicket=styled.div`
   color: #fff;
   margin-left:20px;
   margin-top: 8px;
   @media (max-width: 500px) {
       font-size: 0.8rem;
    }
`
const Address=styled.div`
    color: #fff;
   margin-left:20px;
   margin-top: 8px;
   @media (max-width: 500px) {
       font-size: 0.8rem;
    }
`
const Contact=styled.div`
    color: #fff;
   margin-left:20px;
   margin-top: 8px;
   display: flex;
   align-items: center;
   p{
       display: inline-block;
       margin-right: 10px;
   }
   @media (max-width: 500px) {
       font-size: 0.8rem;
    }
`
const ButttonContainer=styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   button{
       margin:20px auto;
       padding:13px 33px
   }
   @media (max-width: 500px) {
    button{
       margin:20px auto;
       padding:10px 23px
   }
    }
`
const Confrim = () => {
    const{see,Ticketcount,Movie,time}=useContext(stateContext);
    return (
        <>
            <Container className="mt-5">
                <Row >
                    <Col sm={7} style={{margin:"auto"}}>
                       <BookingContainer>
                           <BookingHeader>Booking Confrim!</BookingHeader>
                           <MovieImg>
                               <MovieFirstDiv>
                                    <img src={Movie.img_url}  alt="movie"/>
                               </MovieFirstDiv>
                               <MovieSecDiv>
                                   {Movie.title}
                                   <div><AiFillStar size={20} color={"yellow"}/>{Movie.rating}</div>
                               </MovieSecDiv>
                           </MovieImg>
                           <Date>Date :- {see}</Date>
                           <Time>Timeming :- {time}</Time>
                           <NoofTicket>No.of tickets booked :- {Ticketcount}</NoofTicket>
                           <Address>Shop Number:-31 Deep Hights, Fanfista Road, Nilemore, Nalasopara West, Maharashtra 401203</Address>
                           <Contact>
                            <p>Contact:-</p>
                            <div>
                                <div>+91 8793999822</div>
                                <div>+91 8793999822</div>
                            </div>
                           </Contact>
                           <ButttonContainer>
                            <Link to="/"><button type="button" className="btn btn-danger " >Return</button></Link>
                           </ButttonContainer>
                           
                       </BookingContainer>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Confrim
