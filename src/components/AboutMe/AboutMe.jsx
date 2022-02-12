import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animation from '../../utilities/Animation'

function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
            return;
        Animation.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "Full Stack Web Developer with a vast set of knowledge in many different Frontend & Backend Languages, Frameworks, Databases as well as Cloud Services. Other than, I'm passionate and ambitious about my work and love to be on a team where one questions every possibilities. Always eager to learn new technologies, ready to grasp different kind of methodologies and also willing to take part in innovation which can improve the existing skills.",
        highlights: {
            bullets: [
                "Full Stack Web Development",
                "Good with Frontend as well as Backend",
                "Known Programming Languages like Java, Python, C#, React JS, Node JS and Javascript",
                "Basic Knowledge of AWS Services",
                "Having better understanding of REST APIs",
                "Manage SQL & NoSQL Databases",
            ],
            heading: "Here are a Few Highlights : "
        }
    }

    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => {
                return <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            })
        )
    }

    return (
        <div className='about-me-body screen-body' id={props.id || ""}>
            <div className='about-me-innerbody'></div>
           <ScreenHeading title={'ABOUT ME'} subHeading={'Why Choose Me ?'}/>
           <div className='about-me-card'>
               <div className='about-me-profile'></div>
               <div className='about-me-details'>
                   <span className='about-me-description'>
                       {SCREEN_CONSTANTS.description}
                   </span>
                   <div className='about-me-highlights'>
                       <div className='highlight-heading'>
                           <span>
                               {SCREEN_CONSTANTS.highlights.heading}
                           </span>
                       </div>
                       {renderHighlight()}
                   </div>
                   <div className='about-me-options'>
                       <button className='btn primary-btn'>Hire Me</button>
                       <a href="resume.pdf" download='Sourav Shaw Resume.pdf'>
                            <button className='btn highlighted-btn'>Resume</button>
                        </a>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default AboutMe
