import styles from "./relevantItem.module.css";
import Link from "next/link";

//  C
const RelevantItem = ({ id, item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Link href={`/posts/${item.slug}`} className={styles.item}>
          <p className={styles.topic}>{item.topicSlug}</p>
          <h3 className={styles.title}>{item.title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default RelevantItem;
