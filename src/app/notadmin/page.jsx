"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Styles from "./notadmin.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
        <h3>You Are Not an Admin</h3>
        <div className={Styles.google} onClick={()=> signIn("google")}>Login with Google</div>
      </div>
      
    </div>
  )
}

export default NotAdmin