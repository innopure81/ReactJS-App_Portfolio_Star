import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect,useState, useRef} from 'react';
import Star from '../../assets/images/star_white.png';
import emailjs from '@emailjs/browser';
import Map from './Map/map.js'

const Contact = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(()=>{
        setTimeout(()=>{setLetterClass('text-animate-hover')}, 4500)
    },[]);

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_xbdh3cz', 'template_5k6r3tl', form.current, 'SUzbsgYNRevwMpBY-')
        .then(
            ()=>{alert('Message sent!'); window.location.reload(false); }, ()=>{alert('Failed. Please retry.')}
        )
    }
    
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t','  ']} letterClass={letterClass} idx={15} />
                        <img src={Star} alt="JS Web Deverloper" />
                        <AnimatedLetters strArray={['  ','m','e']} letterClass={letterClass} idx={24} />
                    </h1>
                    <p>I am interested in full-time/part-time/freelance opportunities. <br />Please feel free to contact me using the form below.</p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half"> <input placeholder="Name" type="text" name="name" required /> </li>
                                <li className="half"> <input type="email" placeholder="Email" name="email" required /> </li>
                                <li> <input type="text" placeholder="Subject" name="subject" required /> </li>
                                <li> <textarea placeholder="Message" name="message" required /> </li>
                                <li> <input type="submit" className="flat-button" value="SEND" /> </li>
                            </ul>
                        </form>
                    </div>
                </div>
                
                <div className="map-wrap">
                    <Map />
                </div>

            </div>
            <Loader type="line-scale" />
        </>
    )

};

export default Contact;
