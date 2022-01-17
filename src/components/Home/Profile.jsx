import React from 'react'
import Typical from 'react-typical'

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
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Full Stack Developer",
                                    1200,
                                    "Computer Science Enthusiast",
                                    1200,
                                    "Mobile Photographer",
                                    1200,
                                ]}
                                />
                            </h1>
                            <span className='profile-tagline'>
                                Never dreamt to be a Full Stack Developer, but this moment makes me feel like a Pro !
                            </span>
                        </span>
                    </div>
                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me
                        {" "}
                    </button>
                    <a href="resume.pdf" download='Sourav Shaw Resume.pdf'>
                        <button className='btn highlighted-btn'>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile;