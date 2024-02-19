
import TopicsList from "@/components/topicsList/TopicsList";
import styles from "./home.module.css";
import PostList from "@/components/postList/PostList";
import SideMenu from "@/components/sideMenu/SideMenu";





const Home = ({ searchParams }) => {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <TopicsList />
      <div className={styles.content}>
        <PostList page={page}/>
        <SideMenu />


      </div>




  </div>

  )
}

export default Home


