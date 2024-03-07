"use client"

import { signOut, useSession } from "next-auth/react"
import Styles from "./notadmin.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

// Not an admin page main component

const NotAdmin = () => {

  // Get the user data
  const { data, status } = useSession();  
  const router = useRouter();

  // Automatically sign out the user
  useEffect(() => {
    if(status ==="authenticated"){
      signOut()
    }  
  }, []);

    // Handle loading UI
    if(status ==="loading"){
      return (
        <div className={Styles.loading}>Loading....</div>
      )
    }


  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3 >This is an Admin Only Page, you have been logged out!</h3>
        {/* Links to go home or try o sign in again */}
        <Link href="/" className={Styles.home}>Return home</Link>
        <Link href="/login" className={Styles.google}>Try Again</Link>
        
      </div>
      
    </div>
  )
}

export default NotAdmin