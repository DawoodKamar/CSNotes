import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/ "><h2 className={styles.logo}>CSNotes</h2></Link>
      <Link href="https://dawoodkamar.com/">About Me</Link>
    </div>
  )
}

export default Navbar