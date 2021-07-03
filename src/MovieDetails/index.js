import React,{useRef} from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import styled from 'styled-components'
import {AiFillStar,} from 'react-icons/ai'
import {FiPlusSquare} from 'react-icons/fi'
import {FaRegMinusSquare} from 'react-icons/fa'
import Date from '../dates.json'
import Badges  from '../Component/Badges'
import Slots from '../slots.json'
import { useContext } from 'react'
import {stateContext}  from  '../ContextApi/index'
import { useHistory } from 'react-router-dom'

const Title=styled.div`
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 1.7rem;
        margin-top:20px;
        padding: 0px 20px;
    }
`
const ImgConatiner=styled.div`
    @media (max-width: 500px) {
       width: 180px;
       height: 250px;
       margin:0px auto;
       img{
           width: inherit;
           height: inherit;
       }
    }
`
const Rating=styled.div`
    color: #fff;
    margin: 10px 0px;
    svg{
        margin-right: 10px;
    }
    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`
const Description=styled.div`
    color: #fff;
    line-height: 35px;
    margin: 20px 0px;
    @media (max-width: 500px) {
        padding: 0px 20px;
        font-size: 0.7rem;
    }
`
const DateTitle=styled.div`
    color:#fff;
    font-size: 1.1rem;
    margin: 10px 0px;
    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`
const SlotConatiner=styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`
const SloteTitle=styled.div`
    color:#fff;
    font-size: 1.1rem;
    margin: 10px 0px;
    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`
const BookTicketTitle=styled.div`
    color:#fff;
    font-size: 1.1rem;
    margin: 15px 0px;
    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`
const BookTicket=styled.div`
    display: flex;
    padding-left: 20px;
    svg{
        color: #fff;
        font-size: 2rem;
    }
    input{
        outline: none;
        border: none;
        border-bottom: 1px solid #fff;
        background-color: transparent;
        width: 50px;
        color:#fff;
        padding-left: 20px;
        
    }
    @media (max-width: 500px) {
        padding: 0px 20px;
        svg{
        color: #fff;
        font-size: 1.5rem;
    }
    }
`

const MovieDetails = (props) => {

    const{ShowSlot,setShowSlot,see,setsee,ShowBookig,setShowBookig,Ticketcount,SetTicketcount,setMovie,settime}=useContext(stateContext)
    const takevalue=useRef();
    const history=useHistory();
    setMovie(props)
    const FilterSlots=(el)=>{
        setShowSlot(true);
        setsee(el.date)
        
    }
    const Ticket=(el)=>{
        setShowBookig(true)
        settime(el)
    }

    const onchange=()=>{
        let data=takevalue.current.value;
        if(data<0){
            SetTicketcount(0)
        }else{
            SetTicketcount(data)
        }
    }
    const confrimticket=()=>{
        history.push("/confirm")
    }
   
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={4} >
                        <ImgConatiner>
                            <img src={props.img_url} alt="Movie"/>
                        </ImgConatiner>
                    </Col>
                    <Col md={8}>
                        <Title>{props.title}</Title>
                        <Rating><AiFillStar size={20} color={"yellow"}/>{props.rating}</Rating>
                        <Description>{props.desc}</Description>
                        <DateTitle>Date:-</DateTitle>
                        <SlotConatiner>
                            {Date.map((el,index)=>{
                            return <Badges key={index} onClick={()=>FilterSlots(el)}>
                                        <div>{el.day}</div>
                                        <div>{el.date}</div>
                                    </Badges> 
                            })}
                        </SlotConatiner>
                        {ShowSlot && 
                        <>
                            <SloteTitle>Slots:-</SloteTitle>
                            <SlotConatiner>  
                            {Object.keys(Slots).map((el)=>{
                                if(el===see){
                                   return Object.values(Slots[el]).map((el,index)=>{
                                        return <Badges key={index} onClick={()=>Ticket(el)}>
                                                    <div>{el}</div>
                                                </Badges> 
                                    })
                                }
                                return null
                            })}
                            </SlotConatiner>
                        </>
                        }
                        {ShowBookig &&
                        <>
                            <BookTicketTitle>Book Tickets:-</BookTicketTitle>
                            <BookTicket>
                                <FiPlusSquare onClick={()=>SetTicketcount(Ticketcount+1)}/>
                                <input type="text"  ref={takevalue} value={Ticketcount} onChange={onchange}/>
                                <FaRegMinusSquare onClick={()=>{ Ticketcount<=0? SetTicketcount(0):SetTicketcount(Ticketcount-1) }}/>
                            </BookTicket>
                            
                        </>
                        }
                        { ShowBookig && ShowSlot  ?  <button type="button" className="btn btn-danger mt-4  ml-4" onClick={confrimticket}>Confirm</button>:null}


                        
                    </Col>
                </Row>
            </Container>
           
        </>
    )
}

export default MovieDetails
