"use client"

import Link from 'next/link'
import React from 'react'
import styles from "./blogpage.module.css"

const PageNotFound = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.error}>Sorry, the page you are looking for does not exist</h2>
        <Link href="/ " className={styles.link}>Return Home</Link>

    </div>
  )
}

export default PageNotFound