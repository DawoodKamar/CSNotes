import Pagination from "../pagination/Pagination";
import styles from "./postList.module.css";
import Link from "next/link";


const PostList = () => {
  return (
    <div className={styles.container}>
        postList
        <Pagination />
    </div>
  )
}

export default PostList