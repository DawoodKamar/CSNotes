import styles from "./relevant.module.css";
import RelevantItem from "../relevantItem/RelevantItem";


const Relevant = () => {
  return (
    <div className={styles.container}>
      <RelevantItem />
      <RelevantItem />
      <RelevantItem />
      <RelevantItem />
      <RelevantItem />
      <div className={styles.line}></div>


    </div>
  )
}

export default Relevant