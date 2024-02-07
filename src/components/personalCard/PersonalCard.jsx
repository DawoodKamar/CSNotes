import Link from "next/link";
import styles from "./personalcard.module.css";
import Image from "next/image";


const PersonalCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/dawoodimg2.png" alt="Image of Dawood Kamar" height={302.4} width={226.8} />
        <h2 className={styles.text}>Welcome to CSNotes <p>By Dawood Kamar</p></h2>
        <Link href="https://dawoodkamar.com/" className={styles.link}>About Me</Link>


    </div>
  )
}

export default PersonalCard