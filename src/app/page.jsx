
import TopicsList from "@/components/topicsList/TopicsList";
import styles from "./home.module.css";
import PostList from "@/components/postList/PostList";
import SideMenu from "@/components/sideMenu/SideMenu";





const Home = () => {

  // const posts = await getData()

  return (
    <div className={styles.container}>
      <TopicsList />
      <div className={styles.content}>
        <PostList />
        <SideMenu />


      </div>




  </div>

  )
}

export default Home


