import React, {useState} from 'react'
import Typical from 'react-typical'
import imgBack from '../../assets/ContactMe/images/mailz.jpeg'
import load1 from '../../assets/ContactMe/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animation from '../../utilities/Animation'
import './ContactMe.css'

function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) 
            return;
        

        Animation.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className='main-body'
            id={
                props.id || ''
        }>
            <ScreenHeading subHeading={"Lets Keep In Touch"}
                title={"CONTACT ME"}/>
            <div className='central-form'>
                <div className='col'>
                    <h2 className='title'>
                        <Typical loop={Infinity}
                            steps={
                                [
                                    "Get In Touch..",
                                    1200,
                                    "Get your Job Done..",
                                    1200,
                                    "Email Me..",
                                    1200
                                ]
                            }/>
                    </h2>
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
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send your Email Here!</h4>
                        <img src={imgBack}
                            alt="No Internet Connection"/>
                    </div>
                    <form>
                        <p>{banner}</p>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            onChange={handleName}
                            value={name}/>

                        <label htmlFor="email">Email</label>
                        <input type="email"
                            onChange={handleEmail}
                            value={email}/>

                        <label htmlFor="message">Message</label>
                        <textarea type="text"
                            onChange={handleMessage}
                            value={message}/>

                        <div className='send-btn'>
                            <button type='submit'>
                                Send<i className='fa fa-paper-plane'/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
