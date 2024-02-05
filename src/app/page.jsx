
import styles from "./home.module.css";
import Postcard from "@/components/postcard/Postcard";

export default function Home() {
  return (

      <div className={styles.container}>
        <div className={styles.post}>
          <Postcard />
        </div>
        <div className={styles.post}>
          <Postcard />
        </div>
        <div className={styles.post}>
          <Postcard />
        </div>
        <div className={styles.post}>
          <Postcard />
        </div>
      </div>
    
  );
}
