import React from 'react'
import styles from '../../styles/Topbar.module.css'
import { motion, useScroll } from "framer-motion"




const TopbarScroll = () => {

    function greet() {
        console.log('Hey there clicker!');

        const element = document.getElementById("box2");

        element.scrollIntoView({behavior: "smooth"});

    }
    
  return (
    <div id='navbar' className={styles.topbar_container}>
        <div className={styles.bottom_topbar}>
          <p onClick={greet} className={styles.home_text}>HOME</p>
          <p>ABOUT</p>
          <p>PORTFOLIO</p>
          
      </div>
      <div className={styles.under_bottom_topbar}>

      </div>
    </div>
  )
}

export default TopbarScroll