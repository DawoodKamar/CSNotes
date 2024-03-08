import Pagination from "../pagination/Pagination";
import Postcard from "../postcard/Postcard";
import styles from "./postList.module.css";

// Fetching function to get the posts according to the current page and current topic(if chosen)
const getData = async (page, topic) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&topic=${topic || ""}`,
    {
      cache: "no-store", //temporary
    }
  );
  if (!res.ok) {
    throw new Error("Could not get posts!");
  }
  return res.json();
};

const PostList = async ({ page, topic }) => {
  const { posts, count } = await getData(page, topic);
  const POST_PER_PAGE = 5;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        {/* Map through the incoming posts and display them according to their item information */}
        {posts?.map((item) => (
          <Postcard item={item} key={item.id} id={item.id} />
        ))}
      </div>
      {/* Render pagination component */}
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default PostList;
