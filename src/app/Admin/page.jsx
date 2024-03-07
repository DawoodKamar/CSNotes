"use client"


// Importing necessary modules and components
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

// Dynamically importing ReactQuill to avoid server side rendering issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });



//Main Admin page component 

const AdminPage = () => {
   // State management
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const { data: session, status } = useSession(); 
  const router = useRouter();


 // Effect hook to handle file uploads using firebase
  useEffect(() => {
    if (file) {
      const storage = getStorage(app);
      const name = new Date().getTime() + file.name;
      const storageRef = firebaseRef(storage, name);
      
      // Start the file upload
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Monitor the upload progress
      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      }, (error) => {
        console.error("Upload failed:", error);
      }, () => {
        // Get the file URL and update the state with the new image URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploadedImages(prevImages => [...prevImages, downloadURL]);
        });
      });
    }
  }, [file]);

  // Handle the insert image functionaliy
  const insertImage = (imageSrc) => {
    const editor = document.querySelector('.ql-editor');
    if (editor) {
      const img = document.createElement('img');
      img.src = imageSrc;
      editor.appendChild(img);
    }
  };

  // Effect hook to ensure only admins can access this page
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
  
  // Utility function to generate slugs
    const slugify = (str) =>{
      return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
    }

    // Function to handle post submission
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

    
    // Component UI
  return ( 
    <div className={Styles.container}>
      {/* Title input */}
      <input type="textarea" placeholder="Title" className={Styles.title} onChange={e=>setTitle(e.target.value)}/> 

      {/* Category selection */} 
      <select className={Styles.select} defaultValue={"javascript"} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="javascript">Javascript</option>
        <option value="java">Java</option>
        <option value="databases">Databases</option>
      </select>
      {/* Quill editor and image upload section */}
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
        {/* Render uploaded images with an option to insert into the post */}
      {uploadedImages.map((imageSrc, index) => (
        <div key={index}>
          <img src={imageSrc} alt={`Uploaded ${index}`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <button onClick={() => insertImage(imageSrc)}>Insert</button>
        </div>
      ))}
      {/* Submit and logout buttons */}
      </div>
      <button className={Styles.publish} onClick={handleSubmit}>Publish</button>
      <button className={Styles.logout} onClick={signOut}>Logout</button>
      <div>

</div>

    </div>
  )
}

export default AdminPage