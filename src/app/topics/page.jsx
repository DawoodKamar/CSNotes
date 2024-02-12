import PostList from "@/components/postList/PostList"
import Styles from "./topics.module.css"
import SideMenu from "@/components/sideMenu/SideMenu"


const TopicPage = () => {
  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>#Databases</h1>
        <div className={Styles.content}>
            <PostList />
            <SideMenu />
        </div>
        

    </div>
  )
}

export default TopicPage