"use client"

import dynamic from 'next/dynamic';
import Image from "next/image"
import Styles from "./adminPage.module.css"
import { useEffect, useState } from "react"
import "react-quill/dist/quill.bubble.css"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from '@/utils/firebase';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';
import sess from '@/utils/users';
import error from '../error';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// const storage = getStorage(app);

const AdminPage = () => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [media, setMedia] = useState("")
  const [value, setValue] = useState("")
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const { status } = useSession();  
  const router = useRouter();
 
  // console.log(status)

  useEffect (()=>{
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  },[file])


  useEffect(() => {
   sess().then(session =>{ 
      const user = session
      if (session?.user.role !== 'ADMIN'){
        
        router.push('/notadmin');
        // throw new Error('You need to be an admin!')
      }
    })
  if (status === 'unauthenticated') {
    router.push('/login');
  }
}, [status, router]);

if(status ==="loading"){
  return (
    <div className={Styles.loading}>Loading....</div>
  )
}

    const slugify = (str) =>{
      return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
    }

    const handleSubmit = async () =>{
      const res = await fetch("/api/posts",{
        method: "POST",
        body: JSON.stringify({
          title,
          desc:value,
          img: media,
          slug: slugify(title),
          topicSlug: catSlug || "javascript",
        })
      })
      console.log(res)
    }


  return ( 
    <div className={Styles.container}>
      <input type="textarea" placeholder="Title" className={Styles.title} onChange={e=>setTitle(e.target.value)}/>  
      <select className={Styles.select} defaultValue={"javascript"} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="javascript">Javascript</option>
        <option value="java">Java</option>
        <option value="databases">Databases</option>
      </select>
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
      <button className={Styles.publish} onClick={handleSubmit}>Publish</button>
      <button className={Styles.logout} onClick={signOut}>Logout</button>
    </div>
  )
}

export default AdminPage