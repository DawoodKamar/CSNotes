import styles from "./topicsList.module.css";
import Link from "next/link";


const TopicsList = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Topics:</h2>
        <div className={styles.topics}>
              <Link href="/blog?top=databases" className={styles.topic}>
                Databases
              </Link>
        </div>        
        <div className={styles.topics}>
              <Link href="/blog?top=databases" className={styles.topic}>
                Databases
              </Link>
        </div>        
        <div className={styles.topics}>
              <Link href="/blog?top=databases" className={styles.topic}>
                Databases
              </Link>
        </div>        
        <div className={styles.topics}>
              <Link href="/blog?top=databases" className={styles.topic}>
                Databases
              </Link>
        </div>
    </div>
  )
}

export default TopicsList