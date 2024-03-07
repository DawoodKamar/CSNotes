"use client"

import { signIn, useSession } from "next-auth/react"
import Styles from "./login.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Login page main component

const LoginPage = () => {

  // Get the user session
  const { data, status } = useSession();  
  const router = useRouter();

  // Effect that pushes the user to the admin page once authenticated
  useEffect(() => {
    if(status ==="authenticated"){
      router.push("/admin")
    }  
  }, [status, router]);

  // Handle loading UI
    if(status ==="loading"){
      return (
        <div className={Styles.loading}>Loading....</div>
      )
    }


  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <h3>Admin login</h3>
        {/* OnClick sign in using google */}
        <div className={Styles.google} onClick={()=> signIn("google")}>Login with Google</div>
      </div>
      
    </div>
  )
}

export default LoginPage