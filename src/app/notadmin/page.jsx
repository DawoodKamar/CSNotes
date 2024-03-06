"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Styles from "./notadmin.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const NotAdmin = () => {

  const { data, status } = useSession();  
  const router = useRouter();

  useEffect(() => {
    if(status ==="authenticated"){
      signOut()
    }  
  }, []);

    if(status ==="loading"){
      return (
        <div className={Styles.loading}>Loading....</div>
      )
    }


  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3 >This is an Admin Only Page, you have been logged out!</h3>
        <Link href="/" className={Styles.home}>Return home</Link>
        <Link href="/login" className={Styles.google}>Try Again</Link>
        
      </div>
      
    </div>
  )
}

export default NotAdmin