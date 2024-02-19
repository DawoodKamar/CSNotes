import Pagination from "../pagination/Pagination";
import Postcard from "../postcard/Postcard";
import styles from "./postList.module.css";

const getData = async (page) =>{
  const res = await fetch(`http:localhost:3000/api/posts?page=${page}`,{
    cache: "no-store", //temparory
  })
  if(!res.ok){
    throw new Error("Could not get posts!")
  }
  return res.json()
}

const PostList = async ({page}) => {
  const {posts, count} = await getData(page)
  const POST_PER_PAGE = 5
  
  const hasPrev = POST_PER_PAGE * (page-1) >0
  const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Recent Posts</h2>
        <div className={styles.posts}>
          {posts?.map((item) =>(
            <Postcard item = {item} key={item._id} />
          ))}

        </div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  )
}

export default PostList