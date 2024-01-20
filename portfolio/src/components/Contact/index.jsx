import './index.scss'
import {useState, useEffect, useRef, useLayoutEffect} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  CircleMarker} from 'react-leaflet'
import "leaflet/dist/leaflet.css";


const Contact= () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const formRef = useRef()
  const textbox = useRef(null);
  //const key = import.meta.env.VITE_EMAIL_JS_PUBLIC_SECRET
//Animated letters on hover
   useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1000)
   }, [])
 //This is for auto height textArea
  function adjustHeight() {
    textbox.current.style.height = "inherit";
    textbox.current.style.height = `${textbox.current.scrollHeight}px`;
  }

  useLayoutEffect(adjustHeight, []);

  function handleKeyDown(e) {
    adjustHeight();
  }
  //To send email
  function sendMail(e) {
    e.preventDefault()
     emailjs.sendForm('service_b3lfl59', 'template_kbyf5q8', formRef.current, "qGLJsSz1TrW-AhUNk")
       .then((result) => {
         alert('Message sent successfully')
         window.location.reload(false)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    //This is to clear te form when it is sent
    e.target.reset();
  }
   const svgMarker = {
    path:
      "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2
    // anchor: new google.maps.Point(15, 30),
  };
  return (
    <>
    <div className='container contact-page'>
      <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a','c' , 't', '  ', 'm', 'e']}
              idx={15}
            />
          </h1>
           <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={sendMail}>
              <div className="nameEmail">
                <input type="text" name='name' placeholder='Name' className='name-input' required/>
                
                    <input type="email" name='email' placeholder='Email' required/>
                  </div>
               
                    <input type="text" name='subject' placeholder='Subject' className='subject-input' required/>
                
              <textarea
                
                name="message"
                placeholder='Message'
                ref={textbox}
                onChange={handleKeyDown}
                required>
                
                </textarea>
                
                  <input type="submit" className='flat-button' value="SEND"/>
                
            </form>
          </div>
        </div>
       
        <div className="map-wrap">
        <MapContainer  style={{ width: "100%", height: "50vh" }}
        zoom={13}
        center={[6.605874,  3.349149]}
        scrollWheelZoom={false}
        fadeAnimation={true}
        markerZoomAnimation={true}
      >
            <TileLayer
            
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[6.605874,  3.349149]}
          color={"#000000"}
          fillColor={"#FDD876"}
          stroke={true}
          fillOpacity={true}
          weight={1}
          icon={svgMarker}
        /> 
      
      
            <Marker position={[6.605874,  3.349149]}>
              <Popup>Don't be a stranger  <br />  Say hello</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
    </>
  )
}



export default Contact