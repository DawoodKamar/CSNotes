"use client"

import Image from "next/image"
import styles from "./themeToggle.module.css"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle = () => {

    const {toggle, theme} = useContext(ThemeContext)

  return (
    <div className={styles.flex}>
    <div className={styles.container} onClick={toggle} style={theme === "dark"? {background: "#fafafa"} : { background: "#0e1422"}}>
        <Image className={styles.image} src="/moon.png" alt="moon image" width={24} height={24} />
        <div className={styles.circle} style={theme === "dark"? {left: 1, background: "#0e1422"} : {right:1, background: "#fafafa"}}></div>
        <Image className={styles.image} src="/sun.png" alt="sun image" width={24} height={24} />
    </div>
    </div>
  )
}

export default ThemeToggle