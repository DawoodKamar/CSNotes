import styles from "./relevantItem.module.css";
import Link from "next/link";



const RelevantItem = () => {
  return (
    <div className={styles.container}>
        <div className={styles.items}>
          <Link href="/" className={styles.item}>
          <p className={styles.topic}>Databases</p>
          <h3 className={styles.title}>Lorem, ipsum dolor sit amet con adipisicing elit. Quam, enim!</h3>
        </Link>
      </div>
    </div>
  )
}

export default RelevantItem