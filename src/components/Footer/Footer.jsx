import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

// Component for the footer of the web application
const Footer = () => {
  return (
  <>
    <div className={styles.line}></div>
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="/ "><h3 className={styles.logo}>CSNotes</h3></Link>
      </div>
      <div className={styles.right}>
        <Link href="/">Home</Link>
        <Link href="https://dawoodkamar.com/">About Me</Link>
      </div>
    </div>
  </>
  )
}

export default Footer