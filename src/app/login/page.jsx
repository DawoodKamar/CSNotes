"use client"

import { signIn, useSession } from "next-auth/react"
import Styles from "./login.module.css"
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const { data, status } = useSession();  
  const router = useRouter();


    if(status ==="loading"){
      return (
        <div className={Styles.loading}>Loading....</div>
      )
    }
    if(status ==="authenticated"){
      router.push("/admin")
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