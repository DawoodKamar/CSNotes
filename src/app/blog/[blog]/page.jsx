import styles from "./blogpage.module.css"

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <p className={styles.topic}>databases</p>
          <h1 className={styles.title}>title title title title title</h1> 
          <p className={styles.date}>Nov 3, 2034</p>
      </div>
      <div className={styles.postDetails}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, dolorum accusamus beatae reprehenderit pariatur eligendi quisquam dolores quo doloremque optio ratione numquam accusantium aut id natus, totam vel alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, dolorum accusamus beatae 
        <br></br><br></br>reprehenderit pariatur eligendi quisquam dolores quo doloremque optio ratione numquam accusantium aut id natus, totam vel alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, dolorum accusamus beatae reprehenderit pariatur eligendi quisquam dolores quo doloremque optio ratione numquam accusantium aut id natus, totam vel alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, dolorum accusamus beatae reprehenderit pariatur eligendi quisquam dolores quo doloremque optio ratione numquam accusantium aut id natus, totam vel alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, dolorum accusamus beatae reprehenderit pariatur eligendi <br></br><br></br>
        quisquam dolores quo doloremque optio ratione numquam accusantium aut id natus, totam vel alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, dolorum accusamus beatae reprehenderit pariatur eligendi quisquam dolores quo doloremque optio ratione numquam accusantium aut id natus, totam vel alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, dolorum accusamus beatae reprehenderit pariatur eligendi quisquam dolores quo doloremque optio ratione numquam accusantium aut id natus, totam vel alias.</p></div>

    </div>
  )
}

export default BlogPage