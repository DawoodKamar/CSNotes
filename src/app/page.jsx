
import TopicsList from "@/components/topicsList/TopicsList";
import styles from "./home.module.css";
import PostList from "@/components/postList/PostList";
import SideMenu from "@/components/sideMenu/SideMenu";





const Home = ({ searchParams }) => {
  // Use the URL parameter to gat the current page number
  // to be passed as props to the PostList component
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <TopicsList />
      <div className={styles.content}>
        {/* Render the post list component with the desired page */}
        <PostList page={page}/>
        <SideMenu />
      </div>
  </div>

  )
}

export default Home


