import styles from "./relevant.module.css";
import RelevantItem from "../relevantItem/RelevantItem";

const getData = async () =>{
  const res = await fetch(`http://localhost:3000/api/posts?pop=true&page=1`,{
    cache: "no-store", //temporary
  })
  if(!res.ok){
    throw new Error("Could not get posts!")
  }
  return res.json()
}


const Relevant = async () => {
  const { posts } = await getData()
  return (
    <div className={styles.container}>
      {posts?.map((item)=>(
        <RelevantItem item={item} key={item.id} id={item.id}/>
      ))}
      
      <div className={styles.line}></div>


    </div>
  )
}

export default Relevant