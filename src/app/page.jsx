
import TopicsList from "@/components/topicsList/TopicsList";
import styles from "./home.module.css";
import Postcard from "@/components/postcard/Postcard";
import PostList from "@/components/postList/PostList";
import SideMenu from "@/components/sideMenu/SideMenu";

// const getData = async () =>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}) 
//   //it revalidates the data every hour

//   if (!res.ok){
//     throw new Error ("Something went wrong")
//   }

//   return res.json()
// }



const Home = () => {

  // const posts = await getData()

  return (
    <div className={styles.container}>
      {/* {posts.map((post)=>
    <div className={styles.post} key={post.id}>
      <Postcard post={post}/>
    </div>
 
      )} */}
      <TopicsList />
      <div className={styles.content}>
        <PostList />
        <SideMenu />


      </div>




  </div>

  )
}

export default Home


