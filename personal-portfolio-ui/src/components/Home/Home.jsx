import React from 'react'
import './Home.css'
import Header from '../Home/Header/Header'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'

function Home(props) {
    return (
        <div className='home-body' id={props.id || ""}>
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default Home
