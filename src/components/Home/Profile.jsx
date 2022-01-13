import React from 'react'

function Profile() {
    return (
        <div className='profile-body'>
            <div className='profile-innerbody'>
                <div className='profile-details'>
                    <div className='social-app'>
                        <a href="https://www.facebook.com/sourav.shaw.98622">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="https://www.instagram.com/souravshaw2020/">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="https://github.com/souravshaw2020">
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sourav-shaw-a714bb150/">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Sourav Shaw</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;