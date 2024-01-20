import { useState, useEffect} from "react";
import "./index.scss";
import { AiFillSetting } from 'react-icons/ai'
import { MdSimCardDownload } from 'react-icons/md'
import {NavLink,Link}from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
   
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faLinkedin,
    faGithub,
    faFacebook,
    
  } from '@fortawesome/free-brands-svg-icons'
import myLogo3 from '../../assets/images/mylogo3.png'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
        // Loading function to load data or
        // fake it using setTimeout;
        const loadData = async () => {
 
            // Wait for two second
            await new Promise((r) => setTimeout(r, 2000));
 
            // Toggle loading state
            setLoading((loading) => !loading);
        };
 
        loadData();
  }, [showNav])
  // function showLoader() {
  //   setShowNav(!showNav)
  // }
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={myLogo3} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-view' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          className="home-link"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#44444e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faUser} color="#44444e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skill-link"
          to="/skills"
          onClick={() => setShowNav(!showNav)}
        >
          <AiFillSetting color="#44444e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(!showNav)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#44444e" />
        </NavLink>
        <a
          href="resume.pdf"
          download="resume.pdf"
          className="resume-link"
          onClick={() => setShowNav(false)}
        >
          <MdSimCardDownload color="#44444e" />
        </a>
      </nav>

      <ul>
        <li>
          <a
            href="https://github.com/ismailbilly/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bilqisu-ismail-48192673"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://web.facebook.com/bilqisu.gwarzo"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="anchor-icon" />
          </a>
        </li>
      </ul>

      <div className="hamburger">
        <FontAwesomeIcon
          onClick={() => setShowNav(!showNav)}
          icon={faBars}
          color="#CCF381"
          size="2x"
          className="nav-btn nav-open"
        />
      </div>
    </div>
  )
}

export default Sidebar