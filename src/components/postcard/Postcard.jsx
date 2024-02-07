import Link from "next/link"
import styles from "./postcard.module.css"

const Postcard = ({post}) => {
  return (
    <div className={styles.container}>
      <Link href="/blog/123">
        <div className="top">
          <h1 className={styles.title}>title</h1>
          <p className={styles.date}>nov, 1,2022</p>
        </div> 
        <div className={styles.bottom}>
          <p className={styles.desc}>body</p>
        </div>
        <p className={styles.read}>Read more</p>
      </Link>
    </div>
  )
}

export default Postcard