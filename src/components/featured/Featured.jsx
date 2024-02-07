import styles from "./featured.module.css";
import Link from "next/link";


const Featured = () => {
  return (
    <div className={styles.container}>
      <Link href="/ "><h3 className={styles.logo}>CSNotes</h3></Link>
      <Link href="https://dawoodkamar.com/">About Me</Link>
    </div>
  )
}

export default Featured