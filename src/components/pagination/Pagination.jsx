"use client"

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

// Pagination component, checks currunt topic and page and pushes the next or previous to the url

const Pagination = ({page, hasPrev, hasNext}) => {
  const router = useRouter()
  const query = useSearchParams()
  const topic = query.get("topic")
  const next = `?page=${page+1}`
  const prev = `?page=${page-1}`
  
  
  return (
    <div className={styles.container}>
      {/* If topic is defined push push topic and page other wise just push the page to the url */}
      <button className={styles.button} disabled={!hasPrev} onClick={()=>router.push(topic?`${prev}&topic=${topic}`:prev)}>Previous</button>
      <button className={styles.button} disabled={!hasNext} onClick={()=>router.push(topic?`${next}&topic=${topic}`:next)}>Next</button>
    </div>
  )
}

export default Pagination