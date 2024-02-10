import PersonalCard from "../personalCard/PersonalCard";
import Relevant from "../relevant/Relevant";
import styles from "./sidemenu.module.css";


const SideMenu = () => {
  return (
    <div className={styles.container}>
      <PersonalCard/>
      <div className={styles.line}></div>
      <Relevant />


    </div>
  )
}

export default SideMenu