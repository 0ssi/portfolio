import Head from 'next/head'
import { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Background_comp from '../components/background_comp/Background_comp'
import ScrollButton from '../components/scrollButton/ScrollButton'
import TopbarScroll from '../components/topbarScroll/TopbarScroll'
import { delay, motion, useScroll, Variants } from "framer-motion"
import Menu from '../components/menu/Menu'

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <><div id='box2' className={styles.container}>

      <div className={styles.top_text_container}>
        <div className={styles.top_title_container}>
          <h1 className={styles.top_title_hello}>Hello, I'm </h1>
           <motion.h1   animate={{ color: '#E21A6D' }} transition={{ delay: 0.5 }} className={styles.top_title_name}> Oskar Fagernäs.</motion.h1>
        </div>

        <h1 className={styles.top_title_dev}>
        I'm a full-stack web developer.
        </h1>

      <ScrollButton />
        
      </div>

      <Background_comp />


    </div>


    <div id='box' className={styles.bottom_container}>

      <TopbarScroll />

      <div className={styles.bottom_page}>
        <div className={styles.about_container}>
        <motion.h1 viewport={{ once: true, amount: 0.8 }}  initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0}}  animate={{ }} transition={{ delay: 0.5, duration: 0.5 }} className={styles.about_text}>ABOUT</motion.h1>
        <motion.div viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0}}  animate={{ width: 100 }} transition={{ delay: 0.75, duration: 0.5  }} className={styles.about_text_under}></motion.div>
        </div>

      <div className={styles.image_container}>
      <div className={styles.image_left}>
      <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0}}  animate={{ }} transition={{ delay: 1, duration: 0.5 }} className={styles.right_info_slider}>

        </motion.div>
      </div>

<div className={styles.image_right}>


    <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0}}  animate={{ }} transition={{ delay: 1, duration: 0.5 }} className={styles.sliding_box_container}>

        <div className={styles.flex_bar}>
          <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ width: -100}} whileInView={{ width: 550}}  animate={{ }} transition={{ delay: 1.5, duration: 1 }} className={styles.bar_fill_1}>
            <div className={styles.flex_bar_text}>HTML</div>
          </motion.div>
        </div>

        <div className={styles.flex_bar}>
          
        <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ width: -100}} whileInView={{ width: 550}}  animate={{ }} transition={{ delay: 1.65, duration: 1 }} className={styles.bar_fill_2}>
        <div className={styles.flex_bar_text}>CSS</div>
        
        </motion.div>
      
        </div>

        <div className={styles.flex_bar}>
        <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ width: -100}} whileInView={{ width: 500}}  animate={{ }} transition={{ delay: 1.8, duration: 1 }} className={styles.bar_fill_3}>
        <div className={styles.flex_bar_text}>JavaScript</div>
        </motion.div>
        </div>

        <div className={styles.flex_bar}>
        <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ width: -100}} whileInView={{ width: 450}}  animate={{ }} transition={{ delay: 1.95, duration: 1 }} className={styles.bar_fill_4}>
        <div className={styles.flex_bar_text}>React</div>
        </motion.div>
        </div>

        <div className={styles.flex_bar}>
        <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ width: -100}} whileInView={{ width: 450}}  animate={{ }} transition={{ delay: 2.05, duration: 1 }} className={styles.bar_fill_5}>
        <div className={styles.flex_bar_text}>Node.js</div>
        </motion.div>
        </div>  

        <div className={styles.flex_bar}>
        <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ width: -100}} whileInView={{ width: 250}}  animate={{ }} transition={{ delay: 2.20, duration: 1 }} className={styles.bar_fill_6}>
        <div className={styles.flex_bar_text}>C#</div>
        </motion.div>
        </div>

        <div className={styles.flex_bar}>
        <motion.div viewport={{ once: true, amount: 0.8 }}  initial={{ width: -100}} whileInView={{ width: 300}}  animate={{ }} transition={{ delay: 2.35, duration: 1 }} className={styles.bar_fill_7}>
        <div className={styles.flex_bar_text}>Python</div>
        </motion.div>
        </div>

        

    </motion.div>
</div>



      </div>

       

      </div>

    
    </div>
    
 
    
    
    
    
    </>
    
   
  )
}
