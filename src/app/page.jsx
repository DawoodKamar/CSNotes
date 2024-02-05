
import styles from "./page.module.css";
import Postcard from "@/components/postcard/Postcard";

export default function Home() {
  return (
    <main className={styles.main}>
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
    </main>
  );
}
