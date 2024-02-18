"use client"

import { signIn, useSession } from "next-auth/react"
import Styles from "./login.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {

  const { data, status } = useSession();  
  const router = useRouter();

  useEffect(() => {
    if(status ==="authenticated"){
      router.push("/admin")
    }  
  }, [status, router]);

    if(status ==="loading"){
      return (
        <div className={Styles.loading}>Loading....</div>
      )
    }


  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3>Admin login</h3>
        <div className={Styles.google} onClick={()=> signIn("google")}>Login with Google</div>
      </div>
      
    </div>
  )
}

export default LoginPage