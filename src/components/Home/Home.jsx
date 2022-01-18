import React from 'react'
import './Home.css'
import Header from '../Home/Header/Header'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'

function Home() {
    return (
        <div className='home-body'>
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default Home
