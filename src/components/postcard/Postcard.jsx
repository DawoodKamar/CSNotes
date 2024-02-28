import Link from "next/link"
import styles from "./postcard.module.css"
import createDOMPurify from "dompurify"
import { JSDOM } from 'jsdom';


const Postcard = ({id, item}) => {
  const window = (new JSDOM('')).window;
  const DOMPurify = createDOMPurify(window);
  const cleanHTML = DOMPurify.sanitize(item.desc.substring(0,200))

  return (
    <div className={styles.container} key={id}>
      <Link href={`/posts/${item.slug}`} >
        <div className="top">
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.topic}>{item.topicSlug}</p>
        </div> 
        <div className={styles.bottom}>
          <p className={styles.desc} dangerouslySetInnerHTML={{__html: cleanHTML}} />
        </div>
        <p className={styles.read}>Read more</p>
      </Link>
    </div>
  )
}

export default Postcard