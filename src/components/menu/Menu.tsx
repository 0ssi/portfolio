
import Head from 'next/head'
import { useState } from "react";
import Image from 'next/image'
import { delay, motion, useScroll, Variants } from "framer-motion"
import styling from '../menu/menu.module.css'


const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };
  

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<div></div>
  )
}

export default Menu