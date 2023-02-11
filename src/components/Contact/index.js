import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect,useState, useRef} from 'react';
import Star from '../../assets/images/star_white.png';
import emailjs from '@emailjs/browser';
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';

const Contact = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(()=>{
        setTimeout(()=>{setLetterClass('text-animate-hover')}, 3000)
    },[]);

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
        .then(
            ()=>{alert('Message sent!'); window.location.reload(false); }, ()=>{alert('Failed. Please retry.')})
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t','  ']} letterClass={letterClass} idx={15} />
                        <img src={Star} alt="JS Web Deverloper" />
                        <AnimatedLetters strArray={['  ','m','e']} letterClass={letterClass} idx={27} />
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
                
                <div className="info-map">
                    Ha Jeong<br />Michigan, U.S.A. <br />
                    <span>hayeong.j@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer zoom={13} center={[44.96366, 19.61045]} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>My office is here.</Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>
            <Loader type="line-scale" />
        </>
    )

};

export default Contact;
