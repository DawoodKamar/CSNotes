import styles from "./blogpage.module.css"

const getData = async (blog) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blog}`);

  if (!res.ok){
    throw new Error ("Something went wrong");
  }

  return res.json()
}

const BlogPage  = async({params}) => {
  const {blog} = params;

  const post = await getData(blog);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <p className={styles.topic}>databases</p>
          <h1 className={styles.title}>{post.title}</h1> 
          <p className={styles.date}>Nov 3, 2034</p>
      </div>
      <div className={styles.postDetails}><p>{post.body}</p></div>

    </div>
  )
}

export default BlogPage