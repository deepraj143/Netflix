import React,{useState} from 'react'
import styled from 'styled-components'
import { Container,Row,Col } from 'react-bootstrap'
import MovieType from '../movies.json'
import {Link} from 'react-router-dom'

const MovieTemplate=styled.div`
    width: 183px;
    height:250px;
    margin: 0px 20px;
    img{
       width: inherit;
       height: inherit;
       border-radius: 4px;
   }
   @media (max-width: 400px) {
        width: 135px;
        height:200px;
        margin: 0px 20px;
    }
`

const MovieCatgories=styled.div`
    font-size: 2rem;
    color:#fff;
    font-weight:600;
    width: 80%;
    padding:20px 0px;
    margin: 0 auto;
    @media (max-width: 400px) {
        font-size: 1.5rem;
    }

`
const ListOfmovie=styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin: 0 auto;
    width: 80%;
`


const Movie = () => {

    const [Type] = useState(MovieType)
    console.log(Type)
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12}>
                    <MovieCatgories>Latest movies</MovieCatgories>
                        <ListOfmovie>
                        {
                           Object.values(Type).map((el,index) => {
                                if(el.category==="Latest movies") {
                                   return <>
                                          <Link to={"/movie/"+el.id} >
                                                <MovieTemplate key={index}>
                                                    <img src={el.img_url} alt="movie"/>
                                                </MovieTemplate>
                                          </Link>
                                          </>
                                }
                                return  null
                            })     
                        }
                        </ListOfmovie>
                    </Col>
                    <Col sm={12}>
                    <MovieCatgories>Recommended for you</MovieCatgories>
                        <ListOfmovie>
                        {
                           Object.values(Type).map((el,index) => {
                                if(el.category==="Latest movies") {
                                   return <>
                                   <Link to={"/movie/"+el.id}>
                                         <MovieTemplate key={index}>
                                             <img src={el.img_url} alt="movie"/>
                                         </MovieTemplate>
                                   </Link>
                                   </>
                                }
                                return  null
                            })     
                        }
                        </ListOfmovie>
                    </Col>
                    <Col sm={12}>
                    <MovieCatgories>Last Movie For You</MovieCatgories>
                        <ListOfmovie>
                        {
                           Object.values(Type).map((el,index) => {
                                if(el.category==="Latest movies") {
                                   return <>
                                   <Link to={"/movie/"+el.id}>
                                         <MovieTemplate key={index}>
                                             <img src={el.img_url} alt="movie"/>
                                         </MovieTemplate>
                                   </Link>
                                   </>
                                }
                                return null
                            })     
                        }
                        </ListOfmovie>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Movie
