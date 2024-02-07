import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (<>
    <div className={styles.container}>
      <div className={styles.empty}></div>
      <Link href="/ "><h2 className={styles.logo}>CSNotes</h2></Link>
      <ThemeToggle />
    </div>
    <div className={styles.line}></div>
    </>
  )
}

export default Navbar