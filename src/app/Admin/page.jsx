"use client"

import Image from "next/image"
import Styles from "./adminPage.module.css"
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


const AdminPage = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const { status } = useSession();  
  const router = useRouter();
  if(status ==="unauthenticated"){
    router.push("/login")
  }

  return ( 
    <div className={Styles.container}>
      <input type="textarea" placeholder="Title" className={Styles.title}/>  
      <div className={Styles.editor}>
        <button className={Styles.button} onClick={()=> setOpen(!open)}>
          <Image src="/plus.png" alt="plus sign" width={16} height={16} />
        </button>
        {open && <div className={Styles.add}>
            <button className={Styles.button}>
              <Image src="/image.png" alt="plus sign" width={16} height={16} />
            </button>        <button className={Styles.button}>
              <Image src="/external.png" alt="plus sign" width={16} height={16} />
            </button>        <button className={Styles.button}>
              <Image src="/video.png" alt="plus sign" width={16} height={16} />
            </button>
        </div>}
        <ReactQuill className={Styles.disc} theme="bubble" value={value} onChange={setValue} placeholder="Discription" />

      </div>
      <button className={Styles.publish}>Publish</button>
      <button className={Styles.logout} onClick={signOut}>Logout</button>
    </div>
  )
}

export default AdminPage