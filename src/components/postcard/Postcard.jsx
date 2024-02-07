import Link from "next/link"
import styles from "./postcard.module.css"

const Postcard = ({post}) => {
  return (
    <div className={styles.container}>
      <Link href="/blog/123" >
        <div className="top">
          <h1 className={styles.title}>title of the post, sometimes it is long</h1>
          <p className={styles.topic}>Databases</p>
        </div> 
        <div className={styles.bottom}>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quos similique magni autem quia quod consequatur exercitationem praesentium nam porro tenetur dignissimos alias, modi reprehenderit. Sequi ipsa autem vitae nam.
          </p>
        </div>
        <p className={styles.read}>Read more</p>
      </Link>
    </div>
  )
}

export default Postcard