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
  const data = await getData(page)
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Recent Posts</h2>
        <div className={styles.posts}>
          {data?.map((item) =>(
            <Postcard item = {item} key={item._id} />
          ))}

        </div>
        <Pagination />
    </div>
  )
}

export default PostList