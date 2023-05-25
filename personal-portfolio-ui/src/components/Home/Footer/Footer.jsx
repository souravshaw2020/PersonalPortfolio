import React from 'react'
import './Footer.css'
import bgshape from '../../../assets/Home/shape-bg.png'

function Footer() {
    return (
        <div className='footer-body'>
            <div className='footer-innerbody'>
                <img
                 src={bgshape}
                  alt="Curve" 
                />
            </div>
        </div>
    )
}

export default Footer
