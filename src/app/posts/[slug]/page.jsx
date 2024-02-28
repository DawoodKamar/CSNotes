import Quiz from "@/components/quiz/Quiz"
import styles from "./blogpage.module.css"
import createDOMPurify from "dompurify"
import { JSDOM } from 'jsdom';

const getData = async (slug) =>{

  const res = await fetch(`http://localhost:3000/api/posts/${slug}`,{
    cache: "no-store", //temporary
  })
  if(!res.ok){
    throw new Error("Could not get post!")
  }
  return res.json()
}




const BlogPage  = async ({params}) => {
  const { slug } = params
  const data = await getData(slug)
  const window = (new JSDOM('')).window;
  const DOMPurify = createDOMPurify(window);
  const cleanHTML = DOMPurify.sanitize(data?.desc)

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <p className={styles.topic}>{data.topicSlug}</p>
          <h1 className={styles.title}>{data.title}</h1> 
      </div>
      <div className={styles.postDetails} dangerouslySetInnerHTML={{__html: cleanHTML}}/> {/* find library to display safely can only be tags related to text*/}
      <Quiz />
    </div>
  )
}

export default BlogPage