"use client"

import Image from "next/image"
import styles from "./themeToggle.module.css"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle = () => {

    const {toggle, theme} = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark"? {background: "white"} : { background: "black"}}>
        <Image src="/moon.png" alt="moon image" width={24} height={24} />
        <div className={styles.circle} style={theme === "dark"? {left: 1, background: "black"} : {right:1, background: "white"}}></div>
        <Image src="/sun.png" alt="sun image" width={24} height={24} />
    </div>
  )
}

export default ThemeToggle