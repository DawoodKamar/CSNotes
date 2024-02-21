import PostList from "@/components/postList/PostList"
import Styles from "./topics.module.css"
import SideMenu from "@/components/sideMenu/SideMenu"


const TopicPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { topic } = searchParams

  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>#{topic}</h1>
        <div className={Styles.content}>
            <PostList page={page} topic={topic}/>
            <SideMenu />
        </div>
        

    </div>
  )
}

export default TopicPage