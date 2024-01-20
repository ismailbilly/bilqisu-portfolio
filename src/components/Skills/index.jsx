import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import circularSkill from '../../assets/images/circleImg.svg'
import Shapes from '../Shapes'
import TagCloud from 'TagCloud'
import './index.scss'
const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1000)
   }, [])
    // useEffect(() => {
    //     return () => {
//             const container = '.tagcloud';
// const texts = [
//          "HTML",
//         "CSS",
//         "SASS",
//         "JavaScript",
//         "React",
//         "Python",
//         "Next",
//         "NodeJS",
//         "Babel",
//         "Azure",
//         "ES6",
//         "GIT",
//         "GITHUB",
// ];
//             const options = {
//      radius: 300,
//         maxSpeed: "normal",
//         initSpeed: "normal",
//         keep: true,
//             };
//     {TagCloud(container, texts, options)}
//         }
       
//     }, [])



  return (
    <div className='container skills-page'>
      
          <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l','s' , ' e ', 't']}
              idx={15}
            />
          </h1>
           <div className="text-left">
              <p>"I am a versatile Fullstack Developer with a passion for creating exceptional web experiences.
               Proficient in HTML, CSS, JavaScript, React, Node.js, and database integration</p>
              <p>I specialize in building dynamic and responsive applications that deliver seamless user interactions.
              With a strong focus on clean code and optimal performance, I excel in both frontend and backend development.</p>
              <p>My portfolio showcases a diverse range of projects that demonstrate my ability to translate ideas into fully functional,
              user-centric web solutions. I am dedicated to continuous learning and staying up-to-date with the latest technologies to
              craft innovative and efficient web applications." </p>
          </div>
         
        </div>
          <div className="text-sphere">
        <img src={circularSkill} />
           {/* <span className="tagcloud"></span> */}
          </div>
        <Shapes/>
    </div>
  )
}

export default Skills