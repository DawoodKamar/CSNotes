import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";


const Footer = () => {
  return (
  <>
    <div className={styles.line}></div>
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="/ "><h3 className={styles.logo}>CSNotes</h3></Link>
        {/* <div className={styles.icons}>
            <Image src="/youtube.png" alt="Youtube logo" width={18} height={18} />
            <Image src="/twitter.png" alt="twitter logo" width={18} height={18} />
        </div> */}
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