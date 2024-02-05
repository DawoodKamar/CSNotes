import Link from "next/link"
import styles from "./postcard.module.css"

const Postcard = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/post">
        <div className="top">
          <h1 className={styles.title}>title title title title title</h1>
          <p className={styles.date}>nov, 1,2022</p>
        </div> 
        <div className={styles.bottom}>
          <p className={styles.desc}>this is the post discription this is the post discription this is the post discription this is the post discription this is the post discription this is the post discription this is the post discription this is the post discription this is the post discription this is the post discription </p>
        </div>
        <p className={styles.read}>Read more</p>
      </Link>
    </div>
  )
}

export default Postcard