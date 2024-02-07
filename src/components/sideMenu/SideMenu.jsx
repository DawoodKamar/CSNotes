import PersonalCard from "../personalCard/PersonalCard";
import styles from "./sidemenu.module.css";


const SideMenu = () => {
  return (
    <div className={styles.container}>
      <PersonalCard/>
      <div className={styles.line}></div>


    </div>
  )
}

export default SideMenu