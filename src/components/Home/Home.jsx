import React from 'react'
import './Home.css'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'

function Home() {
    return (
        <div className='home-body'>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default Home
