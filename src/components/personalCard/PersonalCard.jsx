import Link from "next/link";
import styles from "./personalcard.module.css";
import Image from "next/image";

// personal card on the side menue, display image and link to personal site
const PersonalCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/dawoodimg2.png" alt="Image of Dawood Kamar" height={302.4} width={226.8} priority />
        <h2 className={styles.text}>Welcome to CSNotes <p>By Dawood Kamar</p></h2>
        <Link href="https://dawoodkamar.com/" target="_blank" className={styles.link}>About Me</Link>


    </div>
  )
}

export default PersonalCard