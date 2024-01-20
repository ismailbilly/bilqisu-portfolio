import './index.css'
import React from 'react'

const AnimatedLetters = ({letterClass, strArray, idx}) => {
  return (
      <span className='animated-container'>
          {strArray.map((char, id) => {
              return <span key={char + id} className={`${letterClass} _ ${id}`} style={{ animationDelay: `${id * 100}ms` }}>
                  {char}
              </span>
          })}
    </span>
    //  const letterArray = text.split('').map((letter, index) => ({
    //   letter,
    //   delay: index * 100, // Adjust the delay as needed
    // }));
  )
}

export default AnimatedLetters