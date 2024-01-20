import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import mylogo4 from '../../assets/images/mylogo5.png'
import Shapes from '../Shapes'
import Loader from 'react-loaders'
import { ThreeDLoader } from "react-awesome-loaders";
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(false)
const nameArray = ['B','i', 'l', 'q', 'i', 's', ' ', 'I','s', 'm', 'a', 'i', 'l']
  const jobArray = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p','e','r','.' ]
  // useEffect(() => {
    
  //   setTimeout(() => {
  //      setLoading(!loading);
  //    // setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])
  
     
  
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            {/* <span className="animate-letter">{' '}B</span> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              // idx={15}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Fullstack Developer / Artificial Intelligence Enthusiast</h2>
          <Link to="/contact" className="flat-btn">
            CONTACT ME
          </Link>
        </div>
        <div className="hero-right">
          <div className="img-container">
            <img
              src={mylogo4}
              alt="profile-picture"
              className="profile-picture"
            />
          </div>
        </div>
        <Shapes />
        
      </div>
      {/* <ThreeDLoader
        colorRing1={"#DC2626"}
        desktopSize={"100px"}
        mobileSize={"64px"}
      /> */}
    </>
  )
}

export default Home