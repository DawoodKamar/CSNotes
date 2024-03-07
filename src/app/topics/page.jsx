import PostList from "@/components/postList/PostList"
import Styles from "./topics.module.css"
import SideMenu from "@/components/sideMenu/SideMenu"

// Topic page main component
const TopicPage = ({ searchParams }) => {
  // Use the URL parameter to gat the current page number
  // and the topic to be passed as props to the PostList component
  const page = parseInt(searchParams.page) || 1;
  const { topic } = searchParams

  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>#{topic}</h1>
        <div className={Styles.content}>
          {/* Render the post list component with the desired topic and page */}
            <PostList page={page} topic={topic}/>
            <SideMenu />
        </div>
        

    </div>
  )
}

export default TopicPage