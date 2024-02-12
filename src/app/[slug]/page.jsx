import Quiz from "@/components/quiz/Quiz"
import styles from "./blogpage.module.css"

const BlogPage  = () => {

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <p className={styles.topic}>databases</p>
          <h1 className={styles.title}>title</h1> 
      </div>
      <div className={styles.postDetails}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta delectus repellat deleniti, vitae, nobis l
        abore repudiandae qui deserunt dolores eum dolore cupiditate. Asperiores tenetur impedit officia minima! Asperiores, laudantium quibusdam.</p></div>
      <Quiz />
    </div>
  )
}

export default BlogPage