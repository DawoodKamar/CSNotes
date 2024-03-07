import SideMenu from "@/components/sideMenu/SideMenu"
import styles from "./blogpage.module.css"

// Layout for the single post pages, adds the side menue component
const Bloglayout = ({children}) => {
  return (
    <div className={styles.layoutContainer}>
        <div className={styles.blogContainer}>
          {children}
        </div>
        <SideMenu />
    </div>

  )
}

export default Bloglayout