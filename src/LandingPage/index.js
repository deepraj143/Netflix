import React from 'react'
import HeroSection from "../HeroSection"
import Movie from '../Movielist'
import Header from "../Header"
const index = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <Movie/>
        </div>
    )
}

export default index
