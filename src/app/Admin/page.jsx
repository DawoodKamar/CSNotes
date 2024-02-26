"use client"

import dynamic from 'next/dynamic';
import Image from "next/image"
import Styles from "./adminPage.module.css"
import { useEffect, useState } from "react"
import "react-quill/dist/quill.bubble.css"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const AdminPage = () => {
  const [file, setFile] = useState(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const { status } = useSession();  
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

    if(status ==="loading"){
      return (
        <div className={Styles.loading}>Loading....</div>
      )
    }




  return ( 
    <div className={Styles.container}>
      <input type="textarea" placeholder="Title" className={Styles.title}/>  
      <div className={Styles.editor}>
        <button className={Styles.button} onClick={()=> setOpen(!open)}>
          <Image src="/plus.png" alt="plus sign" width={16} height={16} />
        </button>
        {open && (
        <div className={Styles.add}>
            <input type='file' id='image' onChange={(e) => setFile(e.target.files[0])} style={{display: "none"}}/>
            <button className={Styles.button}>
              <label htmlFor='image'>
                <Image src="/image.png" alt="plus sign" width={16} height={16} />
              </label>
            </button>        
            <button className={Styles.button}>
              <Image src="/external.png" alt="plus sign" width={16} height={16} />
            </button>        <button className={Styles.button}>
              <Image src="/video.png" alt="plus sign" width={16} height={16} />
            </button>
        </div>)}
        <ReactQuill className={Styles.disc} theme="bubble" value={value} onChange={setValue} placeholder="Discription" />

      </div>
      <button className={Styles.publish}>Publish</button>
      <button className={Styles.logout} onClick={signOut}>Logout</button>
    </div>
  )
}

export default AdminPage