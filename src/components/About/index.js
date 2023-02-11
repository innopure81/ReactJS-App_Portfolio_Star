import './index.scss';
import {useEffect,useState} from 'react';
import {faAngular,faCss3,faGitAlt,faHtml5,faJsSquare,faReact} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Star from '../../assets/images/star_white.png';

const About = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        setTimeout(()=>setLetterClass('text-animate-hover'), 4000)
    },[])

    return (
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ']} idx={15} />
                        <img src={Star} alt="JS Web Deverloper" />
                        <AnimatedLetters letterClass={letterClass} strArray={[' ','m','e']} idx={23} />
                    </h1>
                    <p>I'm a hard-working junior web developer looking for a role in an IT company with an opportunity to work with the latest technologies on diverse projects. </p>
                    <p align="LEFT">I'm naturally curious and am an enthusiastic learner who loves spicy food and always care for being helpful for good people.</p>
                </div>
                
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="front">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="back">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="left">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="top">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="bottom">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="line-scale" />
        </>
    )


};

export default About;
