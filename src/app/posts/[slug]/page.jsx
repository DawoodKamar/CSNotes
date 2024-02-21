import Quiz from "@/components/quiz/Quiz"
import styles from "./blogpage.module.css"

const getData = async (slug) =>{

  const res = await fetch(`http://localhost:3000/api/posts/${slug}`,{
    cache: "no-store", //temparory
  })
  if(!res.ok){
    throw new Error("Could not get post!")
  }
  return res.json()
}


const BlogPage  = async ({params}) => {
  const { slug } = params
  const data = await getData(slug)


  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <p className={styles.topic}>{data.topicSlug}</p>
          <h1 className={styles.title}>{data.title}</h1> 
      </div>
      <div className={styles.postDetails} dangerouslySetInnerHTML={{__html:data?.desc}}/>
      <Quiz />
    </div>
  )
}

export default BlogPage