"use client"

import dynamic from 'next/dynamic';
import Image from "next/image"
import Styles from "./adminPage.module.css"
import { useEffect, useState, useRef } from "react"
import "react-quill/dist/quill.bubble.css"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { getStorage, ref as firebaseRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import sess from '@/utils/users';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// const storage = getStorage(app);

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const { data: session, status } = useSession(); // Destructured session and status from useSession()
  const router = useRouter();
  const [quill, setQuill] = useState(null);

 

 

  // useEffect (()=>{
  //   const storage = getStorage(app);
  //   const upload = () => {
  //     const name = new Date().getTime() + file.name;
  //     const storageRef = firebaseRef(storage, name);

  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.error("Upload error:", error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setUploadedImages(prevImages => [...prevImages, downloadURL]);
  //         });
          
  //       }
  //     );
  //   };
  //   file && upload();
  // },[file])
  useEffect(() => {
    if (file) {
      const storage = getStorage(app);
      const name = new Date().getTime() + file.name;
      const storageRef = firebaseRef(storage, name);
  
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      }, (error) => {
        console.error("Upload failed:", error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploadedImages(prevImages => [...prevImages, downloadURL]);
        });
      });
    }
  }, [file]);

  const insertImage = (imageSrc) => {
    const editor = document.querySelector('.ql-editor');
    if (editor) {
      const img = document.createElement('img');
      img.src = imageSrc;
      editor.appendChild(img);
    }
  };
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
          img: [...uploadedImages],
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
        <ReactQuill className={Styles.disc} theme="bubble" value={value} onChange={setValue} />
      {uploadedImages.map((imageSrc, index) => (
        <div key={index}>
          <img src={imageSrc} alt={`Uploaded ${index}`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <button onClick={() => insertImage(imageSrc)}>Insert</button>
        </div>
      ))}
      </div>
      <button className={Styles.publish} onClick={handleSubmit}>Publish</button>
      <button className={Styles.logout} onClick={signOut}>Logout</button>
      <div>

</div>

    </div>
  )
}

export default AdminPage