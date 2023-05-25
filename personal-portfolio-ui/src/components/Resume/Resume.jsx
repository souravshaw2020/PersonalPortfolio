import React, {useState, useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animation from '../../utilities/Animation'
import './Resume.css'

function Resume(props) {
    const [selectedBulletIndex, setSelectBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) 
            return;
        


        Animation.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span className='heading-main'> {
                            props.heading ? props.heading : ""
                        } </span>
                        {
                        props.fromDate && props.toDate ? (
                            <div className='heading-date'>
                                {
                                props.fromDate + " - " + props.toDate
                            } </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>
                <div className='resume-sub-heading'>
                        <span>{
                            props.subHeading ? props.subHeading : ''
                        }</span>
                    </div>
                    <div className='resume-heading-description'>
                        <span>{
                            props.description ? props.description : ''
                        }</span>
                    </div>
            </div>
        )
    };

    const resumeBullets = [
        {
            label: "Education",
            logoSrc: "education.svg"
        },
        {
            label: "Work History",
            logoSrc: "work-history.svg"
        },
        {
            label: "Programming Skills",
            logoSrc: "programming-skills.svg"
        },
        {
            label: "Projects",
            logoSrc: "projects.svg"
        }, {
            label: "Interests",
            logoSrc: "interests.svg"
        },
    ];

    const programmingSkillsDetails = [
        {
            skill: "Core Java",
            ratingPercentage: 85
        },
        {
            skill: "Python",
            ratingPercentage: 80
        },
        {
            skill: "HTML",
            ratingPercentage: 75
        },
        {
            skill: "CSS",
            ratingPercentage: 72
        }, {
            skill: "JavaScript",
            ratingPercentage: 75
        }, {
            skill: "Node JS",
            ratingPercentage: 75
        }, {
            skill: "Express JS",
            ratingPercentage: 68
        }, {
            skill: "Mongo Db",
            ratingPercentage: 60
        }, {
            skill: "Oracle Db",
            ratingPercentage: 65
        }, {
            skill: "PostgreSql",
            ratingPercentage: 75
        }, {
            skill: "React JS",
            ratingPercentage: 75
        }, {
            skill: "C#",
            ratingPercentage: 60
        }, {
            skill: "AWS",
            ratingPercentage: 70
        }, {
            skill: "Azure",
            ratingPercentage: 60
        },
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {
                fromDate: "December, 2021",
                toDate: "February, 2022"
            },
            description: "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used : React JS, Bootstrap"
        },
        {
            title: "Movie Popularity Analysis",
            duration: {
                fromDate: "September, 2020",
                toDate: "December, 2020"
            },
            description: "A website of Movie Shows Popularity Analysis is designed which depicts the popularity of the shows and trending shows based on genre of the show. This website includes the admin and the vistior page. Admin can add the required field, predict the model and scrape the reviews whereas the visitor can see the visuals of the popularity,i.e., graph; genre based shows, top 10 shows based on genre, and trending shows.",
            subHeading: "Technologies Used : Django, HTML5, CSS3, Postgresql"
        },
        {
            title: "A System for Monitoring the Loss of Attention in Automotive Drivers",
            duration: {
                fromDate: "February, 2020",
                toDate: "May, 2020"
            },
            description: "This project is done as an R&D Project based on Behavioral and Vehicle based measures. The aim is to research on detection techniques through which monitoring of loss of attention of drivers would be easier. To obtain the objective, face, blink, yawn, head rotation detection as well as vehicle detection.",
            subHeading: "Technologies Used : OpenCV, CNN, YOLO"
        },
        {
            title: "Visitor Gatepass System",
            duration: {
                fromDate: "February, 2020",
                toDate: "May, 2020"
            },
            description: "The aim of this project is to develop a Visitor Gate Pass System for NIIT University to simplify and follow a systematic approach for the visitor registration process by using automated tools and softwares  also accounting the necessary verification procedure.​",
            subHeading: "Technologies Used : HTML, CSS, PHP, PostgreSql"
        }, {
            title: "AmyBot - A Chatbot for Career Counselling",
            duration: {
                fromDate: "October, 2019",
                toDate: "August, 2020"
            },
            description: "Developed a Career Counselling Chatbot named as AmyBot. It is user-friendly as focus has been made on the conversation and visualisation. Dialogflow had been used which would easily conduct the flow of conversation. This Conversational Chatbot had been specifically designed for the Admizzionz Campuz.",
            subHeading: "Technologies Used : Node JS, HTML, CSS, Javascript, Dialog Flow, GCP, Firebase"
        }, {
            title: "Simple LR or SLR Parser",
            duration: {
                fromDate: "October, 2019",
                toDate: "November, 2019"
            },
            description: "This is a compiler which has been designed to parse the grammar.​ The main objective is to generate parse table using simple parser algorithm which makes it quite efficient.",
            subHeading: "Technologies Used : Python"
        }, {
            title: "eVoting System",
            duration: {
                fromDate: "January, 2018",
                toDate: "April, 2018"
            },
            description: "The aim of this project is to develop an online voting system for universities/colleges to build such application which can cast a vote to elect Captain and Vice-Captain of different houses.",
            subHeading: "Technologies Used : Python - Tkinter, Java - Javafx, SQLite3"
        }, {
            title: "How Nanotechnology can be used in Remote Health Monitoring ?",
            duration: {
                fromDate: "October, 2017",
                toDate: "December, 2017"
            },
            description: "Research is done on how Nanotechnology can be used in Remote Health Monitoring in which focus is done only on Glucose Health Monitoring, i.e., a Gluco Tatoo which detects diabetes of patients painlessly based on nanosensors. My role in this project is as a Digital Publisher.",
            subHeading: "Research Paper Written on it"
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-body' key="education">
            <ResumeHeading heading={"NIIT University, Neemrana, Rajasthan, India"}
                subHeading={"BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING"}
                fromDate={"July, 2017"}
                toDate={"January, 2022"}/>
            <ResumeHeading heading={"Douglas Memorial Higher Secondary School, Barrackpore, Kolkata, India"}
                subHeading={"HIGHER SECONDARY IN SCIENCE"}
                fromDate={"March, 2016"}
                toDate={"March, 2017"}/>
            <ResumeHeading heading={"Douglas Memorial Higher Secondary School, Barrackpore, Kolkata, India"}
                subHeading={"SECONDARY"}
                fromDate={"March, 2014"}
                toDate={"March, 2015"}/>
        </div>,
        <div className='resume-screen-body work-history-body' key="work-experience">
            <ResumeHeading heading={"DataGrokr Analytics Private Limited, Bangalore, India"}
                subHeading={"SOFTWARE ENGINEER"}
                fromDate={"January 19, 2022"}
                toDate={"Present"}/>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently Working in a project called Oktamate
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    - This is a project where we are creating a subsystem with some smaller chunks while using the services of AWS
                </span>
                <span className='resume-description-text'>
                    - A Proof of Concepts has been worked on by the team before the actual implementation of project
                </span>
            </div>
            <ResumeHeading heading={"DataGrokr Analytics Private Limited, Bangalore, India"}
                subHeading={"FULL STACK ENGINEER INTERN"}
                fromDate={"July 19, 2021"}
                toDate={"January 18, 2022"}/>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently Working as a Full Stack Intern
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                    - Got an opportunity to learn and work on various tech stacks like C#, .NET, AWS Services and many more
                </span>
                <span className='resume-description-text'>
                    - Had done various assignment along with learning of different technologies like Git, Python, AWS, SQL and C#
                </span>
                <span className='resume-description-text'>
                    - Got an opportunity to work on real-life projects like Web Chat Application and Advanced Search Filter
                </span>
            </div>
        </div>,
        <div className='resume-screen-body programming-skills-body' key='programming-skills'>
            {
            programmingSkillsDetails.map((skill, index) => (
                <div className='skill-parent'
                    key={index}>
                    <div className='heading-bullet'></div>
                    <span>{
                        skill.skill
                    }</span>
                    <div className='skill-percentage'>
                        <div style={
                                {
                                    width: skill.ratingPercentage + '%'
                                }
                            }
                            className='active-percentage-bar'></div>
                    </div>
                </div>
            ))
        } </div>,
        <div className='resume-screen-body projects-body' key='projects'>
            {
            projectDetails.map((projectDetails, index) => (
                <ResumeHeading key={index}
                    heading={
                        projectDetails.title
                    }
                    subHeading={
                        projectDetails.subHeading
                    }
                    description={
                        projectDetails.description
                    }
                    fromDate={
                        projectDetails.duration.fromDate
                    }
                    toDate={
                        projectDetails.duration.toDate
                    }/>
            ))
        } </div>,
        <div className='resume-screen-body' key='interests'>
            <ResumeHeading heading="Music" description="Listening to soothing music makes my mind relax and releases stress"/><ResumeHeading heading="Billiards" description="Love to pot the balls inside the pockets"/><ResumeHeading heading="Mobile Photography" description="Clicking makes me feel warmth and loves to take a visuals of nature which depicts its beauty"/>
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {
                transform: "translateY(" + index * offsetHeight * -1 + "px)"
            }
        }
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick={
                    () => handleCarousal(index)
                }
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}>
                <img className='bullet-logo'
                    src={
                        require(`../../assets/Resume/${
                            bullet.logoSrc
                        }`)
                    }
                    alt="Loading.."/>
                <span className='bullet-label'>
                    {
                    bullet.label
                }</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return (
            <div style={
                    carousalOffSetStyle.style
                }
                className='resume-details-carousal'>
                {
                resumeDetails.map((resumeDetail => resumeDetail))
            } </div>
        )
    }

    return (
        <div className='resume-body screen-body'
            id={
                props.id || ""
        }>
            <div className='resume-content'>
                <ScreenHeading title={'RESUME'}
                    subHeading={'My Formal Bio Details'}/>
            </div>
            <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-body'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>
                                {
                                getBullets()
                            }</div>
                        </div> 
                    </div>
                    <div className='resume-bullet-details'>
                            {
                            getResumeScreen()
                        }
                    </div>
                </div>
        </div>
    )
}

export default Resume
