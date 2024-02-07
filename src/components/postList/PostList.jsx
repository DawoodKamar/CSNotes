import Pagination from "../pagination/Pagination";
import Postcard from "../postcard/Postcard";
import styles from "./postList.module.css";
import Link from "next/link";


const PostList = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Recent Posts</h2>
        <div className={styles.posts}>
            <Postcard />
            <Postcard />
            <Postcard />
            <Postcard />
            <Postcard />

        </div>
        <Pagination />
    </div>
  )
}

export default PostList