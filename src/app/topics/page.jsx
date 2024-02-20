import PostList from "@/components/postList/PostList"
import Styles from "./topics.module.css"
import SideMenu from "@/components/sideMenu/SideMenu"


const TopicPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams

  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>#Databases</h1>
        <div className={Styles.content}>
            <PostList page={page} />
            <SideMenu />
        </div>
        

    </div>
  )
}

export default TopicPage