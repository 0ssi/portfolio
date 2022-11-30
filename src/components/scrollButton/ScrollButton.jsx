import React from 'react'
import styling from '../../styles/ScrollButton.module.css'

const ScrollButton = () => {

  function greet() {
    console.log('Hey there clicker!');
    const element = document.getElementById("box");

    element.scrollIntoView({behavior: "smooth"});
    

    
}

  return (
    <div onClick={ greet } className={styling.button_scroll}>
    View my work
    </div>
  )
}

export default ScrollButton