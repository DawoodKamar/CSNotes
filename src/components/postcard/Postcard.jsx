import Link from "next/link"
import styles from "./postcard.module.css"

const Postcard = ({id, item}) => {
  return (
    <div className={styles.container} key={id}>
      <Link href="/123" >
        <div className="top">
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.topic}>{item.topicSlug}</p>
        </div> 
        <div className={styles.bottom}>
          <p className={styles.desc}>
          {item.desc}
          </p>
        </div>
        <p className={styles.read}>Read more</p>
      </Link>
    </div>
  )
}

export default Postcard